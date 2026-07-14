"use client";

import { PASS_PERCENT } from "@/lib/quiz";

export type ScoreSummaryProps = {
  correctCount: number;
  total: number;
  scorePercent: number;
  result: "ADMIS" | "RESPINS";
  onRepeatMistakes: () => void;
  onNewRandom: () => void;
  onReview: () => void;
  wrongIdsFromRun: string[];
  hasStoredMistakes: boolean;
};

export function ScoreSummary({
  correctCount,
  total,
  scorePercent,
  result,
  onRepeatMistakes,
  onNewRandom,
  onReview,
  wrongIdsFromRun,
  hasStoredMistakes,
}: ScoreSummaryProps) {
  const pass = result === "ADMIS";
  const canRepeatOnlyMistakes =
    (wrongIdsFromRun.length > 0 || hasStoredMistakes) === true;
  const mistakesCount = wrongIdsFromRun.length;

  return (
    <section className="w-full">
      <div
        className={`rounded-xl border p-6 text-center ${
          pass
            ? "border-emerald-300 bg-emerald-50"
            : "border-red-300 bg-red-50"
        }`}
      >
        <p
          className={`text-4xl font-extrabold tracking-tight ${
            pass ? "text-emerald-700" : "text-red-700"
          }`}
        >
          {result}
        </p>
        <p className="mt-3 text-xl font-semibold text-slate-900">
          {correctCount} / {total} corecte
        </p>
        <p className="mt-1 text-base text-slate-700">
          Scor: {scorePercent}% · Prag de promovare: {PASS_PERCENT}%
        </p>
        {mistakesCount > 0 && (
          <p className="mt-2 text-sm text-slate-600">
            Ai greșit {mistakesCount} {mistakesCount === 1 ? "întrebare" : "întrebări"} în acest test.
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onNewRandom}
          className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Începe un test nou
        </button>
        {canRepeatOnlyMistakes && (
          <button
            type="button"
            onClick={onRepeatMistakes}
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Repetă doar greșelile
          </button>
        )}
        <button
          type="button"
          onClick={onReview}
          className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          Revede întrebările
        </button>
      </div>
    </section>
  );
}
