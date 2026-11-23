"use client";

import Image from "next/image";
import type { ProjectCardProps } from "../types";
import { ArrowIcon } from "./action-link";
import { Meta, TechBadge } from "./badge";
import { ProjectDetailsModal } from "./project-details-modal";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export function ProjectCard({ project, locale = "pt" }: { project: ProjectCardProps; locale?: Locale }) {
  const t = getTranslations(locale);
  const { id, title, kicker, description, image, link, technologies, githubUrl } = project;

  return (
    <article
      aria-labelledby={`${id}-title`}
      className="group flex min-w-0 flex-col rounded-lg border border-line bg-surface transition-colors duration-300 hover:border-line-strong"
    >
      {/* Moldura de janela de navegador */}
      <div className="window-frame mx-3 mt-3 overflow-hidden border-b-0 md:mx-4 md:mt-4">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#27272a]" />
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#27272a]" />
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#27272a]" />
          <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-wider text-[#52525b]">
            {new URL(link).host}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <Image
            src={image}
            alt={
              locale === "en"
                ? `Interface of the ${title.en} project`
                : `Interface do projeto ${title.pt}`
            }
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 560px"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <Meta>{kicker[locale]}</Meta>
        <h3
          id={`${id}-title`}
          className="display mt-2 text-xl font-semibold text-fg md:text-2xl"
        >
          {title[locale]}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description[locale]}</p>

        <ul
          className="mt-4 flex flex-wrap gap-1.5"
          aria-label={locale === "en" ? `Technologies of ${title.en}` : `Tecnologias de ${title.pt}`}
        >
          {technologies.map((technology) => (
            <li key={technology}>
              <TechBadge>{technology}</TechBadge>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 border-t border-line pt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              locale === "en" ? `Open the ${title.en} project` : `Abrir o projeto ${title.pt}`
            }
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            {t.liveDemo}
            <ArrowIcon />
          </a>
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                locale === "en" ? `${title.en} source code on GitHub` : `Código de ${title.pt} no GitHub`
              }
              className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-fg"
            >
              {t.sourceCode}
            </a>
          ) : null}
          <div className="ml-auto">
            <ProjectDetailsModal project={project} locale={locale} />
          </div>
        </div>
      </div>
    </article>
  );
}
