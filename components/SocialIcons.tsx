import Image from "next/image";

const socials = [
  { name: "Dribbble", href: "https://dribbble.com/Joegentleman", icon: "/figma/icon-dribbble.svg" },
  { name: "X", href: "https://x.com", icon: "/figma/icon-x.svg" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "/figma/icon-linkedin.svg" },
];

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={s.name}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e3e3e3] shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] hover:brightness-95 transition"
        >
          <Image src={s.icon} alt="" width={24} height={24} aria-hidden />
        </a>
      ))}
    </div>
  );
}
