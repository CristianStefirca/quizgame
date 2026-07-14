"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { AnswerRecord } from "@/lib/active-run-store";

export type QuestionNavProps = {
  total: number;
  current: number;
  answers: AnswerRecord[];
  questionIds: string[];
  onJump: (index: number) => void;
};

function statusClass(params: {
  isCurrent: boolean;
  answer: AnswerRecord | undefined;
}) {
  const { isCurrent, answer } = params;
  if (isCurrent) {
    return "border-slate-900 bg-slate-900 text-white";
  }
  if (!answer) {
    return "border-slate-200 bg-white text-slate-500 hover:bg-slate-50";
  }
  if (answer.correct) {
    return "border-emerald-300 bg-emerald-100 text-emerald-800 hover:bg-emerald-200";
  }
  return "border-red-300 bg-red-100 text-red-800 hover:bg-red-200";
}

export function QuestionNav({
  total,
  current,
  answers,
  questionIds,
  onJump,
}: QuestionNavProps) {
  const answeredCount = answers.length;

  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          />
        }
      >
        Salt la întrebare ({answeredCount}/{total})
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Salt la o întrebare</DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <span className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-full border border-slate-200 bg-white" />
            Nerăspuns
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-full border border-emerald-300 bg-emerald-100" />
            Corect
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-full border border-red-300 bg-red-100" />
            Greșit
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-full border border-slate-900 bg-slate-900" />
            Curentă
          </span>
        </div>

        <div className="grid grid-cols-6 gap-2 sm:grid-cols-8">
          {Array.from({ length: total }, (_, i) => {
            const questionId = questionIds[i];
            const answer = answers.find((a) => a.questionId === questionId);
            const isCurrent = i === current;
            return (
              <DialogClose
                key={i}
                render={
                  <button
                    type="button"
                    onClick={() => onJump(i)}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold transition-colors ${statusClass(
                      { isCurrent, answer },
                    )}`}
                  />
                }
              >
                {i + 1}
              </DialogClose>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
