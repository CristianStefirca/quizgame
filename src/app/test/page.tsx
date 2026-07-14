"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { QuestionCard } from "@/components/QuestionCard";
import { questions } from "@/data/questions";
import { generateTestRun, getScorePercent, getPassFail } from "@/lib/quiz";
import type {
  AnswerRecord,
  RunMeta,
} from "@/lib/run-store";
import {
  clearRun,
  loadAnswers,
  loadMeta,
  loadRun,
  saveAnswers,
  saveRun,
} from "@/lib/run-store";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import type { TestRun } from "@/lib/quiz-types";

export default function QuizPage() {
  const router = useRouter();
  const { recordRun } = useQuizProgress();

  const [run, setRun] = useState<TestRun | null>(null);
  const [meta, setMeta] = useState<RunMeta | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [lastSelectedIds, setLastSelectedIds] = useState<string[]>([]);
  const [finishing, setFinishing] = useState(false);

  useEffect(() => {
    const r = loadRun();
    const m = loadMeta();
    if (!r) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHydrated(true);
      return;
    }
     
    setRun(r);
     
    setMeta(m);
    const saved = loadAnswers();
     
    setAnswers(saved);
     
    setCurrent(Math.min(saved.length, r.questions.length));
     
    setHydrated(true);
  }, []);

  const q = useMemo(
    () => (run ? run.questions[current] ?? null : null),
    [run, current],
  );

  const addOrUpdateAnswer = useCallback(
    (questionId: string, selectedIds: string[], correct: boolean) => {
      setAnswers((prev) => {
        const without = prev.filter((a) => a.questionId !== questionId);
        const next = [...without, { questionId, selectedIds, correct }];
        saveAnswers(next);
        return next;
      });
    },
    [],
  );

  function handleAnswerLocked(wasCorrect: boolean, questionId: string) {
    if (!q || q.id !== questionId) return;
    addOrUpdateAnswer(questionId, lastSelectedIds, wasCorrect);
  }

  function handleSelectChange(ids: string[]) {
    setLastSelectedIds(ids);
  }

  function handleNext() {
    if (!run) return;
    if (current + 1 >= run.questions.length) {
      setFinishing(true);
    } else {
      setCurrent((c) => c + 1);
      setLastSelectedIds([]);
    }
  }

  const finish = useCallback(() => {
    if (!run || !meta) return;
    const indexed: AnswerRecord[] = run.questions.map((qq) => {
      const a = answers.find((x) => x.questionId === qq.id);
      return a ?? { questionId: qq.id, selectedIds: [], correct: false };
    });
    const correctCount = indexed.filter((a) => a.correct).length;
    const total = run.questions.length;
    const scorePercent = getScorePercent(correctCount, total);
    const result = getPassFail(scorePercent);
    const wrongIdsFromRun = indexed.filter((a) => !a.correct).map((a) => a.questionId);

    recordRun(
      {
        runId: run.runId,
        createdAt: run.createdAt,
        section: meta.section,
        count: run.questions.length,
        correctCount,
        total,
        scorePercent,
        result,
      },
      wrongIdsFromRun,
    );
    clearRun();
    router.push("/rezultat");
  }, [run, meta, answers, recordRun, router]);

  useEffect(() => {
    if (!finishing) return;
    finish();
  }, [finishing, finish]);

  function restartSame() {
    if (!meta) return;
    const newRun = generateTestRun({
      bank: questions,
      section: meta.onlyWrong ? undefined : meta.section,
      count: meta.count,
      onlyWrongIds: meta.onlyWrong
        ? answers.filter((a) => !a.correct).map((a) => a.questionId)
        : undefined,
    });
    saveRun(newRun, meta);
    setRun(newRun);
    setAnswers([]);
    setCurrent(0);
    setLastSelectedIds([]);
  }

  if (!hydrated) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-16">Se încarcă...</main>
    );
  }

  if (!run || run.questions.length === 0) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-16 text-center">
        <p className="text-lg text-slate-700">
          Nu există un test activ.Începe unul nou.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
        >
          Înapoi la configurare
        </Link>
      </main>
    );
  }

  if (!q) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-16">
        Finalizare...
      </main>
    );
  }

  const isLast = current + 1 === run.questions.length;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-12">
      <header className="mb-6 flex items-center justify-between">
        <Link href="/" className="text-sm text-slate-500 underline">
          ← Renunță
        </Link>
        <span className="text-sm text-slate-500">
          {current + 1} / {run.questions.length}
        </span>
      </header>

      <div className="mb-6 h-1.5 w-full overflow-hidden rounded bg-slate-200">
        <div
          className="h-full bg-emerald-500 transition-all"
          style={{
            width: `${Math.round((current / run.questions.length) * 100)}%`,
          }}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <QuestionCard
          key={q.id + "-" + current}
          question={q}
          index={current}
          total={run.questions.length}
          isLast={isLast}
          onAnswerLocked={handleAnswerLocked}
          onNext={handleNext}
          onSelectChange={handleSelectChange}
        />
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        Test generat din {run.totalAvailable} întrebări disponibile.
        <button
          type="button"
          onClick={restartSame}
          className="ml-2 underline hover:text-slate-600"
        >
          Reîncepe cu alte întrebări
        </button>
      </p>
    </main>
  );
}
