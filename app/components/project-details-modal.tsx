"use client";

import { useRef } from "react";
import type { ProjectCardProps } from "../types";
import { Meta, TechBadge } from "./badge";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export function ProjectDetailsModal({
  project,
  locale = "pt",
}: {
  project: ProjectCardProps;
  locale?: Locale;
}) {
  const t = getTranslations(locale);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const sections = [
    { label: t.challenge, body: project.challenge[locale] },
    { label: t.solution, body: project.solution[locale] },
    { label: t.uiDecisions, body: project.uiDecisions[locale] },
  ];

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm text-muted underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
      >
        {t.caseStudy}
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={`${project.id}-case-title`}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[640px] overflow-y-auto overscroll-contain rounded-lg border border-line bg-ink p-0 text-fg shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-line bg-ink/95 px-5 py-4 backdrop-blur md:px-7">
          <div>
            <Meta>{t.caseStudyTitle}</Meta>
            <h2
              id={`${project.id}-case-title`}
              className="display mt-1 text-xl font-semibold text-fg md:text-2xl"
            >
              {project.title[locale]}
            </h2>
          </div>
          <button
            type="button"
            aria-label={t.close}
            onClick={() => dialogRef.current?.close()}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="m6 6 12 12M6 18 18 6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-6 md:px-7">
          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <li key={technology}>
                <TechBadge>{technology}</TechBadge>
              </li>
            ))}
          </ul>

          <dl className="mt-6 space-y-6">
            {sections.map((section) => (
              <div key={section.label}>
                <dt className="meta">{section.label}</dt>
                <dd className="mt-2 text-sm leading-[1.75] text-muted-2">{section.body}</dd>
              </div>
            ))}
            <div>
              <dt className="meta">{t.highlights}</dt>
              <dd>
                <ul className="mt-2 space-y-1.5">
                  {project.highlights[locale].map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-2">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap gap-x-5 border-t border-line pt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
            >
              {t.liveDemo}
            </a>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
              >
                {t.sourceCode}
              </a>
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
