import { featuredTechnologies, technologyGroups } from "../data/profile";
import { TechBadge } from "./tech-badge";
import { StackDialog } from "./stack-dialog";

export function TechnologyStack() {
  return (
    <section aria-labelledby="stack-title" className="rounded-[23px] bg-[linear-gradient(to_right,#3637496e,#3637497d)] p-px">
      <div className="w-full rounded-[23px] bg-linear-to-r from-[#04071D] to-[#0C0E23] p-6 md:p-10">
        <p className="leading-[120%] text-[#C1C2D3]">Aprendizado contínuo, aplicado em projetos.</p>
        <h3 id="stack-title" className="mt-2.5 text-[20px] font-bold leading-[120%] text-white md:text-3xl">Minha stack de tecnologias</h3>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias em destaque">
          {featuredTechnologies.map((technology) => <li key={technology}><TechBadge featured>{technology}</TechBadge></li>)}
        </ul>
        <StackDialog>
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {technologyGroups.map(({ title, technologies }) => (
              <div key={title} className="min-w-0">
                <dt className="mb-3 text-sm font-semibold text-[#CBACF9]">{title}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <li key={technology}><TechBadge>{technology}</TechBadge></li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </StackDialog>
      </div>
    </section>
  );
}
