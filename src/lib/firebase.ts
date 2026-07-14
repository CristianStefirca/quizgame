import {
  initializeApp,
  applicationDefault,
  cert,
  type App,
} from "firebase-admin/app";
import { getFirestore as getFirestoreSdk, type Firestore } from "firebase-admin/firestore";

let app: App | null = null;
let db: Firestore | null = null;
let initError: string | null = null;

function tryInit(): void {
  if (app || initError) return;

  const serviceAccountJson =
    process.env.FIREBASE_SERVICE_ACCOUNT ??
    process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;

  if (serviceAccountJson) {
    try {
      const parsed = JSON.parse(serviceAccountJson) as {
        projectId?: string;
        clientEmail?: string;
        privateKey?: string;
      };
      if (!parsed.projectId || !parsed.clientEmail || !parsed.privateKey) {
        initError = "FIREBASE_BAD_SERVICE_ACCOUNT";
        return;
      }
      app = initializeApp({
        credential: cert({
          projectId: parsed.projectId,
          clientEmail: parsed.clientEmail,
          privateKey: parsed.privateKey.replace(/\\n/g, "\n"),
        }),
      });
      db = getFirestoreSdk(app);
      return;
    } catch (err) {
      console.error("[firebase] init from FIREBASE_SERVICE_ACCOUNT failed:", err);
      initError = "FIREBASE_INIT_FAILED";
      return;
    }
  }

  const credentialPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (credentialPath) {
    try {
      app = initializeApp({ credential: applicationDefault() });
      db = getFirestoreSdk(app);
      return;
    } catch (err) {
      console.error("[firebase] init from GOOGLE_APPLICATION_CREDENTIALS failed:", err);
      initError = "FIREBASE_INIT_FAILED";
      return;
    }
  }

  initError = "FIREBASE_NOT_CONFIGURED";
}

export function getFirestore(): Firestore | null {
  tryInit();
  return db;
}

export function getInitError(): string | null {
  tryInit();
  return initError;
}

export const PROGRESS_DOC = "single";
export const PROGRESS_COLLECTION = "progress";
