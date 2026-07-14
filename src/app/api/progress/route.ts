import { NextResponse } from "next/server";

import {
  getFirestore,
  getInitError,
  PROGRESS_COLLECTION,
  PROGRESS_DOC,
} from "@/lib/firebase";
import type { QuizProgress } from "@/hooks/useQuizProgress";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const EMPTY_PROGRESS: QuizProgress = {
  wrongQuestionIds: [],
  scoresBySection: {},
  lastRuns: [],
};

function notConfigured() {
  const err = getInitError() ?? "FIREBASE_NOT_CONFIGURED";
  return NextResponse.json({ error: err }, { status: 503 });
}

export async function GET() {
  const db = getFirestore();
  if (!db) return notConfigured();

  try {
    const snap = await db
      .collection(PROGRESS_COLLECTION)
      .doc(PROGRESS_DOC)
      .get();
    if (!snap.exists) {
      return NextResponse.json(EMPTY_PROGRESS, {
        headers: { "Cache-Control": "no-store, max-age=0" },
      });
    }
    const data = snap.data() as Partial<QuizProgress>;
    const progress: QuizProgress = {
      wrongQuestionIds: data.wrongQuestionIds ?? [],
      scoresBySection: data.scoresBySection ?? {},
      lastRuns: data.lastRuns ?? [],
    };
    return NextResponse.json(progress, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (err) {
    console.error("[/api/progress] GET failed:", err);
    return NextResponse.json({ error: "FIRESTORE_READ_FAILED" }, { status: 502 });
  }
}

export async function POST(req: Request) {
  const db = getFirestore();
  if (!db) return notConfigured();

  let body: QuizProgress;
  try {
    body = (await req.json()) as QuizProgress;
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  if (
    !body ||
    !Array.isArray(body.wrongQuestionIds) ||
    !body.scoresBySection ||
    !Array.isArray(body.lastRuns)
  ) {
    return NextResponse.json({ error: "INVALID_SHAPE" }, { status: 400 });
  }

  if (body.wrongQuestionIds.length > 5000) {
    return NextResponse.json({ error: "PAYLOAD_TOO_LARGE" }, { status: 413 });
  }
  if (body.lastRuns.length > 50) {
    body.lastRuns = body.lastRuns.slice(0, 50);
  }

  try {
    await db
      .collection(PROGRESS_COLLECTION)
      .doc(PROGRESS_DOC)
      .set({
        wrongQuestionIds: body.wrongQuestionIds,
        scoresBySection: body.scoresBySection,
        lastRuns: body.lastRuns,
        updatedAt: Date.now(),
      });
    return NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  } catch (err) {
    console.error("[/api/progress] POST failed:", err);
    return NextResponse.json({ error: "FIRESTORE_WRITE_FAILED" }, { status: 502 });
  }
}
