"use client";

import { useMemo, useState } from "react";
import { AnswerOption } from "@/components/AnswerOption";
import { TooltipWhy } from "@/components/TooltipWhy";
import { isCorrectAnswer } from "@/lib/quiz";
import type { QuizQuestion } from "@/lib/quiz-types";

export type QuestionCardProps = {
  question: QuizQuestion;
  index: number;
  total: number;
  onNext: () => void;
  onAnswerLocked?: (wasCorrect: boolean, questionId: string) => void;
  onSelectChange?: (selectedIds: string[]) => void;
  isLast: boolean;
};

export function QuestionCard({
  question,
  index,
  total,
  onNext,
  onAnswerLocked,
  onSelectChange,
  isLast,
}: QuestionCardProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [locked, setLocked] = useState(false);
  const multi = question.type === "multi";

  const wasCorrect = useMemo(
    () => isCorrectAnswer(selectedIds, question.correctOptionIds),
    [selectedIds, question.correctOptionIds],
  );

  function updateSelection(next: string[]) {
    setSelectedIds(next);
    onSelectChange?.(next);
  }

  function handleSelect(id: string) {
    if (locked) return;
    if (multi) {
      const next = selectedIds.includes(id)
        ? selectedIds.filter((x) => x !== id)
        : [...selectedIds, id];
      updateSelection(next);
    } else {
      updateSelection([id]);
      setLocked(true);
      const correct = isCorrectAnswer([id], question.correctOptionIds);
      onAnswerLocked?.(correct, question.id);
    }
  }

  function handleConfirmMulti() {
    if (locked || selectedIds.length === 0) return;
    setLocked(true);
    const correct = isCorrectAnswer(selectedIds, question.correctOptionIds);
    onAnswerLocked?.(correct, question.id);
  }

  function handleNext() {
    onNext();
    setSelectedIds([]);
    setLocked(false);
  }

  return (
    <section className="w-full">
      <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
        <span>
          Întrebarea {index + 1} din {total}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">
          {question.section}
        </span>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        {question.question}
      </h2>

      <div className="flex flex-col gap-2">
        {question.options.map((opt) => (
          <AnswerOption
            key={opt.id}
            option={opt}
            selectedIds={selectedIds}
            correctIds={question.correctOptionIds}
            locked={locked}
            multi={multi}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {multi && !locked && (
        <button
          type="button"
          onClick={handleConfirmMulti}
          disabled={selectedIds.length === 0}
          className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
        >
          Confirmă răspunsurile
        </button>
      )}

      {locked && (
        <TooltipWhy
          tooltipCorrect={question.tooltipCorrect}
          explanation={question.explanation}
          correctIds={question.correctOptionIds}
        />
      )}

      {locked && (
        <div className="mt-4 flex items-center justify-between">
          <span
            className={`text-sm font-semibold ${wasCorrect ? "text-emerald-700" : "text-red-700"}`}
          >
            {wasCorrect ? " CORECT" : "Greșit"}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            {isLast ? "Finalizează testul" : "Următoarea →"}
          </button>
        </div>
      )}
    </section>
  );
}
