import { specialties } from "../data/profile";
import type { Locale } from "../i18n";

export function Specialties({ locale = "pt" }: { locale?: Locale }) {
  const english = [
    { title: "Figma to Code", description: "I transform Figma layouts into responsive interfaces that faithfully match the design." },
    { title: "React & Next.js", description: "I build applications with React, Next.js and TypeScript using reusable components." },
    { title: "Responsive UI", description: "Mobile-first interfaces adapted for desktop, tablet and mobile devices." },
    { title: "API Integration", description: "I consume REST APIs and manage server data with TanStack Query." },
  ];
  const items = locale === "en" ? english : specialties;
  return (
    <section className="container pb-[100px] md:pb-[150px]" aria-labelledby="specialties-title">
      <h2 id="specialties-title" className="text-center text-4xl font-bold leading-[100%] tracking-[-2px] text-white md:text-5xl">
        {locale === "en" ? <>My <span className="text-[#CBACF9]">specialties</span></> : <>Minhas <span className="text-[#CBACF9]">especialidades</span></>}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, description }) => (
          <div key={title} className="rounded-[23px] bg-[linear-gradient(to_right,#3637496e,#3637497d)] p-px">
            <div className="h-full rounded-[23px] bg-linear-to-r from-[#04071D] to-[#0C0E23] p-6">
              <h3 className="text-xl font-bold leading-[120%] text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#C1C2D3]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
