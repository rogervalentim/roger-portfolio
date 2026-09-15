import { projects } from "../data/projects";
import { ProjectCard } from "./project-card";

export const Projects = () => (
  <section className="container" id="projetos" aria-labelledby="projects-title">
    <h2 id="projects-title" className="font-bold text-white text-4xl leading-[100%] tracking-[-2px] md:text-5xl text-center">
      Projetos <span className="text-[#CBACF9]">em destaque</span>
    </h2>
    <p className="mx-auto mt-5 max-w-[720px] text-center text-[#C1C2D3] leading-relaxed">
      Uma seleção de interfaces com React, Next.js e TypeScript, além de projetos com HTML, CSS e JavaScript.
    </p>
    <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-10 pt-[60px] pb-[100px] md:pb-[150px]">
      {projects.map((project) => <ProjectCard key={project.id} {...project} />)}
    </div>
  </section>
);
