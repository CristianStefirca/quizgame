import { describe, expect, test } from "vitest";
import { questions } from "@/data/questions";

describe("banca de întrebări - calitate (spec secțiunea 10)", () => {
  test("banca are peste 300 de întrebări", () => {
    expect(questions.length).toBeGreaterThanOrEqual(300);
  });

  test("banca are cele 503 întrebări declarate", () => {
    expect(questions.length).toBe(503);
  });

  test("nu există ID-uri duplicate", () => {
    const ids = questions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test("fiecare întrebare are 4 variante și cel puțin un răspuns corect", () => {
    for (const q of questions) {
      expect(q.options).toHaveLength(4);
      expect(q.correctOptionIds.length).toBeGreaterThanOrEqual(1);
    }
  });

  test("toate ID-urile de opțiuni sunt unice per întrebare", () => {
    for (const q of questions) {
      const ids = q.options.map((o) => o.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  test("correctOptionIds fac parte din opțiunile întrebării", () => {
    for (const q of questions) {
      const valid = new Set(q.options.map((o) => o.id));
      for (const c of q.correctOptionIds) {
        expect(valid.has(c)).toBe(true);
      }
    }
  });

  test("nu există întrebări pentru postul de bucătar", () => {
    const text = JSON.stringify(questions).toLowerCase();
    expect(text).not.toContain("tehnologie culinar");
    expect(text).not.toContain("semipreparate");
    expect(text).not.toContain("fripturi");
  });

  test("fiecare întrebare are explanation și tooltipCorrect nevide", () => {
    for (const q of questions) {
      expect(q.explanation.trim().length).toBeGreaterThan(0);
      expect(q.tooltipCorrect.trim().length).toBeGreaterThan(0);
    }
  });

  test("distribuția pe capitole respectă planul", () => {
    const counts = new Map<string, number>();
    for (const q of questions) {
      counts.set(q.section, (counts.get(q.section) ?? 0) + 1);
    }
    expect(counts.get("Bibliografie și limite de materie")).toBe(4);
    expect(counts.get("Dotări minimale - Ordin 4143/2022")).toBe(80);
    expect(counts.get("Alimentație sănătoasă - Ordin 1563/2008 și Legea 123/2008")).toBe(160);
    expect(counts.get("SSM - Legea 319/2006")).toBe(59);
    expect(counts.get("PSI - Legea 307/2006")).toBe(61);
    expect(counts.get("Informații clasificate - HG 585/2002 și HG 781/2002")).toBe(74);
    expect(counts.get("Scenarii mixte de examen")).toBe(65);
  });
});
