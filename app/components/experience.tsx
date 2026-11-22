import { ExperienceCard } from "./experience-card";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export const Experience = ({ locale = "pt" }: { locale?: Locale }) => {
  const t = getTranslations(locale);
  return (
    <section className="container py-[70px]" id="experiencia" aria-labelledby="experience-title">
      <h2 id="experience-title" className="font-bold text-white text-4xl leading-[100%] tracking-[-2px] md:text-5xl text-center">
        {t.experienceTitle} & <span className="text-[#CBACF9]">{t.educationHighlight}</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[70px]">
        <ExperienceCard
          image="/experince/student-1.svg"
          title={locale === "en" ? "Front-End Development Intern" : "Estagiário de Desenvolvimento Front-End"}
          date="Prime web - 21/10/2024 - 18/05/2026"
          description=""
          bullets={locale === "en" ? [
            "Built responsive interfaces from Figma prototypes using HTML, CSS, JavaScript and PHP.",
            "Implemented on-page SEO and Core Web Vitals improvements to increase organic ranking and loading speed.",
            "Analyzed performance reports and proactively resolved bugs in production.",
          ] : [
            "Desenvolvi interfaces responsivas a partir de protótipos do Figma com HTML, CSS, JavaScript e PHP.",
            "Implementei melhorias de SEO on-page e Core Web Vitals para aumentar ranqueamento orgânico e velocidade de carregamento.",
            "Analisei relatórios de desempenho e resolvi bugs proativamente em ambiente de produção.",
          ]}
        />
        <ExperienceCard
          image="/experince/student-2.svg"
          title={locale === "en" ? "Bachelor's Degree in Software Engineering – Anhanguera Educacional" : "Bacharelado em Engenharia de Software – Anhanguera Educacional"}
          date="01/09/2024 - Atualmente (previsão de conclusão: 01/01/2028) - 4° semestre"
          description="Graduação focada em desenvolvimento de software, arquitetura de sistemas, engenharia de requisitos e boas práticas de programação. Inclui também fundamentos de usabilidade, performance e qualidade, aplicados ao desenvolvimento de sites e aplicações web."
        />
      </div>
    </section>
  );
};
