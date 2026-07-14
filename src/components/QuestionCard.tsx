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
  onPrev?: () => void;
  canGoPrev?: boolean;
  onAnswerLocked?: (
    wasCorrect: boolean,
    questionId: string,
    selectedIds: string[],
  ) => void;
  onSelectChange?: (selectedIds: string[]) => void;
  isLast: boolean;
  initialSelectedIds?: string[];
  initialLocked?: boolean;
};

export function QuestionCard({
  question,
  index,
  total,
  onNext,
  onPrev,
  canGoPrev,
  onAnswerLocked,
  onSelectChange,
  isLast,
  initialSelectedIds,
  initialLocked,
}: QuestionCardProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    initialSelectedIds ?? [],
  );
  const [locked, setLocked] = useState(initialLocked ?? false);
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
      onAnswerLocked?.(correct, question.id, [id]);
    }
  }

  function handleConfirmMulti() {
    if (locked || selectedIds.length === 0) return;
    setLocked(true);
    const correct = isCorrectAnswer(selectedIds, question.correctOptionIds);
    onAnswerLocked?.(correct, question.id, selectedIds);
  }

  function handleNext() {
    onNext();
    setSelectedIds([]);
    setLocked(false);
  }

  return (
    <section className="w-full">
      <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
        <div className="flex items-center gap-2">
          {onPrev && (
            <button
              type="button"
              onClick={onPrev}
              disabled={!canGoPrev}
              aria-label="Întrebarea anterioară"
              className="rounded-full border border-slate-300 px-2 py-0.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-30"
            >
              ← Anterioara
            </button>
          )}
          <span>
            Întrebarea {index + 1} din {total}
          </span>
        </div>
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

      {locked && (
        <TooltipWhy
          tooltipCorrect={question.tooltipCorrect}
          explanation={question.explanation}
          correctIds={question.correctOptionIds}
        />
      )}

      {(multi && !locked) || locked ? (
        <div className="mobile-action-bar">
          <div className="mx-auto flex w-full max-w-3xl items-center gap-3">
            {multi && !locked && (
              <button
                type="button"
                onClick={handleConfirmMulti}
                disabled={selectedIds.length === 0}
                className="ml-auto w-full rounded-lg bg-slate-900 px-4 py-3 text-base font-semibold text-white transition-colors disabled:opacity-40 sm:w-auto sm:py-2 sm:text-sm"
              >
                Confirmă răspunsurile
              </button>
            )}
            {locked && (
              <>
                <span
                  className={`text-sm font-semibold ${wasCorrect ? "text-emerald-700" : "text-red-700"}`}
                >
                  {wasCorrect ? "CORECT" : "Greșit"}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto rounded-lg bg-slate-900 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700 sm:py-2 sm:text-sm"
                >
                  {isLast ? "Finalizează testul" : "Următoarea →"}
                </button>
              </>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
