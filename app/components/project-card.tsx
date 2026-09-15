import Image from "next/image";
import type { ProjectCardProps } from "../types";
import { ArrowIcon } from "./action-link";
import { TechBadge } from "./tech-badge";

export function ProjectCard({ id, title, description, image, link, technologies, features, githubUrl }: ProjectCardProps) {
  return (
    <article aria-labelledby={id + "-title"} className="relative min-w-0 rounded-[23px] p-px bg-[linear-gradient(to_right,#3637496e,#3637497d)]">
      <div className="w-full h-full py-9 px-6 bg-[linear-gradient(to_right,#04071D,#0C0E23)] rounded-[23px] flex flex-col justify-between">
        <div>
          <div className="relative aspect-[449/319] md:aspect-auto md:h-[330px] bg-[#13162D] overflow-hidden flex justify-center items-center rounded-[14px] pt-[30px] pl-[45px] pr-[42px]">
            <div className="relative h-full w-full rotate-[-2.63deg]">
              <Image src={image} alt={"Interface do projeto " + title} fill className="rounded-[10px] object-cover object-top" sizes="(max-width: 576px) 65vw, (max-width: 768px) 400px, (max-width: 1024px) 580px, (max-width: 1422px) 34vw, 490px" />
            </div>
          </div>
          <h3 id={id + "-title"} className="text-[20px] md:text-[32px] font-bold text-white leading-9 tracking-[-2%] mt-9">{title}</h3>
          <p className="text-[#BEC1DD] text-sm mt-[18px] md:text-[20px] leading-[140%]">{description}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={"Tecnologias de " + title}>
            {technologies.map((technology) => <li key={technology}><TechBadge>{technology}</TechBadge></li>)}
          </ul>
          <ul className="mt-5 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#C1C2D3]" aria-label={"Funcionalidades de " + title}>
            {features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a className="inline-flex min-h-11 items-center gap-2.5 text-[18px] font-medium leading-[120%] text-[#CBACF9] hover:underline" href={link} target="_blank" rel="noopener noreferrer" aria-label={"Ver projeto " + title}>
            Ver projeto <ArrowIcon />
          </a>
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={"Código de " + title + " no GitHub"} className="inline-flex min-h-11 items-center text-[#C1C2D3] hover:text-white hover:underline">GitHub</a>}
        </div>
      </div>
    </article>
  );
}
