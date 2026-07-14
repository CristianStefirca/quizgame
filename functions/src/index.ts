import * as functions from "firebase-functions";
import { getFirestore } from "firebase-admin/firestore";

const EMPTY_PROGRESS = {
  wrongQuestionIds: [],
  scoresBySection: {},
  lastRuns: [],
};

export const progress = functions.https.onRequest(async (req, res) => {
  if (req.method === "GET") {
    try {
      const db = getFirestore();
      const snap = await db.collection("progress").doc("single").get();
      if (!snap.exists) {
        res.json(EMPTY_PROGRESS);
        return;
      }
      const data = snap.data();
      const progress = {
        wrongQuestionIds: (data?.wrongQuestionIds as string[] | undefined) ?? [],
        scoresBySection: (data?.scoresBySection as Record<string, { correct: number; total: number }> | undefined) ?? {},
        lastRuns: (data?.lastRuns as Array<{
          runId: string;
          createdAt: number;
          section: string;
          count: number;
          correctCount: number;
          total: number;
          scorePercent: number;
          result: "ADMIS" | "RESPINS";
        }> | undefined) ?? [],
      };
      res.json(progress);
      return;
    } catch (err) {
      console.error("[progress] GET failed:", err);
      res.status(502).json({ error: "FIRESTORE_READ_FAILED" });
      return;
    }
  }

  if (req.method === "POST") {
    const body: any = req.body;

    if (
      !body ||
      !Array.isArray(body.wrongQuestionIds) ||
      !body.scoresBySection ||
      !Array.isArray(body.lastRuns)
    ) {
      res.status(400).json({ error: "INVALID_SHAPE" });
      return;
    }

    if (body.wrongQuestionIds.length > 5000) {
      res.status(413).json({ error: "PAYLOAD_TOO_LARGE" });
      return;
    }

    if (body.lastRuns.length > 50) {
      body.lastRuns = body.lastRuns.slice(0, 50);
    }

    try {
      const db = getFirestore();
      await db.collection("progress").doc("single").set({
        wrongQuestionIds: body.wrongQuestionIds,
        scoresBySection: body.scoresBySection,
        lastRuns: body.lastRuns,
        updatedAt: Date.now(),
      });
      res.json({ ok: true });
      return;
    } catch (err) {
      console.error("[progress] POST failed:", err);
      res.status(502).json({ error: "FIRESTORE_WRITE_FAILED" });
      return;
    }
  }

  res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
});