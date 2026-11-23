export type Locale = "pt" | "en";

export const translations = {
  pt: {
    nav: ["Início", "Sobre", "Projetos", "Experiência", "Contato"],
    languageLabel: "Selecionar idioma",
    availability: "Disponível para Front-End · São Paulo / Remoto",
    viewProjects: "Ver projetos",
    resume: "Currículo",
    copyEmail: "Copiar e-mail",
    copied: "Copiado",
    aboutTitle: "Sobre & Stack",
    stackTitle: "Stack por categoria",
    projectsTitle: "Projetos em destaque",
    projectsDescription:
      "Seis interfaces em produção. Cada card abre o desafio técnico, a decisão de arquitetura e o que mudou na experiência.",
    filtersLabel: "Filtrar projetos por tecnologia",
    filters: ["Todos", "Next.js", "React", "TypeScript", "Full-Stack / API"],
    liveDemo: "Ver projeto",
    sourceCode: "Código",
    caseStudy: "Estudo de caso",
    caseStudyTitle: "Estudo de caso",
    challenge: "Desafio técnico",
    solution: "Solução implementada",
    uiDecisions: "Diferencial de UI/UX",
    highlights: "Destaques técnicos",
    close: "Fechar",
    experienceTitle: "Experiência & Formação",
    contactTitle: "Vamos falar sobre a próxima interface.",
    contactDescription:
      "Aberto a posições Front-End júnior em São Paulo (presencial ou híbrido) e remoto. Respondo em até um dia útil.",
    whatsapp: "WhatsApp",
    linkedinLabel: "LinkedIn",
    emailLabel: "E-mail",
    rights: "Todos os direitos reservados.",
  },
  en: {
    nav: ["Home", "About", "Projects", "Experience", "Contact"],
    languageLabel: "Select language",
    availability: "Open to Front-End roles · São Paulo / Remote",
    viewProjects: "View projects",
    resume: "Résumé",
    copyEmail: "Copy email",
    copied: "Copied",
    aboutTitle: "About & Stack",
    stackTitle: "Stack by category",
    projectsTitle: "Featured projects",
    projectsDescription:
      "Six interfaces in production. Each card opens the technical challenge, the architecture decision and what changed in the experience.",
    filtersLabel: "Filter projects by technology",
    filters: ["All", "Next.js", "React", "TypeScript", "Full-Stack / API"],
    liveDemo: "View project",
    sourceCode: "Code",
    caseStudy: "Case study",
    caseStudyTitle: "Case study",
    challenge: "Technical challenge",
    solution: "Implemented solution",
    uiDecisions: "UI/UX difference",
    highlights: "Technical highlights",
    close: "Close",
    experienceTitle: "Experience & Education",
    contactTitle: "Let's talk about the next interface.",
    contactDescription:
      "Open to junior Front-End roles in São Paulo (on-site or hybrid) and remote. I reply within one business day.",
    whatsapp: "WhatsApp",
    linkedinLabel: "LinkedIn",
    emailLabel: "Email",
    rights: "All rights reserved.",
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
