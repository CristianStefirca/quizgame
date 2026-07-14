import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QuestionCard } from "@/components/QuestionCard";
import type { QuizQuestion } from "@/lib/quiz-types";

const singleCorrectA: QuizQuestion = {
  id: "QC-1",
  section: "Test",
  topic: "T",
  difficulty: "basic",
  sourceAct: "Act",
  type: "single",
  question: "Care e varianta corectă?",
  options: [
    { id: "A", text: "Răspuns corect" },
    { id: "B", text: "Răspuns greșit B" },
    { id: "C", text: "Răspuns greșit C" },
    { id: "D", text: "Răspuns greșit D" },
  ],
  correctOptionIds: ["A"],
  explanation: "explicație detaliată",
  tooltipCorrect: "tooltip corect",
};

const multiCorrectAC: QuizQuestion = {
  ...singleCorrectA,
  id: "QC-2",
  type: "multi",
  correctOptionIds: ["A", "C"],
};

function renderCard(question: QuizQuestion, overrides: Partial<Parameters<typeof QuestionCard>[0]> = {}) {
  const onAnswerLocked = vi.fn();
  const onNext = vi.fn();
  const onSelectChange = vi.fn();
  render(
    <QuestionCard
      question={question}
      index={0}
      total={3}
      isLast={false}
      onAnswerLocked={onAnswerLocked}
      onNext={onNext}
      onSelectChange={onSelectChange}
      {...overrides}
    />,
  );
  return { onAnswerLocked, onNext, onSelectChange };
}

describe("QuestionCard - single", () => {
  it("afișează textul întrebării și 4 variante", () => {
    renderCard(singleCorrectA);
    expect(screen.getByText("Care e varianta corectă?")).toBeInTheDocument();
    expect(screen.getByText("Răspuns corect")).toBeInTheDocument();
    expect(screen.getByText("Răspuns greșit B")).toBeInTheDocument();
    expect(screen.getByText("Răspuns greșit C")).toBeInTheDocument();
    expect(screen.getByText("Răspuns greșit D")).toBeInTheDocument();
  });

  it("nu afișează tooltip înainte de răspuns", () => {
    renderCard(singleCorrectA);
    expect(screen.queryByText(/De ce era corect/)).not.toBeInTheDocument();
  });

  it("blochează la click pe o variantă single", async () => {
    const { onAnswerLocked } = renderCard(singleCorrectA);
    await userEvent.click(screen.getByText("Răspuns corect"));
    expect(onAnswerLocked).toHaveBeenCalledWith(true, "QC-1");
    expect(screen.getByText(/De ce era corect/)).toBeInTheDocument();
    expect(screen.getByText("tooltip corect")).toBeInTheDocument();
  });

  it("marchează greșit cu roșu și afișează corect cu verde", async () => {
    renderCard(singleCorrectA);
    await userEvent.click(screen.getByText("Răspuns greșit B"));
    const correctBtn = screen.getByText("Răspuns corect").closest("button")!;
    const wrongBtn = screen.getByText("Răspuns greșit B").closest("button")!;
    expect(correctBtn.className).toContain("border-green-600");
    expect(wrongBtn.className).toContain("border-red-600");
  });

  it("apelează onNext la apăsarea Următoarea", async () => {
    const { onNext } = renderCard(singleCorrectA);
    await userEvent.click(screen.getByText("Răspuns greșit D"));
    await userEvent.click(screen.getByRole("button", { name: /Următoarea/ }));
    expect(onNext).toHaveBeenCalled();
  });

  it("afișează Finalizează testul când este ultima", async () => {
    renderCard(singleCorrectA, { isLast: true });
    await userEvent.click(screen.getByText("Răspuns greșit D"));
    expect(
      screen.getByRole("button", { name: /Finalizează testul/ }),
    ).toBeInTheDocument();
  });
});

describe("QuestionCard - multi", () => {
  it("cere confirmare explicită pentru multi", async () => {
    const { onAnswerLocked } = renderCard(multiCorrectAC);
    expect(
      screen.getByRole("button", { name: /Confirmă răspunsurile/ }),
    ).toBeInTheDocument();
    await userEvent.click(screen.getByText("Răspuns corect"));
    await userEvent.click(screen.getByText("Răspuns greșit C"));
    expect(onAnswerLocked).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole("button", { name: /Confirmă răspunsurile/ }));
    expect(onAnswerLocked).toHaveBeenCalledWith(true, "QC-2");
  });

  it("toggle pe mai multe opțiuni multi", async () => {
    const { onAnswerLocked } = renderCard(multiCorrectAC);
    await userEvent.click(screen.getByText("Răspuns corect"));
    await userEvent.click(screen.getByText("Răspuns greșit C"));
    await userEvent.click(screen.getByRole("button", { name: /Confirmă răspunsurile/ }));
    expect(onAnswerLocked).toHaveBeenCalledWith(true, "QC-2");
  });

  it("multi greșit dacă selectezi doar unul din cele două corecte", async () => {
    const { onAnswerLocked } = renderCard(multiCorrectAC);
    await userEvent.click(screen.getByText("Răspuns corect"));
    await userEvent.click(screen.getByRole("button", { name: /Confirmă răspunsurile/ }));
    expect(onAnswerLocked).toHaveBeenCalledWith(false, "QC-2");
  });
});
