import "@testing-library/jest-dom/vitest";
import { webcrypto } from "node:crypto";

if (typeof globalThis.crypto === "undefined" || !globalThis.crypto.randomUUID) {
  (globalThis as unknown as { crypto: Crypto }).crypto =
    webcrypto as unknown as Crypto;
}
