import { questions } from "@/data/questions";

export type SectionInfo = {
  name: string;
  count: number;
};

export function getSections(): SectionInfo[] {
  const map = new Map<string, number>();
  for (const q of questions) {
    map.set(q.section, (map.get(q.section) ?? 0) + 1);
  }
  return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
}

export const ALL_SECTION = "all";
