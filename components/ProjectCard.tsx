import Image from "next/image";

export type Project = {
  role: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

const CORNER_POSITIONS = [
  "top-[12.5px] left-[12.5px]",
  "top-[12.5px] right-[12.5px]",
  "bottom-[12.5px] left-[12.5px]",
  "bottom-[12.5px] right-[12.5px]",
] as const;

export function ProjectCard({
  project,
  variant = "tinted",
}: {
  project: Project;
  variant?: "tinted" | "plain";
}) {
  return (
    <article className="project-card group relative flex flex-col gap-[33px] items-start p-6 w-full transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1">
      {/* Decorative card frame: border + soft gradient + inner highlight + corner dots */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[20px] border-[1.5px] border-line overflow-hidden pointer-events-none transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[#cfe1f6] group-hover:shadow-[0_18px_40px_-20px_rgba(19,63,200,0.25)]"
      >
        <div
          className="absolute inset-0 rounded-[20px]"
          style={{ background: variant === "plain" ? "#fafafa" : "#f6fbff" }}
        />
        <div className="absolute inset-0 rounded-[inherit] card-inset" />
        {CORNER_POSITIONS.map((pos) => (
          <div key={pos} className={`absolute h-[6px] w-[6px] ${pos}`}>
            <Image
              src="/figma/card-corner-dot.svg"
              alt=""
              width={6}
              height={6}
              aria-hidden
            />
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="relative h-[240px] w-full rounded-[10px] overflow-hidden shadow-card-image">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      {/* Text */}
      <div className="relative flex flex-col gap-2 items-start w-full">
        <p className="text-[14px] font-medium leading-[21px] tracking-[-0.42px] text-[#133fc8]">
          {project.role}
        </p>
        <h3 className="text-[22px] font-medium leading-[26.4px] tracking-[-0.66px] text-ink">
          {project.title}
        </h3>
        <p className="text-[16px] font-normal leading-[22.5px] tracking-[-0.3px] text-ink-muted line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* View link */}
      <a
        href={project.href ?? "#"}
        className="relative inline-flex items-center gap-2 text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-ink transition-opacity hover:opacity-70"
      >
        View
        <Image
          src="/figma/arrow-right.svg"
          alt=""
          width={14}
          height={12}
          aria-hidden
          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      </a>
    </article>
  );
}
