import {
  DribbbleLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

const socials = [
  {
    name: "Dribbble",
    href: "https://dribbble.com/Joegentleman",
    Icon: DribbbleLogo,
  },
  { name: "X", href: "https://x.com/joegentsui", Icon: XLogo },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/joe-gentleman-48a648244", Icon: LinkedinLogo },
];

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {socials.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={name}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e3e3e3] text-ink shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] hover:brightness-95 transition"
        >
          <Icon size={22} weight="fill" aria-hidden />
        </a>
      ))}
    </div>
  );
}
