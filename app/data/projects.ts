import type { ProjectCardProps } from "../types";

// Conteúdo e URLs do portfólio e do currículo. Adicione githubUrl apenas
// quando o endereço do repositório correspondente estiver confirmado.
export const projects: ProjectCardProps[] = [
  {
    id: "cineverse",
    title: "CineVerse",
    image: "/projects/cineverse-1.png",
    link: "https://movies-next-seven.vercel.app/",
    description:
      "Aplicação de filmes e séries com Next.js e TypeScript, integrada à API TMDB e com interface responsiva.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    features: [
      "Busca de filmes e séries",
      "Conteúdos em destaque",
      "Integração com a API TMDB",
    ],
    problem:
      "Centralizar a descoberta de filmes e séries em uma interface rápida, organizada e responsiva.",
    architecture:
      "Next.js com App Router, TypeScript e TanStack Query para cache, sincronização e estados de carregamento das requisições à TMDB.",
    githubUrl: "https://github.com/rogervalentim/movies-next",
    highlights: [
      "Busca e navegação por conteúdo",
      "Cache de dados do servidor",
      "Tratamento de estados de loading e erro",
    ],
  },
  {
    id: "ifood-clone",
    title: "iFood Clone",
    image: "/projects/ifood.jpg",
    link: "https://ifood-fsw.vercel.app/",
    description:
      "Aplicação com Next.js e TypeScript que simula a escolha de refeições, com navegação entre restaurantes e gerenciamento de carrinho.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    features: [
      "Navegação por restaurantes",
      "Cardápios e seleção de produtos",
      "Carrinho de compras",
    ],
    githubUrl: "https://github.com/rogervalentim/ifood-fsw",
  },
  {
    id: "evogym",
    title: "Evogym",
    image: "/projects/evogym.jpg",
    link: "https://gym-app-mocha.vercel.app/",
    description:
      "Interface para o segmento fitness desenvolvida com React e Tailwind CSS, com foco na organização visual e na adaptação a diferentes telas.",
    technologies: ["React.js", "Tailwind CSS"],
    features: [
      "Interface para desktop e mobile",
      "Conteúdo voltado a atividades físicas",
    ],
    githubUrl: "https://github.com/rogervalentim/gym_app",
  },
  {
    id: "blog",
    title: "Landing Page SaaS",
    image: "/projects/blog.png",
    link: "https://blog-28ma.vercel.app/",
    description:
      "Landing page com Next.js e TypeScript para apresentar uma plataforma de lojas online, com hierarquia visual e chamadas para ação.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Apresentação da plataforma",
      "Chamadas para ação",
      "Layout responsivo",
    ],
    githubUrl: "https://github.com/rogervalentim/blog",
  },
  {
    id: "panto-furniture",
    title: "Panto Furniture",
    image: "/projects/panto.jpg",
    link: "https://panto-funiture.vercel.app/",
    description:
      "Interface de loja de móveis construída com HTML, CSS e JavaScript, com catálogo visual e navegação por categorias de produtos.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Categorias de produtos",
      "Apresentação visual do catálogo",
      "Layout responsivo",
    ],
    githubUrl: "https://github.com/rogervalentim/panto-funiture",
  },
  {
    id: "green-bank",
    title: "Green Bank",
    image: "/projects/green-bank.png",
    link: "https://green-bank-pied.vercel.app/",
    description:
      "Landing page para banco digital e serviços de cartão de crédito desenvolvida com Next.js e Tailwind CSS, com foco em hierarquia visual, seções informativas e interface responsiva.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Apresentação de cartões e benefícios",
      "Seções de depoimentos e perguntas frequentes (FAQ)",
      "Layout responsivo",
    ],
    githubUrl: "https://github.com/rogervalentim/green-bank",
  },
];
