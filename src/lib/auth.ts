"use client";

const AUTH_KEY = "admin-quiz-auth-v1";
const COOKIE_KEY = "admin_quiz_auth";
const SESSION_MS = 400 * 24 * 60 * 60 * 1000;
const ACCESS_CODE = "vera";

export type AuthSession = {
  code: string;
  expiresAt: number;
};

function isBrowser() {
  return typeof window !== "undefined";
}

function setCookie(value: string, maxAgeMs: number) {
  if (!isBrowser()) return;
  const maxAgeSec = Math.floor(maxAgeMs / 1000);
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(value)}; max-age=${maxAgeSec}; path=/; samesite=lax`;
}

function clearCookie() {
  if (!isBrowser()) return;
  document.cookie = `${COOKIE_KEY}=; max-age=0; path=/; samesite=lax`;
}

function getCookie(): string | null {
  if (!isBrowser()) return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function login(inputCode: string): boolean {
  if (inputCode.trim().toLowerCase() !== ACCESS_CODE) return false;
  const session: AuthSession = {
    code: ACCESS_CODE,
    expiresAt: Date.now() + SESSION_MS,
  };
  if (isBrowser()) {
    window.localStorage.setItem(AUTH_KEY, JSON.stringify(session));
  }
  setCookie(JSON.stringify(session), SESSION_MS);
  return true;
}

export function logout() {
  if (isBrowser()) {
    window.localStorage.removeItem(AUTH_KEY);
  }
  clearCookie();
}

function readSession(): AuthSession | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(AUTH_KEY) ?? getCookie();
    if (!raw) return null;
    const session = JSON.parse(raw) as AuthSession;
    if (!session.expiresAt || session.expiresAt < Date.now()) return null;
    return session;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  const session = readSession();
  if (!session) return false;
  const refreshed: AuthSession = { ...session, expiresAt: Date.now() + SESSION_MS };
  if (isBrowser()) {
    window.localStorage.setItem(AUTH_KEY, JSON.stringify(refreshed));
  }
  setCookie(JSON.stringify(refreshed), SESSION_MS);
  return true;
}

export function getUserCode(): string {
  const session = readSession();
  return session?.code ?? ACCESS_CODE;
}
