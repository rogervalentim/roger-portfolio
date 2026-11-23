import type { Localized } from "../types";

// Links conferidos nos componentes e no currículo publicado em /public.
export const profile = {
  name: "Roger Valentim",
  github: "https://github.com/rogervalentim",
  linkedin: "https://www.linkedin.com/in/rogervalentim33",
  whatsapp: "https://wa.me/5511976069285",
  email: "roger.valentim33@gmail.com",
  resume: "/curriculo-roger-valentim.pdf",
  resumeEn: "/curriculo-roger-valentim-en.pdf",
} as const;

export const heroCopy: {
  availability: Localized;
  headline: string;
  headlineTail: Localized;
  intro: Localized;
} = {
  availability: {
    pt: "Disponível para Front-End · São Paulo / Remoto",
    en: "Open to Front-End roles · São Paulo / Remote",
  },
  headline: "Roger Valentim",
  headlineTail: {
    pt: "— Engenheiro Front-End focado em interfaces de alta precisão e performance.",
    en: "— Front-End Engineer focused on high-precision, high-performance interfaces.",
  },
  intro: {
    pt: "Trabalho na fronteira entre design e engenharia: interfaces fiéis ao Figma, tipadas de ponta a ponta e rápidas o bastante para não aparecerem nos relatórios de performance.",
    en: "I work where design meets engineering: interfaces faithful to Figma, typed end to end and fast enough to stay out of the performance reports.",
  },
};

export const aboutCopy: {
  paragraphs: Localized<string[]>;
  signature: Localized;
} = {
  paragraphs: {
    pt: [
      "Sou desenvolvedor Front-End com formação em Engenharia de Software (Anhanguera, 2024 — 2028). Meu aprendizado mais denso veio do código em produção, não de tutoriais: na Prime Web atuei como estagiário de Front-End entre outubro de 2024 e maio de 2026, convertendo protótipos do Figma em interfaces responsivas com HTML, CSS, JavaScript e PHP.",
      "Foi ali que aprendi a diferença entre “parece pronto” e “está pronto”: implementar SEO on-page, acompanhar Core Web Vitals, ler relatórios de desempenho e corrigir bugs em produção com prazo real.",
      "Hoje meu foco é React e Next.js com TypeScript — componente reutilizável, estado previsível, acessibilidade por padrão e zero layout shift. Gosto do detalhe que ninguém elogia, mas todo mundo sente: o foco que aparece na ordem certa, o esqueleto de carregamento que evita o salto, o texto que não quebra em 320 px.",
    ],
    en: [
      "I am a Front-End developer with a Software Engineering degree (Anhanguera, 2024 — 2028). My densest learning came from production code, not tutorials: at Prime Web I worked as a Front-End intern from October 2024 to May 2026, turning Figma prototypes into responsive interfaces with HTML, CSS, JavaScript and PHP.",
      "That is where I learned the difference between “looks done” and “is done”: shipping on-page SEO, tracking Core Web Vitals, reading performance reports and fixing production bugs against real deadlines.",
      "Today my focus is React and Next.js with TypeScript — reusable components, predictable state, accessibility by default and zero layout shift. I care about the detail nobody praises but everyone feels: focus landing in the right order, skeletons that prevent the jump, text that does not break at 320 px.",
    ],
  },
  signature: {
    pt: "São Paulo, BR · GitHub e LinkedIn abaixo",
    en: "São Paulo, BR · GitHub and LinkedIn below",
  },
};

export const stackCategories: { title: Localized; items: string[] }[] = [
  {
    title: { pt: "Core", en: "Core" },
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: { pt: "UI & Design Systems", en: "UI & Design Systems" },
    items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "Material UI", "Sass", "Figma"],
  },
  {
    title: { pt: "Dados & Estado", en: "Data & State" },
    items: ["TanStack Query", "TanStack Router", "Zustand", "Next.js App Router"],
  },
  {
    title: { pt: "Integração & Back-end", en: "Integration & Back-End" },
    items: ["REST APIs", "Node.js", "Fastify", "Prisma", "PostgreSQL"],
  },
  {
    title: { pt: "Testes & Qualidade", en: "Testing & Quality" },
    items: ["Jest", "React Testing Library", "Vitest", "Cypress", "Playwright"],
  },
  {
    title: { pt: "Ferramentas", en: "Tooling" },
    items: ["Git", "GitHub", "Vite"],
  },
];
