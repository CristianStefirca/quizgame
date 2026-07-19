"use client";

import { useEffect, useRef, useState } from "react";
import type { LastRunSummary } from "@/hooks/useQuizProgress";
import { cn } from "@/lib/utils";
import { Stagger, StaggerItem } from "@/components/motion/motion";

const RUNS_PAGE_SIZE = 6;

export function RunHistory({
  runs,
  title = "Ultimele rulări",
  className,
  maxHeightClass = "max-h-80",
  activeRunId,
  onSelect,
}: {
  runs: LastRunSummary[];
  title?: string | null;
  className?: string;
  maxHeightClass?: string;
  activeRunId?: string;
  onSelect?: (run: LastRunSummary) => void;
}) {
  const [visible, setVisible] = useState(RUNS_PAGE_SIZE);
  const scrollRef = useRef<HTMLUListElement>(null);
  const sentinelRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || visible >= runs.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible((v) => Math.min(v + RUNS_PAGE_SIZE, runs.length));
        }
      },
      { root: scrollRef.current, rootMargin: "80px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visible, runs.length]);

  return (
    <Stagger className={cn("flex flex-col", className)}>
      {title ? <p className="eyebrow mb-3">{title}</p> : null}
      <ul
        ref={scrollRef}
        className={cn(
          "flex flex-col gap-1 overflow-y-auto overscroll-contain pr-1",
          maxHeightClass,
        )}
      >
        {runs.slice(0, visible).map((r) => {
          const rowClass = cn(
            "flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-secondary/60",
            activeRunId === r.runId && "bg-secondary/80 ring-1 ring-border",
            onSelect && "cursor-pointer",
          );
          const content = (
            <>
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
            </>
          );
          return (
            <StaggerItem key={r.runId}>
              {onSelect ? (
                <button
                  type="button"
                  onClick={() => onSelect(r)}
                  className={rowClass}
                >
                  {content}
                </button>
              ) : (
                <div className={rowClass}>{content}</div>
              )}
            </StaggerItem>
          );
        })}
        {visible < runs.length ? (
          <li
            ref={sentinelRef}
            aria-hidden
            className="flex shrink-0 justify-center py-2"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground/40" />
          </li>
        ) : null}
      </ul>
    </Stagger>
  );
}
