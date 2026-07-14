"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type AppShellProps = {
  children: React.ReactNode;
  backHref?: string | null;
  backLabel?: string;
  action?: React.ReactNode;
  eyebrow?: string;
  title: string;
  className?: string;
};

export function AppShell({
  children,
  backHref = "/",
  backLabel = "Înapoi la configurare",
  action,
  eyebrow,
  title,
  className,
}: AppShellProps) {
  const pathname = usePathname();
  const step =
    pathname === "/"
      ? "Configurare"
      : pathname === "/test"
        ? "Test în curs"
        : pathname === "/rezultat"
          ? "Rezultat"
          : "";

  return (
    <div className="relative flex min-h-svh flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-app/80 backdrop-blur-md supports-backdrop-filter:bg-app/60">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-foreground"
          >
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground shadow-soft">
              <GraduationCap className="size-4" />
            </span>
            <span className="hidden text-[0.8125rem] font-semibold tracking-tight sm:inline">
              Administrator II
            </span>
          </Link>
          <div className="mx-1 hidden h-5 w-px bg-border/70 sm:block" />
          <nav className="hidden items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-muted-foreground sm:flex">
            <span className={cn(step ? "text-foreground" : "")}>{step}</span>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            {backHref && (
              <Button
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<Link href={backHref} />}
                className="normal-case tracking-normal text-muted-foreground"
              >
                <ArrowLeft className="size-4" />
                <span className="hidden sm:inline">{backLabel}</span>
              </Button>
            )}
            {action}
          </div>
        </div>
      </header>

      <main
        className={cn(
          "mx-auto w-full max-w-5xl flex-1 px-4 pb-24 pt-10 sm:px-6 sm:pt-16",
          className,
        )}
      >
        {eyebrow || title ? (
          <div className="mb-8 max-w-2xl">
            {eyebrow ? (
              <p className="eyebrow mb-2">{eyebrow}</p>
            ) : null}
            {title ? (
              <h1 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h1>
            ) : null}
          </div>
        ) : null}
        {children}
      </main>

      <footer className="mt-auto border-t border-border/60 bg-app/60">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
          Grădinița cu program prelungit „Pescăruș” Mangalia · Antrenament pentru
          concurs Administrație II
        </div>
      </footer>
    </div>
  );
}
