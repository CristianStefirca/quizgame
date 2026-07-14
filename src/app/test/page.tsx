"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { QuestionCard } from "@/components/QuestionCard";
import { QuestionNav } from "@/components/QuestionNav";
import { questions } from "@/data/questions";
import { generateTestRun, getScorePercent, getPassFail } from "@/lib/quiz";
import type {
  AnswerRecord,
  RunMeta,
} from "@/lib/active-run-store";
import {
  clearActiveRun,
  loadLocal,
  loadRemote,
  persistState,
  startRun,
} from "@/lib/active-run-store";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import type { TestRun } from "@/lib/quiz-types";

function formatDuration(ms: number): string {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

export default function QuizPage() {
  const router = useRouter();
  const { recordRun } = useQuizProgress();

  const [run, setRun] = useState<TestRun | null>(null);
  const [meta, setMeta] = useState<RunMeta | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [finishing, setFinishing] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    if (!run) return;
    function tick() {
      setElapsedMs(Date.now() - run!.createdAt);
    }
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [run]);

  useEffect(() => {
    let cancelled = false;

    function applyState(s: {
      run: TestRun;
      meta: RunMeta;
      answers: AnswerRecord[];
      current: number;
    }) {
      setRun(s.run);
      setMeta(s.meta);
      setAnswers(s.answers);
      setCurrent(Math.min(s.current, s.run.questions.length));
    }

    const local = loadLocal();
    if (local) applyState(local);

    async function hydrate() {
      const remote = await loadRemote();
      if (cancelled) return;
      if (remote && (!local || remote.updatedAt > local.updatedAt)) {
        applyState(remote);
      }
      setHydrated(true);
    }

    void hydrate();
    return () => {
      cancelled = true;
    };
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
        if (run && meta) {
          persistState({ run, meta, answers: next, current, updatedAt: Date.now() });
        }
        return next;
      });
    },
    [run, meta, current],
  );

  function handleAnswerLocked(
    wasCorrect: boolean,
    questionId: string,
    selectedIds: string[],
  ) {
    if (!q || q.id !== questionId) return;
    addOrUpdateAnswer(questionId, selectedIds, wasCorrect);
  }

  function goToIndex(index: number) {
    if (!run || !meta) return;
    setCurrent(index);
    persistState({ run, meta, answers, current: index, updatedAt: Date.now() });
  }

  function handleNext() {
    if (!run) return;
    if (current + 1 >= run.questions.length) {
      setFinishing(true);
    } else {
      goToIndex(current + 1);
    }
  }

  function handlePrev() {
    if (current === 0) return;
    goToIndex(current - 1);
  }

  function handleJump(index: number) {
    if (!run) return;
    if (index < 0 || index >= run.questions.length) return;
    goToIndex(index);
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
        durationMs: Date.now() - run.createdAt,
      },
      wrongIdsFromRun,
    );
    clearActiveRun();
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
    startRun(newRun, meta);
    setRun(newRun);
    setAnswers([]);
    setCurrent(0);
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
  const existingAnswer = answers.find((a) => a.questionId === q.id);
  const correctSoFar = answers.filter((a) => a.correct).length;
  const wrongSoFar = answers.filter((a) => !a.correct).length;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-4 pb-28 sm:py-12 sm:pb-12">
      <header className="mb-4 flex items-center justify-between gap-2 sm:mb-6 sm:gap-3">
        <Link href="/" className="text-sm text-slate-500 underline">
          ← Renunță
        </Link>
        <QuestionNav
          total={run.questions.length}
          current={current}
          answers={answers}
          questionIds={run.questions.map((qq) => qq.id)}
          onJump={handleJump}
        />
        <span className="flex items-center gap-2 text-xs text-slate-500 sm:gap-3 sm:text-sm">
          <span className="tabular-nums" title="Timp scurs">
            ⏱ {formatDuration(elapsedMs)}
          </span>
          {current + 1} / {run.questions.length}
        </span>
      </header>

      <div className="mb-2 flex h-1.5 w-full gap-0.5">
        {run.questions.map((qq) => {
          const a = answers.find((x) => x.questionId === qq.id);
          const color = !a
            ? "bg-slate-200"
            : a.correct
              ? "bg-emerald-500"
              : "bg-red-500";
          return (
            <div
              key={qq.id}
              className={`h-full flex-1 rounded-full transition-colors duration-300 ${color}`}
            />
          );
        })}
      </div>

      <div className="mb-6 flex items-center justify-end gap-3 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 rounded-full border border-emerald-300 bg-emerald-100" />
          {correctSoFar} corecte
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2.5 w-2.5 rounded-full border border-red-300 bg-red-100" />
          {wrongSoFar} greșite
        </span>
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
          onPrev={handlePrev}
          canGoPrev={current > 0}
          initialSelectedIds={existingAnswer?.selectedIds}
          initialLocked={!!existingAnswer}
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
