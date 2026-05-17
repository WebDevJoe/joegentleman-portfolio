"use client";

import { PasswordModal } from "./PasswordModal";
import { unlockSite } from "@/lib/unlock-action";

export function SiteGate() {
  return (
    <PasswordModal
      open
      dismissable={false}
      validate={(attempt) => unlockSite(attempt)}
      onClose={() => {
        /* gate cannot be dismissed */
      }}
      onSuccess={() => {
        // Full reload so the server-rendered layout re-reads the unlock
        // cookie and serves the real site content.
        window.location.reload();
      }}
      title="Joe Gentleman"
      description="Enter the password to view this portfolio."
    />
  );
}
