"use client";

export type TooltipWhyProps = {
  tooltipCorrect: string;
  explanation: string;
  correctIds: string[];
};

export function TooltipWhy({
  tooltipCorrect,
  explanation,
  correctIds,
}: TooltipWhyProps) {
  return (
    <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
      <p className="text-sm font-semibold text-emerald-900">
        De ce era corect? (Răspuns corect: {correctIds.join(", ")})
      </p>
      <p className="mt-2 text-sm text-emerald-900">{tooltipCorrect}</p>
      <p className="mt-1 text-sm text-emerald-800">{explanation}</p>
    </div>
  );
}
