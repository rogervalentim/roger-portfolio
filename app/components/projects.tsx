"use client";

import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "./project-card";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export function Projects({ locale = "pt" }: { locale?: Locale }) {
  const t = getTranslations(locale);
  const filters = t.filters;
  const [filter, setFilter] = useState<string>(filters[0]);
  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        if (filter === "Todos" || filter === "All") return true;
        if (filter === "React")
          return project.technologies.some((technology) =>
            technology.includes("React"),
          );
        if (filter === "Full-Stack / API")
          return (
            project.technologies.includes("Prisma") ||
            project.technologies.includes("TanStack Query")
          );
        return project.technologies.includes(filter);
      }),
    [filter],
  );

  return (
    <section
      className="container scroll-mt-32"
      id="projetos"
      aria-labelledby="projects-title"
    >
      <h2
        id="projects-title"
        className="font-bold text-white text-4xl leading-[100%] tracking-[-2px] md:text-5xl text-center"
      >
        {locale === "en" ? (
          <>
            <span className="text-[#CBACF9]">Featured</span> projects
          </>
        ) : (
          <>
            Projetos <span className="text-[#CBACF9]">em destaque</span>
          </>
        )}
      </h2>
      <p className="mx-auto mt-5 max-w-[720px] text-center text-[#C1C2D3] leading-relaxed">
        {t.projectsDescription}
      </p>
      <div
        className="mt-8 flex flex-wrap justify-center gap-2"
        aria-label="Filtrar projetos por tecnologia"
      >
        {filters.map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={`min-h-11 cursor-pointer rounded-full border px-4 text-sm transition-colors ${filter === item ? "border-[#CBACF9]/70 bg-[#CBACF9]/10 text-[#CBACF9]" : "border-[#363749] text-[#C1C2D3] hover:border-emerald-500/40 hover:text-white"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-10 pt-[60px] pb-[100px] md:pb-[150px]">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} locale={locale} />
        ))}
      </div>
    </section>
  );
}
