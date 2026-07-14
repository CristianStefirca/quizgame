import type {
  PassFail,
  QuizQuestion,
  TestRun,
} from "@/lib/quiz-types";

export const PASS_PERCENT = 80;

export type GenerateTestRunInput = {
  bank: QuizQuestion[];
  count?: number;
  section?: string;
  onlyWrongIds?: string[];
};

function randomInt(maxExclusive: number) {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return arr[0] % maxExclusive;
  }
  return Math.floor(Math.random() * maxExclusive);
}

export function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateTestRun(input: GenerateTestRunInput): TestRun {
  const { bank, count = 50, section, onlyWrongIds } = input;

  let pool = [...bank];

  if (section && section !== "all") {
    pool = pool.filter((q) => q.section === section);
  }

  if (onlyWrongIds?.length) {
    const wrongSet = new Set(onlyWrongIds);
    pool = pool.filter((q) => wrongSet.has(q.id));
  }

  const shuffledQuestions = shuffleArray(pool);
  const selected = shuffledQuestions
    .slice(0, Math.min(count, shuffledQuestions.length))
    .map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

  return {
    runId:
      typeof crypto !== "undefined" &&
      typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : String(Date.now()),
    createdAt: Date.now(),
    totalAvailable: pool.length,
    questions: selected,
  };
}

export function isCorrectAnswer(
  selectedIds: string[],
  correctIds: string[],
): boolean {
  const selected = [...selectedIds].sort().join(",");
  const correct = [...correctIds].sort().join(",");
  return selected === correct;
}

export function getScorePercent(correctCount: number, total: number): number {
  if (!total) return 0;
  return Math.round((correctCount / total) * 100);
}

export function getPassFail(
  scorePercent: number,
  passPercent = PASS_PERCENT,
): PassFail {
  return scorePercent >= passPercent ? "ADMIS" : "RESPINS";
}

export type OptionClassArgs = {
  optionId: string;
  selectedIds: string[];
  correctIds: string[];
  locked: boolean;
};

export function getOptionClass({
  optionId,
  selectedIds,
  correctIds,
  locked,
}: OptionClassArgs): string {
  if (!locked) return "border bg-white hover:bg-slate-50";

  const isSelected = selectedIds.includes(optionId);
  const isCorrect = correctIds.includes(optionId);

  if (isCorrect) return "border-green-600 bg-green-100 text-green-900";
  if (isSelected && !isCorrect)
    return "border-red-600 bg-red-100 text-red-900";
  return "border-slate-200 bg-slate-50 text-slate-500";
}
