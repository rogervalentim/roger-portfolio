import type { ProjectCardProps } from "../types";

// Conteúdo e URLs do portfólio e do currículo. Adicione githubUrl apenas
// quando o endereço do repositório correspondente estiver confirmado.
export const projects: ProjectCardProps[] = [
  {
    id: "cineverse",
    title: "CineVerse",
    image: "/projects/cineverse-1.png",
    link: "https://movies-next-seven.vercel.app/",
    description: "Aplicação de filmes e séries com Next.js e TypeScript, integrada à API TMDB e com interface responsiva.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    features: ["Busca de filmes e séries", "Conteúdos em destaque", "Integração com a API TMDB"],
  },
  {
    id: "ifood-clone",
    title: "iFood Clone",
    image: "/projects/ifood.jpg",
    link: "https://ifood-fsw.vercel.app/",
    description: "Aplicação com Next.js e TypeScript que simula a escolha de refeições, com navegação entre restaurantes e gerenciamento de carrinho.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    features: ["Navegação por restaurantes", "Cardápios e seleção de produtos", "Carrinho de compras"],
  },
  {
    id: "evogym",
    title: "Evogym",
    image: "/projects/evogym.jpg",
    link: "https://gym-app-mocha.vercel.app/",
    description: "Interface para o segmento fitness desenvolvida com React e Tailwind CSS, com foco na organização visual e na adaptação a diferentes telas.",
    technologies: ["React.js", "Tailwind CSS"],
    features: ["Interface para desktop e mobile", "Conteúdo voltado a atividades físicas"],
  },
  {
    id: "blog",
    title: "Blog",
    image: "/projects/blog.jpg",
    link: "https://blog-28ma.vercel.app/",
    description: "Landing page com Next.js e TypeScript para apresentar uma plataforma de lojas online, com hierarquia visual e chamadas para ação.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Apresentação da plataforma", "Chamadas para ação", "Layout responsivo"],
  },
  {
    id: "panto-furniture",
    title: "Panto Furniture",
    image: "/projects/panto.jpg",
    link: "https://panto-funiture.vercel.app/",
    description: "Interface de loja de móveis construída com HTML, CSS e JavaScript, com catálogo visual e navegação por categorias de produtos.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: ["Categorias de produtos", "Apresentação visual do catálogo", "Layout responsivo"],
  },
];
