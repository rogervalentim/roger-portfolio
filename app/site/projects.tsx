"use client";

import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/project-card";
import { SectionHeading } from "../components/badge";
import { Reveal } from "../components/reveal";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export function Projects({ locale = "pt" }: { locale?: Locale }) {
  const t = getTranslations(locale);
  const filters = t.filters;
  const [filter, setFilter] = useState<string>(filters[0]);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        if (filter === filters[0]) return true;
        if (filter === "Full-Stack / API")
          return (
            project.technologies.includes("Prisma") ||
            project.technologies.includes("TanStack Query")
          );
        return project.technologies.includes(filter);
      }),
    [filter, filters],
  );

  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="border-b border-line py-16 md:py-24"
    >
      <div className="container">
        <SectionHeading id="projects-title" index="02">
          {t.projectsTitle}
        </SectionHeading>

        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-muted">
            {t.projectsDescription}
          </p>
          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label={t.filtersLabel}
          >
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={`min-h-9 cursor-pointer rounded border px-2.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  filter === item
                    ? "border-line-strong bg-[#18181b] text-fg"
                    : "border-line text-muted hover:border-line-strong hover:text-fg"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={Math.min(index * 75, 300)}
              className="flex min-w-0 flex-col"
            >
              <ProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
