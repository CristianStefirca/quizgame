import { NextResponse } from "next/server";

import { redis, PROGRESS_KEY } from "@/lib/redis";
import type { QuizProgress } from "@/hooks/useQuizProgress";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  if (!redis) {
    return NextResponse.json(
      { error: "KV_NOT_CONFIGURED" },
      { status: 503 },
    );
  }
  try {
    const raw = await redis.get<QuizProgress | null>(PROGRESS_KEY);
    const progress: QuizProgress = raw ?? {
      wrongQuestionIds: [],
      scoresBySection: {},
      lastRuns: [],
    };
    return NextResponse.json(progress, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (err) {
    console.error("[/api/progress] GET failed:", err);
    return NextResponse.json(
      { error: "KV_READ_FAILED" },
      { status: 502 },
    );
  }
}

export async function POST(req: Request) {
  if (!redis) {
    return NextResponse.json(
      { error: "KV_NOT_CONFIGURED" },
      { status: 503 },
    );
  }
  let body: QuizProgress;
  try {
    body = (await req.json()) as QuizProgress;
  } catch {
    return NextResponse.json(
      { error: "INVALID_JSON" },
      { status: 400 },
    );
  }

  if (!body || !Array.isArray(body.wrongQuestionIds) ||
      !body.scoresBySection || !Array.isArray(body.lastRuns)) {
    return NextResponse.json(
      { error: "INVALID_SHAPE" },
      { status: 400 },
    );
  }

  if (body.wrongQuestionIds.length > 5000) {
    return NextResponse.json(
      { error: "PAYLOAD_TOO_LARGE" },
      { status: 413 },
    );
  }
  if (body.lastRuns.length > 50) {
    body.lastRuns = body.lastRuns.slice(0, 50);
  }

  try {
    await redis.set(PROGRESS_KEY, JSON.stringify(body));
    return NextResponse.json({ ok: true }, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (err) {
    console.error("[/api/progress] POST failed:", err);
    return NextResponse.json(
      { error: "KV_WRITE_FAILED" },
      { status: 502 },
    );
  }
}
