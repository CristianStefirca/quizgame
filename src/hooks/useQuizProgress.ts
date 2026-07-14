"use client";

import { useCallback, useEffect, useState } from "react";
import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getFirebaseDb, PROGRESS_COLLECTION } from "@/lib/firebase";
import { getUserCode } from "@/lib/auth";

const STORAGE_KEY = "admin-quiz-progress-v2";

export type ScoresBySection = Record<string, { correct: number; total: number }>;

export type LastRunSummary = {
  runId: string;
  createdAt: number;
  section: string;
  count: number;
  correctCount: number;
  total: number;
  scorePercent: number;
  result: "ADMIS" | "RESPINS";
  durationMs?: number;
};

export type QuizProgress = {
  wrongQuestionIds: string[];
  scoresBySection: ScoresBySection;
  lastRuns: LastRunSummary[];
};

const EMPTY: QuizProgress = {
  wrongQuestionIds: [],
  scoresBySection: {},
  lastRuns: [],
};

function readFromStorage(): QuizProgress {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(`${STORAGE_KEY}:${getUserCode()}`);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<QuizProgress>;
    return {
      wrongQuestionIds: parsed.wrongQuestionIds ?? [],
      scoresBySection: parsed.scoresBySection ?? {},
      lastRuns: parsed.lastRuns ?? [],
    };
  } catch {
    return EMPTY;
  }
}

function writeToStorage(progress: QuizProgress) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(`${STORAGE_KEY}:${getUserCode()}`, JSON.stringify(progress));
  } catch {
    /* ignore quota errors */
  }
}

function sectionWeight(p: QuizProgress): number {
  return Object.values(p.scoresBySection).reduce((s, v) => s + v.total, 0);
}

function pickMoreComplete(
  a: QuizProgress,
  b: QuizProgress,
): QuizProgress {
  const weightA =
    a.lastRuns.length + a.wrongQuestionIds.length + sectionWeight(a);
  const weightB =
    b.lastRuns.length + b.wrongQuestionIds.length + sectionWeight(b);
  if (weightA >= weightB) return a;
  return b;
}

async function fetchFromFirestore(): Promise<QuizProgress | null> {
  const db = getFirebaseDb();
  if (!db) return null;
  try {
    const snap = await getDoc(doc(db, PROGRESS_COLLECTION, getUserCode()));
    if (!snap.exists()) return null;
    const data = snap.data() as Partial<QuizProgress>;
    return {
      wrongQuestionIds: data.wrongQuestionIds ?? [],
      scoresBySection: data.scoresBySection ?? {},
      lastRuns: data.lastRuns ?? [],
    };
  } catch {
    return null;
  }
}

async function pushToFirestore(progress: QuizProgress): Promise<void> {
  const db = getFirebaseDb();
  if (!db) return;
  try {
    await setDoc(doc(db, PROGRESS_COLLECTION, getUserCode()), {
      wrongQuestionIds: progress.wrongQuestionIds,
      scoresBySection: progress.scoresBySection,
      lastRuns: progress.lastRuns,
      updatedAt: Date.now(),
    });
  } catch {
    /* offline or permission error; localStorage already has the data */
  }
}

export function useQuizProgress() {
  const [progress, setProgress] = useState<QuizProgress>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const local = readFromStorage();

    async function hydrate() {
      const remote = await fetchFromFirestore();
      if (cancelled) return;

      let merged: QuizProgress;
      if (remote) {
        merged = pickMoreComplete(local, remote);
        writeToStorage(merged);
        if (
          merged.wrongQuestionIds.length !== remote.wrongQuestionIds.length ||
          merged.lastRuns.length !== remote.lastRuns.length ||
          sectionWeight(merged) !== sectionWeight(remote)
        ) {
          void pushToFirestore(merged);
        }
      } else {
        merged = local;
      }

      setProgress(merged);
      setHydrated(true);
    }

    void hydrate();
    return () => {
      cancelled = true;
    };
  }, []);

  const persist = useCallback((next: QuizProgress) => {
    writeToStorage(next);
    void pushToFirestore(next);
  }, []);

  const recordRun = useCallback(
    (summary: LastRunSummary, wrongIdsFromRun: string[]) => {
      setProgress((prev) => {
        const wrongSet = new Set(prev.wrongQuestionIds);
        for (const id of wrongIdsFromRun) wrongSet.add(id);
        const next: QuizProgress = {
          wrongQuestionIds: Array.from(wrongSet),
          scoresBySection: { ...prev.scoresBySection },
          lastRuns: [summary, ...prev.lastRuns].slice(0, 20),
        };
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const updateSectionScore = useCallback(
    (section: string, correct: number, total: number) => {
      setProgress((prev) => {
        const prevScore = prev.scoresBySection[section];
        const next: QuizProgress = {
          ...prev,
          scoresBySection: {
            ...prev.scoresBySection,
            [section]: {
              correct: (prevScore?.correct ?? 0) + correct,
              total: (prevScore?.total ?? 0) + total,
            },
          },
        };
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const clearWrongIds = useCallback(() => {
    setProgress((prev) => {
      const next: QuizProgress = { ...prev, wrongQuestionIds: [] };
      persist(next);
      return next;
    });
  }, [persist]);

  const clearAll = useCallback(() => {
    writeToStorage(EMPTY);
    void pushToFirestore(EMPTY);
    setProgress(EMPTY);
  }, []);

  return {
    progress,
    hydrated,
    recordRun,
    updateSectionScore,
    clearWrongIds,
    clearAll,
  };
}
