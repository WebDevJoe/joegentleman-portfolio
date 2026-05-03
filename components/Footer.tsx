import Image from "next/image";
import { LogoTile } from "./Logo";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="w-full border-t border-line bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 px-4 md:px-16 pt-16 pb-12">
        <div className="flex flex-col gap-4 max-w-[280px]">
          <div className="flex items-center gap-3">
            <LogoTile />
            <div className="flex flex-col gap-[2px]">
              <p className="text-ink text-[18px] font-medium tracking-[-0.36px] leading-none">
                Joe
              </p>
              <p className="text-ink-muted text-[14px] font-normal leading-none">
                Product designer
              </p>
            </div>
          </div>
          <p className="text-ink-muted text-[16px] leading-[1.5]">
            Available for product design roles and freelance projects.
          </p>
        </div>
        <SocialIcons />
      </div>

      <div className="h-px w-full bg-line" />

      <div className="flex items-center justify-between px-4 md:px-16 py-6">
        <p className="text-[14px] text-ink-faint">© 2026 JoeGentlemanUI</p>
        <div className="flex items-center gap-2">
          <Image
            src="/figma/status-dot.svg"
            alt=""
            width={6}
            height={6}
            aria-hidden
            className="animate-pulse"
          />
          <p className="text-[14px] font-medium text-ink-muted">Available for work</p>
        </div>
      </div>
    </footer>
  );
}
