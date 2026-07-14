"use client";

import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getUserCode } from "@/lib/auth";
import type { TestRun } from "@/lib/quiz-types";

const LOCAL_KEY = "admin-quiz-active-state-v3";
const ACTIVE_RUN_COLLECTION = "activeRun";

export type RunMeta = {
  section: string;
  count: number;
  onlyWrong: boolean;
};

export type AnswerRecord = {
  questionId: string;
  selectedIds: string[];
  correct: boolean;
};

export type ActiveRunState = {
  run: TestRun;
  meta: RunMeta;
  answers: AnswerRecord[];
  current: number;
  updatedAt: number;
};

function isBrowser() {
  return typeof window !== "undefined";
}

export function saveLocal(state: ActiveRunState) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(`${LOCAL_KEY}:${getUserCode()}`, JSON.stringify(state));
  } catch {
    /* ignore quota errors */
  }
}

export function loadLocal(): ActiveRunState | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(`${LOCAL_KEY}:${getUserCode()}`);
    if (!raw) return null;
    return JSON.parse(raw) as ActiveRunState;
  } catch {
    return null;
  }
}

export function clearLocal() {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(`${LOCAL_KEY}:${getUserCode()}`);
  } catch {
    /* ignore */
  }
}

export async function saveRemote(state: ActiveRunState): Promise<void> {
  const db = getFirebaseDb();
  if (!db) return;
  try {
    await setDoc(doc(db, ACTIVE_RUN_COLLECTION, getUserCode()), state);
  } catch {
    /* offline or permission error; local copy already has the data */
  }
}

export async function loadRemote(): Promise<ActiveRunState | null> {
  const db = getFirebaseDb();
  if (!db) return null;
  try {
    const snap = await getDoc(doc(db, ACTIVE_RUN_COLLECTION, getUserCode()));
    if (!snap.exists()) return null;
    return snap.data() as ActiveRunState;
  } catch {
    return null;
  }
}

export async function clearRemote(): Promise<void> {
  const db = getFirebaseDb();
  if (!db) return;
  try {
    await deleteDoc(doc(db, ACTIVE_RUN_COLLECTION, getUserCode()));
  } catch {
    /* ignore */
  }
}

export function persistState(state: ActiveRunState) {
  saveLocal(state);
  void saveRemote(state);
}

export function clearActiveRun() {
  clearLocal();
  void clearRemote();
}

export function startRun(run: TestRun, meta: RunMeta): ActiveRunState {
  const state: ActiveRunState = {
    run,
    meta,
    answers: [],
    current: 0,
    updatedAt: Date.now(),
  };
  persistState(state);
  return state;
}

export function hasLocalRun(): boolean {
  return loadLocal() !== null;
}
