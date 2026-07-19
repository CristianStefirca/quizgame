"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  History,
  Home,
  RotateCcw,
  Target,
  Trophy,
  XCircle,
} from "lucide-react";

import { questions } from "@/data/questions";
import { generateTestRun, PASS_PERCENT } from "@/lib/quiz";
import { startRun } from "@/lib/active-run-store";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/motion/motion";
import { RunHistory } from "@/components/RunHistory";

function formatDuration(ms?: number): string {
  if (typeof ms !== "number") return "—";
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)} min`;
}

function sectionLabel(section: string): string {
  if (section === "wrong") return "Doar greșeli";
  if (section === "all") return "Toate capitolele";
  return section;
}

function ScoreRing({ percent, pass }: { percent: number; pass: boolean }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const filled = (Math.min(100, Math.max(0, percent)) / 100) * c;
  return (
    <div className="relative grid size-36 place-items-center">
      <svg viewBox="0 0 120 120" className="size-36 -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          strokeWidth="8"
          className="stroke-border"
        />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${c - filled}`}
          className={cn(
            "transition-[stroke-dasharray] duration-700 ease-out",
            pass ? "stroke-success" : "stroke-destructive",
          )}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-heading text-3xl font-semibold tabular text-foreground">
          {percent}%
        </span>
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          scor
        </span>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  const router = useRouter();
  const { progress, hydrated } = useQuizProgress();
  const [showReview, setShowReview] = useState(false);
  const [selectedRunId, setSelectedRunId] = useState<string | null>(null);

  const lastRun = useMemo(
    () => (progress.lastRuns.length > 0 ? progress.lastRuns[0] : null),
    [progress.lastRuns],
  );

  const selectedRun = useMemo(
    () =>
      (selectedRunId
        ? progress.lastRuns.find((r) => r.runId === selectedRunId)
        : null) ?? lastRun,
    [selectedRunId, progress.lastRuns, lastRun],
  );

  const wrongQuestionsFromBank = useMemo(() => {
    const set = new Set(progress.wrongQuestionIds);
    return questions.filter((q) => set.has(q.id));
  }, [progress.wrongQuestionIds]);

  const stats = useMemo(() => {
    const runs = progress.lastRuns;
    if (runs.length === 0) return { best: 0, avg: 0, passed: 0 };
    const best = runs.reduce((a, r) => Math.max(a, r.scorePercent), 0);
    const avg = Math.round(
      runs.reduce((a, r) => a + r.scorePercent, 0) / runs.length,
    );
    const passed = runs.filter((r) => r.result === "ADMIS").length;
    return { best, avg, passed };
  }, [progress.lastRuns]);

  function newRandom() {
    const run = generateTestRun({ bank: questions, count: 50 });
    startRun(run, { section: "all", count: run.questions.length, onlyWrong: false });
    router.push("/test");
  }

  function repeatMistakes() {
    if (progress.wrongQuestionIds.length === 0) return;
    const run = generateTestRun({
      bank: questions,
      onlyWrongIds: progress.wrongQuestionIds,
      count: progress.wrongQuestionIds.length,
    });
    startRun(run, {
      section: "wrong",
      count: run.questions.length,
      onlyWrong: true,
    });
    router.push("/test");
  }

  const pass = selectedRun?.result === "ADMIS";
  const wrongInRun = selectedRun ? selectedRun.total - selectedRun.correctCount : 0;
  const isLatest = selectedRun?.runId === lastRun?.runId;

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
              render={<Link href="/" />}
              className="normal-case tracking-normal text-muted-foreground"
            >
              <Home className="size-4" />
              <span className="hidden sm:inline">Acasă</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 pt-10 sm:px-6 sm:pt-16">
        {!hydrated ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            Se încarcă...
          </p>
        ) : !selectedRun ? (
          <FadeIn className="mx-auto flex max-w-md flex-col items-center gap-4 py-16 text-center">
            <span className="grid size-12 place-items-center rounded-full bg-secondary text-muted-foreground">
              <Trophy className="size-5" />
            </span>
            <p className="text-base text-muted-foreground">
              Nu ai finalizat încă un test. Rezultatele vor apărea aici după
              prima rulare.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/" />}
              className="normal-case tracking-normal"
            >
              Începe un test nou
              <ArrowRight className="size-4" />
            </Button>
          </FadeIn>
        ) : (
          <div className="grid min-w-0 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn className="flex min-w-0 flex-col gap-6">
              <div>
                <p className="eyebrow mb-3 flex items-center gap-2">
                  <Trophy className="size-3.5 text-primary" />
                  {isLatest ? "Rezultatul ultimului test" : "Rezultatul testului selectat"}
                </p>
                <h1 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {pass ? "Felicitări, ai promovat!" : "Aproape acolo — mai exersează"}
                </h1>
              </div>

              <Card className="ring-1 ring-foreground/5 shadow-soft">
                <CardContent className="flex flex-col items-center gap-6 py-8 sm:flex-row sm:items-center sm:gap-8">
                  <ScoreRing percent={selectedRun.scorePercent} pass={pass} />
                  <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center sm:items-start sm:text-left">
                    <Badge
                      className={cn(
                        "px-3 py-1",
                        pass
                          ? "bg-success text-success-foreground"
                          : "bg-destructive text-white",
                      )}
                    >
                      {pass ? (
                        <CheckCircle2 className="size-3.5" />
                      ) : (
                        <XCircle className="size-3.5" />
                      )}
                      {selectedRun.result}
                    </Badge>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {sectionLabel(selectedRun.section)}
                      </span>{" "}
                      ·{" "}
                      {new Date(selectedRun.createdAt).toLocaleDateString("ro-RO", {
                        day: "2-digit",
                        month: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <div className="grid w-full grid-cols-2 gap-px overflow-hidden rounded-lg bg-border ring-1 ring-border sm:grid-cols-4">
                      <ResultStat
                        icon={<CheckCircle2 className="size-3.5 text-success" />}
                        label="Corecte"
                        value={`${selectedRun.correctCount}`}
                      />
                      <ResultStat
                        icon={<XCircle className="size-3.5 text-destructive" />}
                        label="Greșite"
                        value={`${wrongInRun}`}
                      />
                      <ResultStat
                        icon={<Clock3 className="size-3.5" />}
                        label="Timp"
                        value={formatDuration(selectedRun.durationMs)}
                      />
                      <ResultStat
                        icon={<Target className="size-3.5" />}
                        label="Prag"
                        value={`${PASS_PERCENT}%`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  onClick={newRandom}
                  className="h-12 flex-1 normal-case tracking-normal text-sm font-semibold"
                >
                  Începe un test nou
                  <ArrowRight className="size-4" />
                </Button>
                {progress.wrongQuestionIds.length > 0 && (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={repeatMistakes}
                    className="h-12 flex-1 normal-case tracking-normal text-sm font-semibold"
                  >
                    <RotateCcw className="size-4" />
                    Repetă greșelile ({progress.wrongQuestionIds.length})
                  </Button>
                )}
              </div>

              {wrongQuestionsFromBank.length > 0 && (
                <Card className="ring-1 ring-foreground/5">
                  <CardHeader
                    className={cn(
                      showReview &&
                        "border-b border-border/60 [.border-b]:pb-(--card-spacing)",
                    )}
                  >
                    <CardTitle className="text-base">
                      Întrebări greșite ({wrongQuestionsFromBank.length})
                    </CardTitle>
                    <CardDescription>
                      Toate greșelile salvate, cu răspunsul corect și explicația.
                    </CardDescription>
                    <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowReview((v) => !v)}
                        className="normal-case tracking-normal"
                      >
                        {showReview ? "Ascunde" : "Revede"}
                      </Button>
                    </div>
                  </CardHeader>
                  {showReview && (
                    <CardContent className="pt-0">
                      <ol className="flex flex-col">
                        {wrongQuestionsFromBank.map((q, i) => (
                          <li key={q.id}>
                            {i > 0 && <Separator className="my-5" />}
                            <p className="eyebrow mb-1.5">
                              {i + 1} · {q.section}
                            </p>
                            <p className="text-sm font-semibold leading-relaxed text-foreground">
                              {q.question}
                            </p>
                            <ul className="mt-3 flex flex-col gap-1.5">
                              {q.options.map((opt) => {
                                const isCorrect = q.correctOptionIds.includes(
                                  opt.id,
                                );
                                return (
                                  <li
                                    key={opt.id}
                                    className={cn(
                                      "flex items-start gap-2 rounded-md px-2.5 py-1.5 text-sm leading-relaxed",
                                      isCorrect
                                        ? "bg-success/10 font-medium text-foreground ring-1 ring-success/25"
                                        : "text-muted-foreground",
                                    )}
                                  >
                                    {isCorrect ? (
                                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success" />
                                    ) : (
                                      <span className="mt-0.5 grid size-3.5 shrink-0 place-items-center text-[0.625rem] font-semibold">
                                        {opt.id}
                                      </span>
                                    )}
                                    {opt.text}
                                  </li>
                                );
                              })}
                            </ul>
                            <p className="mt-3 rounded-md bg-secondary/60 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                              <span className="font-semibold text-foreground">
                                De ce e corect:
                              </span>{" "}
                              {q.tooltipCorrect}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  )}
                </Card>
              )}
            </FadeIn>

            <FadeIn delay={0.08} className="flex min-w-0 flex-col gap-4">
              <Card className="ring-1 ring-foreground/5">
                <CardHeader className="border-b border-border/60 [.border-b]:pb-(--card-spacing)">
                  <CardTitle className="text-base">Istoric rulări</CardTitle>
                  <CardDescription>
                    Apasă pe o rulare pentru a-i vedea detaliile.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-border">
                    <HistoryStat
                      icon={<History className="size-3.5" />}
                      label="Teste"
                      value={progress.lastRuns.length.toString()}
                    />
                    <HistoryStat
                      icon={<Trophy className="size-3.5" />}
                      label="Scor maxim"
                      value={`${stats.best}%`}
                    />
                    <HistoryStat
                      icon={<Target className="size-3.5" />}
                      label="Medie"
                      value={`${stats.avg}%`}
                    />
                  </div>
                  <RunHistory
                    runs={progress.lastRuns}
                    title={null}
                    className="mt-4"
                    maxHeightClass="max-h-[26rem]"
                    activeRunId={selectedRun.runId}
                    onSelect={(r) => setSelectedRunId(r.runId)}
                  />
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        )}
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

function ResultStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 bg-card px-2 py-3 sm:items-start">
      <span className="flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {icon}
        {label}
      </span>
      <span className="tabular text-sm font-semibold text-foreground">
        {value}
      </span>
    </div>
  );
}

function HistoryStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 bg-card px-3 py-3">
      <span className="flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {icon}
        {label}
      </span>
      <span className="tabular font-heading text-lg font-semibold text-foreground">
        {value}
      </span>
    </div>
  );
}
