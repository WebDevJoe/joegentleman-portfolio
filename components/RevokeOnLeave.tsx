"use client";

import { useEffect } from "react";

const STORAGE_KEY = "jg.unlocked-projects";

/**
 * Removes a single lockId from the persisted unlock list when this component
 * unmounts (route change) or the tab is hidden/closed (pagehide). Mounted on
 * gated case-study pages so visiting them only grants single-session access.
 */
export function RevokeOnLeave({ lockId }: { lockId: string }) {
  useEffect(() => {
    const revoke = () => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return;
        const next = parsed.filter((id) => id !== lockId);
        if (next.length === 0) {
          window.localStorage.removeItem(STORAGE_KEY);
        } else {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        }
      } catch {
        // localStorage may be unavailable; nothing to revoke.
      }
    };
    window.addEventListener("pagehide", revoke);
    return () => {
      window.removeEventListener("pagehide", revoke);
      revoke();
    };
  }, [lockId]);

  return null;
}
