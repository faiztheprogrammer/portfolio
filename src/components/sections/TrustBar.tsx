import { stack } from "@/lib/content";

export default function TrustBar() {
  return (
    <section aria-label="Technologies and current role" className="border-y border-line bg-bg-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-6 md:flex-row md:items-center md:px-8 lg:px-12">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[13px] text-muted">
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="shrink-0 font-mono text-[13px] text-body">
          Currently: <span className="text-accent">SDET @ CodeAutomation</span>
        </p>
      </div>
    </section>
  );
}
