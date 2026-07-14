import Reveal from "./Reveal";

export default function SectionHeader({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id?: string;
}) {
  return (
    <Reveal>
      <div className="mb-10 flex items-baseline gap-4 md:mb-14">
        <span className="font-mono text-sm text-accent" aria-hidden="true">
          {index}
        </span>
        <h2
          id={id}
          className="text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] font-bold leading-[1.15] tracking-tight"
        >
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
