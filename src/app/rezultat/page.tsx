"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ScoreSummary } from "@/components/ScoreSummary";
import { questions } from "@/data/questions";
import { generateTestRun } from "@/lib/quiz";
import { saveRun } from "@/lib/run-store";
import { useQuizProgress } from "@/hooks/useQuizProgress";

export default function ResultsPage() {
  const router = useRouter();
  const { progress, hydrated } = useQuizProgress();
  const [showReview, setShowReview] = useState(false);

  const lastRun = useMemo(
    () => (progress.lastRuns.length > 0 ? progress.lastRuns[0] : null),
    [progress.lastRuns],
  );

  const wrongQuestionsFromBank = useMemo(() => {
    const set = new Set(progress.wrongQuestionIds);
    return questions.filter((q) => set.has(q.id));
  }, [progress.wrongQuestionIds]);

  if (!hydrated) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-16">Se încarcă...</main>
    );
  }

  function newRandom() {
    const run = generateTestRun({ bank: questions, count: 50 });
    saveRun(run, { section: "all", count: run.questions.length, onlyWrong: false });
    router.push("/test");
  }

  function repeatMistakes() {
    if (progress.wrongQuestionIds.length === 0) return;
    const run = generateTestRun({
      bank: questions,
      onlyWrongIds: progress.wrongQuestionIds,
      count: progress.wrongQuestionIds.length,
    });
    saveRun(run, {
      section: "wrong",
      count: run.questions.length,
      onlyWrong: true,
    });
    router.push("/quiz");
  }

  if (!lastRun) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-16 text-center">
        <p className="text-lg text-slate-700">
          Nu ai finalizat încă un test.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
        >
          Începe un test nou
        </Link>
      </main>
    );
  }

  const wrongIdsFromRun = lastRun
    ? Array.from(
        new Set(
          progress.wrongQuestionIds.slice(
            0,
            Math.min(
              progress.wrongQuestionIds.length,
              lastRun.total - lastRun.correctCount,
            ),
          ),
        ),
      )
    : [];

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-16">
      <h1 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900">
        Rezultat test
      </h1>

      <ScoreSummary
        correctCount={lastRun.correctCount}
        total={lastRun.total}
        scorePercent={lastRun.scorePercent}
        result={lastRun.result}
        onRepeatMistakes={repeatMistakes}
        onNewRandom={newRandom}
        onReview={() => setShowReview((v) => !v)}
        wrongIdsFromRun={wrongIdsFromRun}
        hasStoredMistakes={progress.wrongQuestionIds.length > 0}
      />

      {showReview && wrongQuestionsFromBank.length > 0 && (
        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Întrebări greșite ({wrongQuestionsFromBank.length})
          </h2>
          <ol className="flex flex-col gap-4">
            {wrongQuestionsFromBank.map((q, i) => (
              <li key={q.id} className="rounded-lg border border-slate-200 p-4">
                <p className="text-sm text-slate-500">
                  {i + 1}. {q.section}
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  {q.question}
                </p>
                <ul className="mt-2 flex flex-col gap-1 text-sm">
                  {q.options.map((opt) => {
                    const isCorrect = q.correctOptionIds.includes(opt.id);
                    return (
                      <li
                        key={opt.id}
                        className={
                          isCorrect
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }
                      >
                        {opt.id}. {opt.text}
                        {isCorrect ? " — corect" : ""}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-semibold">De ce e corect:</span>{" "}
                  {q.tooltipCorrect}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <footer className="mt-10 text-center text-xs text-slate-400">
        <Link href="/" className="underline">
          Înapoi la configurare
        </Link>
      </footer>
    </main>
  );
}
