"use server";

// Each lockId maps to a server-only env var. Without the env var the lock
// can never be opened — there is no client fallback, so the password never
// ends up in the browser bundle or the public GitHub source.
const PASSWORDS: Record<string, string | undefined> = {
  "battle-pass-c-and-c": process.env.BATTLE_PASS_PASSWORD,
};

export async function checkUnlock(
  lockId: string,
  attempt: string,
): Promise<boolean> {
  const expected = PASSWORDS[lockId];
  if (!expected) return false;
  if (expected.length !== attempt.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ attempt.charCodeAt(i);
  }
  return mismatch === 0;
}
