export function TechBadge({ children, featured = false }: {
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <span className={`inline-flex items-center rounded-[7px] bg-[#10132E] px-3 py-2 text-sm leading-[18.6px] ${featured ? "font-semibold text-[#CBACF9]" : "font-medium text-[#E4ECFF]"}`}>
      {children}
    </span>
  );
}
