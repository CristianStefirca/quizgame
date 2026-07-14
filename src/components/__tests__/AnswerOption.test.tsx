import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AnswerOption } from "@/components/AnswerOption";
import type { QuizOption } from "@/lib/quiz-types";

const option: QuizOption = { id: "B", text: "Varianta B" };

function renderOption(overrides: Partial<Parameters<typeof AnswerOption>[0]> = {}) {
  const onSelect = vi.fn();
  render(
    <AnswerOption
      option={option}
      selectedIds={[]}
      correctIds={["A"]}
      locked={false}
      multi={false}
      onSelect={onSelect}
      {...overrides}
    />,
  );
  return { onSelect };
}

describe("AnswerOption - culori blocaj", () => {
  it("neblocat -> fundal alb, hover slate", () => {
    renderOption();
    const btn = screen.getByRole("button", { name: /Varianta B/ });
    expect(btn.className).toContain("hover:bg-slate-50");
  });

  it("ales greșit + blocat -> roșu", () => {
    renderOption({
      selectedIds: ["B"],
      correctIds: ["A"],
      locked: true,
    });
    const btn = screen.getByRole("button", { name: /Varianta B/ });
    expect(btn.className).toContain("border-red-600");
    expect(btn.className).toContain("bg-red-100");
  });

  it("corect + blocat -> verde", () => {
    renderOption({
      selectedIds: ["B"],
      correctIds: ["B"],
      locked: true,
    });
    const btn = screen.getByRole("button", { name: /Varianta B/ });
    expect(btn.className).toContain("border-green-600");
    expect(btn.className).toContain("bg-green-100");
  });

  it("este disabled când locked", () => {
    renderOption({ locked: true });
    expect(screen.getByRole("button", { name: /Varianta B/ })).toBeDisabled();
  });

  it("apelează onSelect când nu e blocat", async () => {
    const { onSelect } = renderOption();
    await userEvent.click(screen.getByRole("button", { name: /Varianta B/ }));
    expect(onSelect).toHaveBeenCalledWith("B");
  });

  it("nu apelează onSelect când e blocat", async () => {
    const { onSelect } = renderOption({ locked: true });
    await userEvent.click(screen.getByRole("button", { name: /Varianta B/ }));
    expect(onSelect).not.toHaveBeenCalled();
  });
});
