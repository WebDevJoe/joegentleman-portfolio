// Paths exactly as exported from Figma; only the colour is driven by
// currentColor so each icon picks up its context.

export function IconJ({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden>
      <path
        d="M29.25 25.5L25.3994 29.625L21.75 33.75H14.25V26.25H21.75V17.25H25.5V10.5H21.75V2.25H29.25V25.5ZM12.75 26.25H5.25V18.75H12.75V26.25ZM21 18H13.5V10.5H21V18Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconMenu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 12H20M4 6H20M4 18H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconDownload({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M11.3333 6.66667L8 10L4.66667 6.66667M8 10V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Exported with its own chartreuse gradient stroke, so no currentColor here.
export function IconChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M6 12L10 8L6 4"
        stroke="url(#pvChevronGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="pvChevronGrad" x1="8" y1="4" x2="8" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1FA38" />
          <stop offset="1" stopColor="#FAFF93" />
        </linearGradient>
      </defs>
    </svg>
  );
}
