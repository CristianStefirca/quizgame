"use client";

import type { TestRun, TestRunQuestion } from "@/lib/quiz-types";

const RUN_KEY = "admin-quiz-active-run-v2";
const ANSWERS_KEY = "admin-quiz-active-answers-v2";
const META_KEY = "admin-quiz-active-meta-v2";

export type RunMeta = {
  section: string;
  count: number;
  onlyWrong: boolean;
};

export type AnswerRecord = {
  questionId: string;
  selectedIds: string[];
  correct: boolean;
};

function isBrowser() {
  return typeof window !== "undefined";
}

export function saveRun(run: TestRun, meta: RunMeta) {
  if (!isBrowser()) return;
  sessionStorage.setItem(RUN_KEY, JSON.stringify(run));
  sessionStorage.setItem(META_KEY, JSON.stringify(meta));
  sessionStorage.setItem(ANSWERS_KEY, JSON.stringify([]));
}

export function loadRun(): TestRun | null {
  if (!isBrowser()) return null;
  const raw = sessionStorage.getItem(RUN_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as TestRun;
  } catch {
    return null;
  }
}

export function loadMeta(): RunMeta | null {
  if (!isBrowser()) return null;
  const raw = sessionStorage.getItem(META_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as RunMeta;
  } catch {
    return null;
  }
}

export function clearRun() {
  if (!isBrowser()) return;
  sessionStorage.removeItem(RUN_KEY);
  sessionStorage.removeItem(META_KEY);
  sessionStorage.removeItem(ANSWERS_KEY);
}

export function loadAnswers(): AnswerRecord[] {
  if (!isBrowser()) return [];
  const raw = sessionStorage.getItem(ANSWERS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as AnswerRecord[];
  } catch {
    return [];
  }
}

export function saveAnswers(answers: AnswerRecord[]) {
  if (!isBrowser()) return;
  sessionStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function buildFakeRunFromQuestions(questions: TestRunQuestion[]): TestRun {
  return {
    runId: "review-" + Date.now(),
    createdAt: Date.now(),
    totalAvailable: questions.length,
    questions,
  };
}
