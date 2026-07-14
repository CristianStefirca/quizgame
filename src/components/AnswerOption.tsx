"use client";

import { getOptionClass } from "@/lib/quiz";
import type { QuizOption } from "@/lib/quiz-types";

export type AnswerOptionProps = {
  option: QuizOption;
  selectedIds: string[];
  correctIds: string[];
  locked: boolean;
  multi: boolean;
  onSelect: (id: string) => void;
};

export function AnswerOption({
  option,
  selectedIds,
  correctIds,
  locked,
  multi,
  onSelect,
}: AnswerOptionProps) {
  const checked = selectedIds.includes(option.id);
  const className = getOptionClass({
    optionId: option.id,
    selectedIds,
    correctIds,
    locked,
  });

  return (
    <button
      type="button"
      disabled={locked}
      onClick={() => onSelect(option.id)}
      aria-pressed={checked}
      className={`w-full text-left flex items-start gap-3 rounded-lg border px-4 py-3 transition-colors ${className}`}
    >
      <span
        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center text-xs font-semibold"
        aria-hidden="true"
      >
        {multi ? (checked ? "x" : "") : checked ? "•" : ""}
      </span>
      <span className="flex-shrink-0 font-semibold">{option.id}.</span>
      <span className="flex-1">{option.text}</span>
    </button>
  );
}
