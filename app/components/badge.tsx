export function TechBadge({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "mono";
}) {
  return (
    <span
      className={`pill-hover inline-flex items-center rounded border border-line bg-[#18181b] px-2 py-1 text-xs leading-[1.4] text-muted-2 ${
        tone === "mono" ? "font-mono uppercase tracking-wider" : ""
      }`}
    >
      {children}
    </span>
  );
}

export function Meta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`meta ${className}`}>{children}</span>;
}

export function SectionHeading({
  id,
  index,
  children,
}: {
  id: string;
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-3 border-b border-line pb-4">
      {index ? <Meta className="shrink-0 text-[#52525b]">{index}</Meta> : null}
      <h2 id={id} className="display text-2xl font-semibold text-fg md:text-3xl">
        {children}
      </h2>
    </div>
  );
}
