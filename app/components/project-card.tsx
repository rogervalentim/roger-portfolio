import Image from "next/image";
import type { ProjectCardProps } from "../types";
import { ArrowIcon } from "./action-link";
import { TechBadge } from "./tech-badge";
import { ProjectDetailsModal } from "./project-details-modal";
import type { Locale } from "../i18n";

export function ProjectCard(props: ProjectCardProps & { locale?: Locale }) {
  const locale = props.locale ?? "pt";
  const {
    id,
    title,
    description,
    image,
    link,
    technologies,
    features,
    githubUrl,
  } = props;
  const englishTitles: Record<string, string> = {
    cineverse: "CineVerse",
    "ifood-clone": "iFood Clone",
    evogym: "Evogym",
    blog: "SaaS Landing Page",
    "panto-furniture": "Panto Furniture",
    "green-bank": "Green Bank",
  };
  const englishDescriptions: Record<string, string> = {
    cineverse:
      "A movie and TV discovery application built with Next.js and TypeScript, integrated with the TMDB API and designed responsively.",
    "ifood-clone":
      "A Next.js and TypeScript application that simulates meal ordering, including restaurant navigation and cart management.",
    evogym:
      "A responsive React and Tailwind CSS interface for the fitness segment.",
    blog: "A Next.js and TypeScript landing page for presenting an online-store platform with clear visual hierarchy and calls to action.",
    "panto-furniture":
      "A furniture storefront interface built with HTML, CSS and JavaScript, featuring a visual catalog and product categories.",
    "green-bank":
      "A responsive Next.js and Tailwind CSS landing page for digital banking and credit-card services.",
  };
  const displayedTitle = locale === "en" ? (englishTitles[id] ?? title) : title;
  const displayedDescription =
    locale === "en" ? (englishDescriptions[id] ?? description) : description;

  return (
    <article
      aria-labelledby={id + "-title"}
      // 1. Adicionado "group" e transição suave na borda do card
      className="group relative min-w-0 rounded-[23px] p-px bg-[linear-gradient(to_right,#3637496e,#3637497d)] transition-all duration-300 hover:bg-[linear-gradient(to_right,#CBACF966,#363749)]"
    >
      <div className="w-full h-full py-9 px-6 bg-[linear-gradient(to_right,#04071D,#0C0E23)] rounded-[23px] flex flex-col justify-between">
        <div>
          <div className="relative aspect-449/319 md:aspect-auto md:h-[330px] bg-[#13162D] overflow-hidden flex justify-center items-center rounded-[14px] pt-[30px] pl-[45px] pr-[42px]">
            {/* 2. Adicionado overflow-hidden no container interno para a imagem não vazar das bordas arredondadas */}
            <div className="relative h-full w-full overflow-hidden rounded-[10px]">
              <Image
                src={image}
                alt={"Interface do projeto " + title}
                fill
                // 3. Efeito de zoom suave e leve subida quando o mouse passa sobre o card (group-hover)
                className="rounded-[10px] object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                sizes="(max-width: 576px) 65vw, (max-width: 768px) 400px, (max-width: 1024px) 580px, (max-width: 1422px) 34vw, 490px"
              />
            </div>
          </div>
          <h3
            id={id + "-title"}
            className="text-[20px] md:text-[32px] font-bold text-white leading-9 tracking-[-2%] mt-9 transition-colors duration-300 group-hover:text-[#CBACF9]"
          >
            {displayedTitle}
          </h3>
          <p className="text-[#BEC1DD] text-sm mt-[18px] md:text-[20px] leading-[140%]">
            {displayedDescription}
          </p>
          <ul
            className="mt-5 flex flex-wrap gap-2"
            aria-label={"Tecnologias de " + title}
          >
            {technologies.map((technology) => (
              <li key={technology}>
                <TechBadge>{technology}</TechBadge>
              </li>
            ))}
          </ul>
          <ul
            className="mt-5 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#C1C2D3]"
            aria-label={"Funcionalidades de " + title}
          >
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            className="inline-flex min-h-11 items-center gap-2.5 text-[18px] font-medium leading-[120%] text-[#CBACF9] hover:underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"Ver projeto " + title}
          >
            {locale === "en" ? "Live Demo" : "Ver projeto"} <ArrowIcon />
          </a>
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={"Código de " + title + " no GitHub"}
              className="inline-flex min-h-11 items-center text-[#C1C2D3] hover:text-white hover:underline"
            >
              Código-fonte
            </a>
          ) : (
            <span
              className="inline-flex min-h-11 items-center text-xs text-[#8589A6]"
              title="Repositório não informado pelo proprietário"
            >
              {locale === "en"
                ? "Source code unavailable"
                : "Código-fonte indisponível"}
            </span>
          )}
          <ProjectDetailsModal
            project={{
              ...props,
              title: displayedTitle,
              description: displayedDescription,
            }}
            locale={locale}
          />
        </div>
      </div>
    </article>
  );
}
