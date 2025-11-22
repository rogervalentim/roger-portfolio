import { ExperienceCard } from "./experience-card";

export const Experience = () => {
  return (
    <section className="container py-[70px]" id="experiencia">
      <h1 className="font-bold text-white text-4xl leading-[100%] tracking-[-2px] md:text-5xl text-center">
        Experiência & <span className="text-[#CBACF9]">Formação</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[70px] w-full">
        <ExperienceCard
          image="/experince/student-1.svg"
          title="Estagiário desenvolvedor front end"
          date="Prime web - 21/10/2024 - Atualmente"
          description="Desenvolvimento de sites com foco em SEO, posicionamento orgânico, manutenção de sites e web design, extração e apresentação de relatórios de desempenho de sites."
        />
        <ExperienceCard
          image="/experince/student-2.svg"
          title="Bacharelado em Engenharia de Software – Anhanguera Educacional"
          date="01/09/2024 - Atualmente (previsão de conclusão: 01/01/2028)"
          description="Graduação focada em desenvolvimento de software, arquitetura de sistemas, engenharia de requisitos e boas práticas de programação. Inclui também fundamentos de usabilidade, performance e qualidade, aplicados ao desenvolvimento de sites e aplicações web."
        />
      </div>
    </section>
  );
};
