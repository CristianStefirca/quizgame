"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpenCheck,
  ClipboardList,
  History,
  ListChecks,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Trash2,
  Trophy,
} from "lucide-react";

import { questions } from "@/data/questions";
import { generateTestRun, PASS_PERCENT } from "@/lib/quiz";
import { getSections, ALL_SECTION } from "@/lib/sections";
import { saveRun, loadRun, loadMeta } from "@/lib/run-store";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import { cn } from "@/lib/utils";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/motion";

const COUNT_OPTIONS = [25, 40, 50, 100];

export default function Home() {
  const router = useRouter();
  const sections = useMemo(() => getSections(), []);
  const { progress, hydrated, clearWrongIds, clearAll } = useQuizProgress();

  const sectionItems = useMemo(
    () => [
      { label: `Toate capitolele (${questions.length})`, value: ALL_SECTION },
      ...sections.map((s) => ({ label: `${s.name} (${s.count})`, value: s.name })),
    ],
    [sections],
  );

  const [section, setSection] = useState<string>(ALL_SECTION);
  const [count, setCount] = useState<number>(50);
  const [onlyWrong, setOnlyWrong] = useState<boolean>(false);

  const poolForSelection = useMemo(() => {
    if (onlyWrong) {
      const set = new Set(progress.wrongQuestionIds);
      return questions.filter((q) => set.has(q.id));
    }
    if (section === ALL_SECTION) return questions;
    return questions.filter((q) => q.section === section);
  }, [section, onlyWrong, progress.wrongQuestionIds]);

  const effectiveCount = Math.min(count, poolForSelection.length);
  const wrongCount = progress.wrongQuestionIds.length;
  const hasResume = hydrated ? Boolean(loadRun() && loadMeta()) : false;

  function start() {
    const run = onlyWrong
      ? generateTestRun({
          bank: questions,
          onlyWrongIds: progress.wrongQuestionIds,
          count: progress.wrongQuestionIds.length || count,
        })
      : generateTestRun({ bank: questions, section, count });
    saveRun(run, {
      section: onlyWrong ? "wrong" : section,
      count: run.questions.length,
      onlyWrong,
    });
    router.push("/test");
  }

  const lastBest = hydrated
    ? progress.lastRuns.reduce(
        (acc, r) => (r.scorePercent > acc ? r.scorePercent : acc),
        0,
      )
    : 0;

  return (
    <div className="relative flex min-h-svh flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-app/80 backdrop-blur-md supports-backdrop-filter:bg-app/60">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-4 px-4 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground shadow-soft">
              <BookOpenCheck className="size-4" />
            </span>
            <span className="hidden text-[0.8125rem] font-semibold tracking-tight text-foreground sm:inline">
              Administrator II
            </span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={<Link href="/rezultat" />}
              className="normal-case tracking-normal text-muted-foreground"
            >
              <Trophy className="size-4" />
              <span className="hidden sm:inline">Rezultate</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 pt-12 sm:px-6 sm:pt-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn className="flex flex-col">
            <p className="eyebrow mb-3 flex items-center gap-2">
              <Sparkles className="size-3.5 text-primary" />
              Grădinița cu program prelungit „Pescăruș” Mangalia
            </p>
            <h1 className="font-heading text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Antrenament pentru concursul
              <br />
              <span className="text-primary">Administrator II</span>
            </h1>
            <p className="mt-5 max-w-prose text-pretty text-base leading-relaxed text-muted-foreground">
              {questions.length} întrebări oficiale, selectate la întâmplare și
              cu variante amestecate la fiecare rulare. Selectează un capitol,
              numărul de întrebări și pornește. Prag de promovare{" "}
              <span className="font-semibold text-foreground">
                {PASS_PERCENT}%
              </span>
              .
            </p>

            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-border ring-1 ring-border">
              <Stat
                icon={<ListChecks className="size-4" />}
                label="Întrebări"
                value={questions.length.toString()}
              />
              <Stat
                icon={<ShieldCheck className="size-4" />}
                label="Capitole"
                value={sections.length.toString()}
              />
              <Stat
                icon={<Trophy className="size-4" />}
                label="Scor maxim"
                value={hydrated ? `${lastBest}%` : "—"}
              />
            </div>

            <Card className="mt-8 ring-1 ring-foreground/5 shadow-soft">
              <CardHeader>
                <CardTitle>Configurare test</CardTitle>
                <CardDescription>
                  Alege conținutul și lungimea testului. La fiecare pornire,
                  întrebările și variantele se amestecă în ordine nouă.
                </CardDescription>
                <CardAction>
                  <Badge variant="secondary" className="normal-case tracking-normal">
                    {effectiveCount} întrebări
                  </Badge>
                </CardAction>
              </CardHeader>

              <CardContent className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <label className="eyebrow">Capitol</label>
                  <Select
                    value={section}
                    onValueChange={(v) => setSection(v as string)}
                    disabled={onlyWrong}
                    items={sectionItems}
                  >
                    <SelectTrigger className="h-11 w-full rounded-md border-border bg-card px-3 normal-case tracking-normal text-sm">
                      <SelectValue placeholder="Alege capitolul" />
                    </SelectTrigger>
                    <SelectContent className="normal-case tracking-normal">
                      <SelectItem value={ALL_SECTION}>
                        Toate capitolele ({questions.length})
                      </SelectItem>
                      {sections.map((s) => (
                        <SelectItem key={s.name} value={s.name}>
                          {s.name} ({s.count})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="eyebrow">Număr întrebări</label>
                    <span className="text-xs text-muted-foreground">
                      Disponibile: {poolForSelection.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {COUNT_OPTIONS.map((c) => {
                      const disabled = c > poolForSelection.length;
                      const active = count === c;
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setCount(c)}
                          disabled={disabled || onlyWrong}
                          className={cn(
                            "h-11 rounded-md border text-sm font-semibold tabular transition-all",
                            active
                              ? "border-primary bg-primary text-primary-foreground shadow-soft"
                              : "border-border bg-card text-foreground hover:border-foreground/30 hover:bg-secondary",
                            (disabled || onlyWrong) &&
                              "cursor-not-allowed opacity-40",
                          )}
                        >
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Separator />

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">
                      Repetă doar greșelile
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {hydrated && wrongCount > 0
                        ? `${wrongCount} întrebări salvate din rulările anterioare.`
                        : "Vor apărea aici după primul test în care și greșești."}
                    </p>
                  </div>
                  <Switch
                    checked={onlyWrong}
                    onCheckedChange={setOnlyWrong}
                    disabled={!hydrated || wrongCount === 0}
                  />
                </div>

                <Button
                  size="lg"
                  onClick={start}
                  disabled={poolForSelection.length === 0}
                  className="mt-1 h-12 w-full normal-case tracking-normal text-sm font-semibold"
                >
                  {onlyWrong ? "Pornește antrenament greșeli" : "Începe testul"}
                  <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.08} className="flex flex-col gap-4">
            {hasResume && (
              <Card className="ring-1 ring-primary/20">
                <CardContent className="flex items-center gap-4 py-5">
                  <span className="grid size-10 place-items-center rounded-md bg-accent text-accent-foreground">
                    <ClipboardList className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      Ai un test în curs
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      Reluare din ultima poziție salvată
                    </p>
                  </div>
                  <Button
                    size="sm"
                    nativeButton={false}
                    render={<Link href="/test" />}
                    className="normal-case tracking-normal"
                  >
                    Continuă
                    <ArrowRight className="size-4" />
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card className="ring-1 ring-foreground/5">
              <CardHeader className="border-b border-border/60 [.border-b]:pb-(--card-spacing)">
                <CardTitle className="text-base">Progresul tău</CardTitle>
                <CardAction>
                  {hydrated && progress.lastRuns.length > 0 ? (
                    <Button
                      variant="ghost"
                      size="xs"
                      onClick={clearAll}
                      className="normal-case tracking-normal text-muted-foreground"
                    >
                      <Trash2 className="size-3.5" />
                      Șterge istoric
                    </Button>
                  ) : null}
                </CardAction>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border">
                  <MiniStat
                    label="Greșeli salvate"
                    value={hydrated ? wrongCount.toString() : "—"}
                    tone={wrongCount > 0 ? "warning" : "default"}
                    icon={<RotateCcw className="size-3.5" />}
                  />
                  <MiniStat
                    label="Teste ruleate"
                    value={hydrated ? progress.lastRuns.length.toString() : "—"}
                    icon={<History className="size-3.5" />}
                  />
                </div>

                {hydrated && progress.lastRuns.length === 0 ? (
                  <div className="mt-6 flex flex-col items-center gap-3 rounded-lg border border-dashed border-border py-8 text-center">
                    <span className="grid size-9 place-items-center rounded-full bg-secondary text-muted-foreground">
                      <Trophy className="size-4" />
                    </span>
                    <p className="max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
                      Încă nu ai finalizat un test. Rezultatele vor apărea aici
                      după prima rulare.
                    </p>
                  </div>
                ) : null}

                {hydrated && progress.lastRuns.length > 0 ? (
                  <Stagger className="mt-6 flex flex-col">
                    <p className="eyebrow mb-3">Ultimele rulări</p>
                    <ul className="flex flex-col gap-1">
                      {progress.lastRuns.slice(0, 5).map((r) => (
                        <StaggerItem
                          key={r.runId}
                          className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-secondary/60"
                        >
                          <span
                            className={cn(
                              "size-1.5 shrink-0 rounded-full",
                              r.result === "ADMIS" ? "bg-success" : "bg-destructive",
                            )}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-foreground">
                              {r.section === "wrong"
                                ? "Doar greșeli"
                                : r.section === "all"
                                  ? "Toate capitolele"
                                  : r.section}
                            </p>
                            <p className="tabular text-[0.6875rem] text-muted-foreground">
                              {new Date(r.createdAt).toLocaleDateString("ro-RO", {
                                day: "2-digit",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="tabular text-sm font-semibold text-foreground">
                              {r.scorePercent}%
                            </p>
                            <p className="tabular text-[0.6875rem] text-muted-foreground">
                              {r.correctCount}/{r.total}
                            </p>
                          </div>
                        </StaggerItem>
                      ))}
                    </ul>
                  </Stagger>
                ) : null}

                {hydrated && wrongCount > 0 ? (
                  <div className="mt-5 flex items-center justify-between rounded-lg bg-warning/10 px-3 py-2">
                    <span className="tabular text-xs font-medium text-warning-foreground">
                      {wrongCount} greșeli de revizuit
                    </span>
                    <button
                      type="button"
                      onClick={clearWrongIds}
                      className="text-[0.6875rem] font-semibold uppercase tracking-wide text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      Golește
                    </button>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </main>

      <footer className="mt-auto border-t border-border/60 bg-app/60">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
          Grădinița cu program prelungit „Pescăruș” Mangalia · Antrenament
          pentru concurs Administrație II
        </div>
      </footer>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 bg-card px-4 py-4">
      <span className="flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </span>
      <span className="font-heading text-2xl font-semibold tabular text-foreground">
        {value}
      </span>
    </div>
  );
}

function MiniStat({
  label,
  value,
  icon,
  tone = "default",
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  tone?: "default" | "warning";
}) {
  return (
    <div className="flex items-center gap-3 bg-card px-3 py-3.5">
      <span
        className={cn(
          "grid size-8 shrink-0 place-items-center rounded-md",
          tone === "warning"
            ? "bg-warning/15 text-warning-foreground"
            : "bg-secondary text-muted-foreground",
        )}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="tabular font-heading text-lg font-semibold text-foreground">
          {value}
        </p>
        <p className="truncate text-[0.6875rem] uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
}
