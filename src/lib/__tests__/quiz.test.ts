import { describe, expect, test } from "vitest";
import {
  PASS_PERCENT,
  generateTestRun,
  getOptionClass,
  getPassFail,
  getScorePercent,
  isCorrectAnswer,
  shuffleArray,
} from "@/lib/quiz";
import type { QuizQuestion } from "@/lib/quiz-types";

const sampleBank: QuizQuestion[] = [
  {
    id: "Q1",
    section: "Secțiunea A",
    topic: "T",
    difficulty: "basic",
    sourceAct: "Act",
    type: "single",
    question: "q1?",
    options: [
      { id: "A", text: "a" },
      { id: "B", text: "b" },
      { id: "C", text: "c" },
      { id: "D", text: "d" },
    ],
    correctOptionIds: ["A"],
    explanation: "e",
    tooltipCorrect: "t",
  },
  {
    id: "Q2",
    section: "Secțiunea B",
    topic: "T",
    difficulty: "medium",
    sourceAct: "Act",
    type: "multi",
    question: "q2?",
    options: [
      { id: "A", text: "a" },
      { id: "B", text: "b" },
      { id: "C", text: "c" },
      { id: "D", text: "d" },
    ],
    correctOptionIds: ["A", "C"],
    explanation: "e",
    tooltipCorrect: "t",
  },
  {
    id: "Q3",
    section: "Secțiunea A",
    topic: "T",
    difficulty: "scenario",
    sourceAct: "Act",
    type: "single",
    question: "q3?",
    options: [
      { id: "A", text: "a" },
      { id: "B", text: "b" },
      { id: "C", text: "c" },
      { id: "D", text: "d" },
    ],
    correctOptionIds: ["D"],
    explanation: "e",
    tooltipCorrect: "t",
  },
];

describe("shuffleArray", () => {
  test("pastrează elementele și lungimea", () => {
    const out = shuffleArray([1, 2, 3, 4, 5]);
    expect(out).toHaveLength(5);
    expect([...out].sort()).toEqual([1, 2, 3, 4, 5]);
  });

  test("nu modifică array-ul original", () => {
    const original = [1, 2, 3];
    const copy = [...original];
    shuffleArray(original);
    expect(original).toEqual(copy);
  });
});

describe("isCorrectAnswer", () => {
  test("single corect", () => {
    expect(isCorrectAnswer(["A"], ["A"])).toBe(true);
  });
  test("single greșit", () => {
    expect(isCorrectAnswer(["B"], ["A"])).toBe(false);
  });
  test("multi corect indiferent de ordine", () => {
    expect(isCorrectAnswer(["C", "A"], ["A", "C"])).toBe(true);
    expect(isCorrectAnswer(["A", "C"], ["A", "C"])).toBe(true);
  });
  test("multi greșit dacă lipsesc răspunsuri", () => {
    expect(isCorrectAnswer(["A"], ["A", "C"])).toBe(false);
  });
  test("multi greșit dacă există răspuns în plus", () => {
    expect(isCorrectAnswer(["A", "B", "C"], ["A", "C"])).toBe(false);
  });
});

describe("getScorePercent", () => {
  test("calculează procent rotunjit", () => {
    expect(getScorePercent(4, 5)).toBe(80);
    expect(getScorePercent(3, 7)).toBe(43);
  });
  test("retur 0 pentru total 0", () => {
    expect(getScorePercent(0, 0)).toBe(0);
  });
});

describe("getPassFail", () => {
  test("ADMIS la prag fix", () => {
    expect(getPassFail(80)).toBe("ADMIS");
  });
  test("ADMIS peste prag", () => {
    expect(getPassFail(95)).toBe("ADMIS");
  });
  test("RESPINS sub prag", () => {
    expect(getPassFail(79)).toBe("RESPINS");
  });
  test("folosește PASS_PERCENT implicit", () => {
    expect(PASS_PERCENT).toBe(80);
  });
});

describe("generateTestRun", () => {
  test("selectează cel mult count întrebări", () => {
    const run = generateTestRun({ bank: sampleBank, count: 2 });
    expect(run.questions).toHaveLength(2);
  });

  test("selectează tot pool-ul dacă count > pool", () => {
    const run = generateTestRun({ bank: sampleBank, count: 100 });
    expect(run.questions).toHaveLength(sampleBank.length);
  });

  test("filtrează după secțiune", () => {
    const run = generateTestRun({
      bank: sampleBank,
      section: "Secțiunea A",
      count: 10,
    });
    expect(run.totalAvailable).toBe(2);
    expect(run.questions.every((q) => q.section === "Secțiunea A")).toBe(true);
  });

  test("onlyWrongIds filtrează pool-ul", () => {
    const run = generateTestRun({
      bank: sampleBank,
      onlyWrongIds: ["Q1", "Q3"],
      count: 10,
    });
    expect(run.totalAvailable).toBe(2);
    expect(run.questions.map((q) => q.id).sort()).toEqual(["Q1", "Q3"]);
  });

  test("shuffle păstrează toate opțiunile originale (altă ordine posibilă)", () => {
    const run = generateTestRun({ bank: sampleBank, count: 3 });
    for (const q of run.questions) {
      const ids = q.options.map((o) => o.id).sort().join(",");
      expect(ids).toBe("A,B,C,D");
    }
  });

  test("răspunsul corect rămâne corect după shuffle de opțiuni", () => {
    const run = generateTestRun({ bank: sampleBank, count: 3 });
    for (const q of run.questions) {
      const original = sampleBank.find((b) => b.id === q.id)!;
      expect(q.correctOptionIds).toEqual(original.correctOptionIds);
    }
  });

  test("runId și createdAt sunt populate", () => {
    const run = generateTestRun({ bank: sampleBank, count: 1 });
    expect(run.runId.length).toBeGreaterThan(0);
    expect(run.createdAt).toBeGreaterThan(0);
  });
});

describe("getOptionClass", () => {
  const selectedIds = ["B"];
  const correctIds = ["A"];

  test("neblocat => stil implicit hover", () => {
    expect(getOptionClass({
      optionId: "A",
      selectedIds,
      correctIds,
      locked: false,
    })).toContain("hover:bg-slate-50");
  });

  test("opțiune corectă când e blocată => verde", () => {
    expect(getOptionClass({
      optionId: "A",
      selectedIds,
      correctIds,
      locked: true,
    })).toContain("border-green-600");
  });

  test("opțiune aleasă greșit când e blocată => roșu", () => {
    expect(getOptionClass({
      optionId: "B",
      selectedIds,
      correctIds,
      locked: true,
    })).toContain("border-red-600");
  });

  test("opțiune neatinsă blocată => slate-gri", () => {
    expect(getOptionClass({
      optionId: "C",
      selectedIds,
      correctIds,
      locked: true,
    })).toContain("bg-slate-50");
  });
});
