"use client";

import { useRef } from "react";
import type { ProjectCardProps } from "../types";
import type { Locale } from "../i18n";

export function ProjectDetailsModal({ project, locale = "pt" }: { project: ProjectCardProps; locale?: Locale }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex min-h-11 cursor-pointer items-center text-[#C1C2D3] hover:text-white hover:underline"
      >
        Case Study
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={`${project.id}-case-title`}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[680px] overflow-y-auto rounded-[23px] border border-[#363749] bg-[#04071D] p-0 text-[#E4ECFF] shadow-2xl backdrop:bg-[#000319]/80 backdrop:backdrop-blur-sm"
      >
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id={`${project.id}-case-title`} className="text-2xl font-bold text-white md:text-3xl">
              {locale === "en" ? "Case Study" : "Estudo de Caso"} <span className="text-[#CBACF9]">{project.title}</span>
            </h2>
            <button
              type="button"
              aria-label="Fechar case study"
              onClick={() => dialogRef.current?.close()}
              className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-[7px] border border-[#363749] text-xl text-[#C1C2D3]"
            >
              ×
            </button>
          </div>
          <div className="mt-8 grid gap-6">
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#CBACF9]">{locale === "en" ? "Problem / Objective" : "Problema / Objetivo"}</h3>
              <p className="mt-2 leading-relaxed text-[#C1C2D3]">{project.problem ?? project.description}</p>
            </section>
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#CBACF9]">{locale === "en" ? "Architecture decisions" : "Decisões de arquitetura"}</h3>
              <p className="mt-2 leading-relaxed text-[#C1C2D3]">{project.architecture ?? "Arquitetura baseada em componentes reutilizáveis, tipagem TypeScript e separação clara de responsabilidades."}</p>
            </section>
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#CBACF9]">{locale === "en" ? "Technical highlights" : "Destaques técnicos"}</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#C1C2D3]">
                {(project.highlights ?? project.features).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          </div>
        </div>
      </dialog>
    </>
  );
}
