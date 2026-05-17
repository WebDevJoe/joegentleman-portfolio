"use server";

import { cookies } from "next/headers";
import { SITE_UNLOCK_COOKIE } from "./site-unlock-constants";

// Each lockId maps to a server-only env var. Without the env var the lock
// can never be opened. There is no client fallback, so the password never
// ends up in the browser bundle or the public GitHub source.
const PASSWORDS: Record<string, string | undefined> = {
  "battle-pass-c-and-c": process.env.BATTLE_PASS_PASSWORD,
  "fs2": process.env.BATTLE_PASS_PASSWORD,
};

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function checkUnlock(
  lockId: string,
  attempt: string,
): Promise<boolean> {
  const expected = PASSWORDS[lockId];
  if (!expected) return false;
  return constantTimeEqual(expected, attempt);
}

export async function unlockSite(attempt: string): Promise<boolean> {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) return false;
  if (!constantTimeEqual(expected, attempt)) return false;

  const jar = await cookies();
  jar.set(SITE_UNLOCK_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return true;
}
