export type QuestionType = "single" | "multi";

export type QuizOption = {
  id: string;
  text: string;
};

export type Difficulty = "basic" | "medium" | "scenario";

export type QuizQuestion = {
  id: string;
  section: string;
  topic: string;
  difficulty: Difficulty;
  sourceAct: string;
  type: QuestionType;
  question: string;
  options: QuizOption[];
  correctOptionIds: string[];
  explanation: string;
  tooltipCorrect: string;
};

export type TestRunQuestion = QuizQuestion;

export type TestRun = {
  runId: string;
  createdAt: number;
  totalAvailable: number;
  questions: TestRunQuestion[];
};

export type PassFail = "ADMIS" | "RESPINS";
