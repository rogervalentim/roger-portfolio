import type { Localized } from "../types";

export type CertificateCategory =
  | "ai-agents"
  | "frontend-fullstack"
  | "software-engineering"
  | "productivity-other";

export interface Certificate {
  id: string;
  title: Localized;
  issuer: string;
  issueDate: string | null;
  category: CertificateCategory;
  skills: string[];
  description?: Localized;
  credentialUrl?: string;
  attachment?: string;
  featured: boolean;
}

export const certificates: Certificate[] = [
  {
    id: "ms-agentic-ai-github",
    title: {
      pt: "Foundations of Agentic AI in GitHub",
      en: "Foundations of Agentic AI in GitHub",
    },
    issuer: "Microsoft",
    issueDate: "2026-11",
    category: "ai-agents",
    skills: ["GitHub", "Inteligência Artificial", "Agentic AI"],
    featured: true,
    credentialUrl:
      "https://learn.microsoft.com/en-us/users/rogervalentim-4927/achievements/kujdc2eb?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    description: {
      pt: "Valida os fundamentos da aplicação de Inteligência Artificial agêntica (Agentic AI) no ecossistema do GitHub, abrangendo o uso de agentes autônomos e ferramentas de IA para automação de fluxos de trabalho, revisão de código e aceleração do ciclo de desenvolvimento de software.",
      en: "Validates foundational knowledge in applying Agentic AI within the GitHub ecosystem, covering the use of autonomous agents and AI-powered tools to automate workflows, streamline code reviews, and accelerate the software development lifecycle.",
    },
  },
  {
    id: "alura-imersao-eng-software-ia",
    title: {
      pt: "Imersão Engenharia de Software: Dev na Era da IA",
      en: "Software Engineering Immersion: Dev in the AI Era",
    },
    issuer: "Alura",
    issueDate: "2026-11",
    category: "software-engineering",
    skills: [
      "Engenharia de Software",
      "Inteligência Artificial",
      "AI Workflows",
    ],
    description: {
      pt: "Capacitação com foco no impacto e aplicação prática de ferramentas de Inteligência Artificial na Engenharia de Software e no fluxo de trabalho dos desenvolvedores.",
      en: "Training focused on the impact and practical application of Artificial Intelligence tools in Software Engineering and developer workflows.",
    },
    featured: true,
    credentialUrl:
      "https://www.linkedin.com/in/rogervalentim33/overlay/Certifications/653471740/treasury/?profileId=ACoAACteqzMBX6fL91KdHzKtOljSoWG5FBV0eBE",
  },
  {
    id: "rocketseat-ai-native",
    title: {
      pt: "Desenvolvimento AI Native: Copilot, MCP, Agentes, Tasks e Skills",
      en: "AI Native Development: Copilot, MCP, Agents, Tasks, and Skills",
    },
    issuer: "Rocketseat",
    issueDate: "2026-10",
    category: "ai-agents",
    skills: [
      "GitHub Copilot",
      "MCP",
      "AI Agents",
      "VS Code",
      "Node.js",
      "Express",
      "REST APIs",
    ],
    description: {
      pt: "Curso focado no desenvolvimento de aplicações web com Inteligência Artificial, utilizando GitHub Copilot, VS Code, Node.js, Express e APIs REST.",
      en: "Course focused on developing web applications with Artificial Intelligence using GitHub Copilot, VS Code, Node.js, Express, and REST APIs.",
    },
    featured: true,
    credentialUrl:
      "https://www.linkedin.com/in/rogervalentim33/overlay/Certifications/2027048548/treasury/?profileId=ACoAACteqzMBX6fL91KdHzKtOljSoWG5FBV0eBE",
  },
  {
    id: "santander-domine-ia-gemini",
    title: { pt: "Domine a IA com Gemini", en: "Master AI with Gemini" },
    issuer: "Santander Open Academy",
    issueDate: "2026-10",
    category: "ai-agents",
    skills: ["Inteligência Artificial", "Google Gemini", "Prompt Engineering"],
    description: {
      pt: "Curso introdutório sobre Inteligência Artificial, com foco na utilização do Google Gemini como assistente para produtividade, pesquisa, aprendizagem e criatividade.",
      en: "Introductory course on Artificial Intelligence focusing on using Google Gemini as an assistant for productivity, research, learning, and creativity.",
    },
    featured: false,
    credentialUrl:
      "https://www.linkedin.com/in/rogervalentim33/overlay/Certifications/1091176006/treasury/?profileId=ACoAACteqzMBX6fL91KdHzKtOljSoWG5FBV0eBE",
  },
  {
    id: "rocketseat-nlw-expert-react",
    title: { pt: "NLW Expert React", en: "NLW Expert React" },
    issuer: "Rocketseat",
    issueDate: "2024",
    category: "frontend-fullstack",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    featured: true,
    description: {
      pt: "Trilha intensiva de desenvolvimento front-end moderno focada na criação de aplicações web interativas com React, TypeScript e Tailwind CSS, aplicando componentização, gerenciamento de estado, boas práticas de acessibilidade e integrações com APIs.",
      en: "Intensive modern front-end development track focused on building interactive web applications with React, TypeScript, and Tailwind CSS, applying componentization, state management, accessibility best practices, and API integrations.",
    },
    credentialUrl:
      "https://www.linkedin.com/in/rogervalentim33/overlay/Certifications/874103240/treasury/?profileId=ACoAACteqzMBX6fL91KdHzKtOljSoWG5FBV0eBE",
  },
  {
    id: "fcc-js-algorithms",
    title: {
      pt: "JavaScript Algorithms and Data Structures",
      en: "JavaScript Algorithms and Data Structures",
    },
    issuer: "freeCodeCamp",
    issueDate: "2024",
    description: {
      pt: "Certificação de 300 horas focada nos fundamentos de JavaScript (ES6+), algoritmos e estruturas de dados, abrangendo Programação Orientada a Objetos (POO), Programação Funcional, Regex, depuração e projetos práticos de lógica.",
      en: "300-hour certification focused on JavaScript (ES6+) fundamentals, algorithms, and data structures, covering Object-Oriented Programming (OOP), Functional Programming, Regex, debugging, and practical logic projects.",
    },
    category: "software-engineering",
    skills: ["JavaScript (ES6+)", "Algorithms", "Data Structures"],
    featured: true,
    credentialUrl:
      "https://www.freecodecamp.org/certification/fcc9ce5c325-44c1-4089-ae4f-ad98b95466aa/javascript-algorithms-and-data-structures-v8",
  },
  {
    id: "alura-imersao-ia-2024",
    title: {
      pt: "Imersão Inteligência Artificial",
      en: "Artificial Intelligence Immersion",
    },
    issuer: "Alura",
    issueDate: "2024",
    category: "ai-agents",
    skills: ["Inteligência Artificial", "LLMs"],
    featured: false,
    credentialUrl:
      "https://www.linkedin.com/in/rogervalentim33/overlay/Certifications/400737883/treasury/?profileId=ACoAACteqzMBX6fL91KdHzKtOljSoWG5FBV0eBE",
    description: {
      pt: "Programa intensivo focado nos fundamentos da Inteligência Artificial Generativa e Modelos de Linguagem de Grande Escala (LLMs), abrangendo engenharia de prompt, integração com APIs de IA e desenvolvimento prático de aplicações inteligentes.",
      en: "Intensive program focused on the fundamentals of Generative Artificial Intelligence and Large Language Models (LLMs), covering prompt engineering, AI API integration, and hands-on development of intelligent applications.",
    },
  },
  {
    id: "digital-house-fullstack",
    title: {
      pt: "Desenvolvedor Web Full Stack",
      en: "Full Stack Web Developer",
    },
    issuer: "Digital House Brasil",
    issueDate: "2022-09",
    category: "frontend-fullstack",
    skills: [
      "Desenvolvimento Front-End",
      "GitHub",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
    ],
    description: {
      pt: "Formação completa em desenvolvimento web full stack, abrangendo desde a construção de interfaces responsivas com HTML5, CSS3 e JavaScript até o desenvolvimento de servidores, APIs REST e integração com bancos de dados utilizando Node.js e versionamento com GitHub.",
      en: "Comprehensive full-stack web development program covering everything from building responsive interfaces with HTML5, CSS3, and JavaScript to developing servers, REST APIs, and database integrations using Node.js and version control with GitHub.",
    },
    credentialUrl:
      "https://www.linkedin.com/in/rogervalentim33/overlay/Certifications/2026686226/treasury/?profileId=ACoAACteqzMBX6fL91KdHzKtOljSoWG5FBV0eBE",
    featured: true,
  },
  {
    id: "linkedin-excel-2019",
    title: {
      pt: "Excel 2019: Formação Básica",
      en: "Excel 2019 Essential Training",
    },
    issuer: "LinkedIn Learning",
    issueDate: "2022-04",
    category: "productivity-other",
    skills: ["Microsoft Excel", "Análise de Dados"],
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/0bea75e9dd5f9d262f78f517f448c8b7babfb168f37e14183aed374b66950491?contentTrackingId=mU3ViuiVREqTrw1RlIN9lw%3D%3D&viewName=premium-nav-upsell-text&upsellOrderOrigin=Tracking%3Av1%3Apremium_nav_upsell_text%3ANav%3AIn-Product",
    featured: false,
    description: {
      pt: "Domínio dos recursos essenciais do Excel para organização, cálculo, visualização e análise de dados em planilhas.",
      en: "Mastery of essential Excel features for organizing, calculating, visualizing, and analyzing spreadsheet data.",
    },
  },
];
