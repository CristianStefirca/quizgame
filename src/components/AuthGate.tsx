"use client";

import { useEffect, useState } from "react";
import { isAuthenticated, login } from "@/lib/auth";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setAuthed(isAuthenticated());
    setChecked(true);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (login(code)) {
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!checked) return null;

  if (!authed) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h1 className="mb-1 text-lg font-bold text-slate-900">
            Acces test
          </h1>
          <p className="mb-4 text-sm text-slate-500">
            Introdu codul de acces pentru a continua.
          </p>
          <input
            type="text"
            autoFocus
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError(false);
            }}
            placeholder="Cod acces"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base outline-none focus:border-slate-500"
          />
          {error && (
            <p className="mt-2 text-sm text-red-600">Cod incorect.</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Continuă
          </button>
        </form>
      </main>
    );
  }

  return <>{children}</>;
}
