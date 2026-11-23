import type { ProjectCardProps, TimelineItem } from "../types";

// Conteúdo e URLs do portfólio e do currículo. Adicione githubUrl apenas
// quando o endereço do repositório correspondente estiver confirmado.
export const projects: ProjectCardProps[] = [
  {
    id: "cineverse",
    title: { pt: "CineVerse", en: "CineVerse" },
    kicker: { pt: "Descoberta de filmes e séries", en: "Movie & TV discovery" },
    image: "/projects/cineverse-1.png",
    link: "https://movies-next-seven.vercel.app/",
    description: {
      pt: "Catálogo de filmes e séries com busca, destaques e páginas de detalhe, alimentado pela API do TMDB.",
      en: "A movie and TV catalog with search, spotlight rows and detail pages, powered by the TMDB API.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    challenge: {
      pt: "A TMDB limita requisições e responde a partir de outra região: sem cache, cada navegação entre listas e detalhes gastava cota e devolvia telas vazias por alguns instantes.",
      en: "TMDB rate-limits requests and answers from another region: without a cache, every hop between lists and detail pages burned quota and returned blank screens for a moment.",
    },
    solution: {
      pt: "TanStack Query com staleTime por tipo de recurso (catálogo e detalhes expiram em janelas diferentes), query keys derivadas da rota e Tipagem dos payloads da TMDB em tipos próprios, para que só o que a UI usa chegue aos componentes.",
      en: "TanStack Query with a staleTime per resource type (catalog and details expire on different windows), route-derived query keys and TMDB payloads typed into my own models, so components only receive what they render.",
    },
    uiDecisions: {
      pt: "Grades com proporção fixa para evitar salto de layout quando as capas chegam, skeletons no lugar de spinner e busca com debounce que mantém o resultado anterior na tela durante a nova requisição.",
      en: "Fixed-ratio grids so posters do not shift the layout when they arrive, skeletons instead of spinners, and a debounced search that keeps the previous results on screen while the next request runs.",
    },
    highlights: {
      pt: [
        "Cache e sincronização com TanStack Query",
        "Estados de carregamento, vazio e erro tratados por rota",
        "Busca com debounce sobre a API do TMDB",
      ],
      en: [
        "Caching and synchronization with TanStack Query",
        "Loading, empty and error states per route",
        "Debounced search over the TMDB API",
      ],
    },
    githubUrl: "https://github.com/rogervalentim/movies-next",
  },
  {
    id: "food-delivery",
    title: { pt: "FoodDelivery UI", en: "FoodDelivery UI" },
    kicker: {
      pt: "Plataforma de pedidos e carrinho",
      en: "Ordering platform & cart",
    },
    image: "/projects/ifood.jpg",
    link: "https://ifood-fsw.vercel.app/",
    description: {
      pt: "Fluxo de pedido completo: restaurantes, cardápios, montagem do carrinho e resumo antes do checkout.",
      en: "A complete ordering flow: restaurants, menus, cart building and an order summary before checkout.",
    },
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    challenge: {
      pt: "O carrinho é estado global atravessando várias telas: somar itens, aplicar quantidade e refletir o total em três lugares ao mesmo tempo, sem re-renderizar a lista inteira de restaurantes a cada clique.",
      en: "The cart is global state crossing several screens: adding items, applying quantities and reflecting totals in three places at once, without re-rendering the whole restaurant list on every click.",
    },
    solution: {
      pt: "Modelagem do pedido em Prisma (restaurante, item, quantidade e preço unitário) e estado do carrinho tipado com ações explícitas de adicionar, remover e alterar quantidade, derivando subtotal e total em vez de armazená-los.",
      en: "Order modelling in Prisma (restaurant, item, quantity and unit price) plus typed cart state with explicit add, remove and change-quantity actions, deriving subtotal and total instead of storing them.",
    },
    uiDecisions: {
      pt: "Cada produto dá feedback imediato na própria linha (contador e botão alterado), o resumo fica fixo no mobile para o total nunca sumir de vista e o contraste das ações segue AA sobre fundo escuro.",
      en: "Each product gives feedback on its own row (counter and button change state), the summary stays pinned on mobile so the total never leaves the screen, and action contrast follows AA on dark surfaces.",
    },
    highlights: {
      pt: [
        "Carrinho global com totais derivados",
        "Modelagem relacional com Prisma",
        "Fluxo mobile-first do cardápio ao resumo",
      ],
      en: [
        "Global cart with derived totals",
        "Relational modelling with Prisma",
        "Mobile-first flow from menu to summary",
      ],
    },
    githubUrl: "https://github.com/rogervalentim/ifood-fsw",
  },
  {
    id: "evogym",
    title: { pt: "Evogym", en: "Evogym" },
    kicker: {
      pt: "Landing de academia e programas",
      en: "Gym & programs landing",
    },
    image: "/projects/evogym.jpg",
    link: "https://gym-app-mocha.vercel.app/",
    description: {
      pt: "Página de apresentação para academia, com programas, provas sociais e formulário de contato.",
      en: "A gym presentation page with programs, social proof and a contact form.",
    },
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    challenge: {
      pt: "Seções com blocos alternados de imagem e texto costumam acumular CSS duplicado e quebrar a leitura em telas médias.",
      en: "Sections with alternating image and text blocks tend to pile up duplicated CSS and break their rhythm on mid-size screens.",
    },
    solution: {
      pt: "Componentização por seção com um único componente de bloco reversível, escala tipográfica controlada por breakpoints e espaçamento em variáveis, em vez de valores soltos por seção.",
      en: "Section-level components with a single reversible block component, a typographic scale controlled by breakpoints and spacing kept in variables instead of loose values per section.",
    },
    uiDecisions: {
      pt: "A ordem imagem/texto é definida por propriedade, não por CSS duplicado, o que mantém a leitura no mobile igual à do desktop; os alvos de clique têm no mínimo 44 px.",
      en: "Image/text order is a prop, not duplicated CSS, so mobile reading matches desktop; every tap target is at least 44 px.",
    },
    highlights: {
      pt: [
        "Componente de bloco reutilizável nas seções",
        "Escala tipográfica e espaçamento sistematizados",
        "Alvos de toque de 44 px",
      ],
      en: [
        "One reusable block component across sections",
        "Systematized type scale and spacing",
        "44 px tap targets",
      ],
    },
    githubUrl: "https://github.com/rogervalentim/gym_app",
  },
  {
    id: "commerceflow",
    title: { pt: "CommerceFlow", en: "CommerceFlow" },
    kicker: {
      pt: "Landing page para SaaS de e-commerce",
      en: "E-commerce SaaS landing page",
    },
    image: "/projects/blog.png",
    link: "https://blog-28ma.vercel.app/",
    description: {
      pt: "Landing page de conversão para uma plataforma de lojas online, com planos, benefícios e CTA recorrente.",
      en: "A conversion landing page for an online-store platform, with plans, benefits and a recurring CTA.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    challenge: {
      pt: "Landing pages de conversão pesam com imagens de produto: sem controle, o LCP e o CLS sofrem justamente na primeira dobra, que decide se o visitante fica.",
      en: "Conversion landing pages get heavy with product images: unchecked, LCP and CLS suffer on the very first screen that decides whether a visitor stays.",
    },
    solution: {
      pt: "Conteúdo renderizado no servidor com Next.js, next/image com dimensões reservadas e prioridade apenas no visual da primeira dobra, e o restante das mídias em lazy loading.",
      en: "Server-rendered content with Next.js, next/image with reserved dimensions and priority only on the hero visual, with the remaining media lazy-loaded.",
    },
    uiDecisions: {
      pt: "Uma única ação principal repetida ao longo da página, hierarquia de títulos que permite leitura em diagonal e contraste verificado nas seções de preço.",
      en: "A single primary action repeated down the page, a heading hierarchy that supports diagonal scanning and checked contrast on the pricing sections.",
    },
    highlights: {
      pt: [
        "Renderização no servidor com Next.js",
        "Imagens com dimensões reservadas (sem CLS)",
        "Hierarquia de leitura e CTA único",
      ],
      en: [
        "Server rendering with Next.js",
        "Images with reserved dimensions (no CLS)",
        "Readable hierarchy with one CTA",
      ],
    },
    githubUrl: "https://github.com/rogervalentim/blog",
  },
  {
    id: "panto-furniture",
    title: { pt: "Panto Furniture", en: "Panto Furniture" },
    kicker: {
      pt: "Vitrine de móveis, sem framework",
      en: "Furniture storefront, no framework",
    },
    image: "/projects/panto.jpg",
    link: "https://panto-funiture.vercel.app/",
    description: {
      pt: "Vitrine de móveis em HTML, CSS e JavaScript puro, com catálogo por categorias e detalhe do produto.",
      en: "A furniture storefront in plain HTML, CSS and JavaScript, with category catalog and product detail.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript"],
    challenge: {
      pt: "Fazer um catálogo filtrável e um detalhe de produto sem framework, mantendo a URL compartilhável e o botão voltar do navegador funcionando.",
      en: "Building a filterable catalog and a product detail without a framework, while keeping shareable URLs and the browser back button working.",
    },
    solution: {
      pt: "Estado da vitrine refletido na URL via History API, renderização por template strings com escape dos dados do produto e CSS organizado em camadas (base, componentes, utilitários).",
      en: "Storefront state mirrored into the URL through the History API, rendering with escaped template strings and CSS organized in layers (base, components, utilities).",
    },
    uiDecisions: {
      pt: "Grade que reflui de 1 para 2 e 3 colunas sem media query por item, imagens com proporção reservada e transições curtas para o filtro não parecer travado.",
      en: "A grid that reflows from one to two and three columns without per-item media queries, images with reserved ratio and short transitions so filtering does not feel stuck.",
    },
    highlights: {
      pt: [
        "Filtro de catálogo com estado na URL",
        "History API para navegação voltar/avançar",
        "CSS em camadas, sem dependências",
      ],
      en: [
        "Catalog filter with state in the URL",
        "History API for back/forward navigation",
        "Layered CSS with no dependencies",
      ],
    },
    githubUrl: "https://github.com/rogervalentim/panto-funiture",
  },
  {
    id: "green-bank",
    title: { pt: "Green Bank", en: "Green Bank" },
    kicker: { pt: "Banco digital e cartões", en: "Digital bank & cards" },
    image: "/projects/green-bank.png",
    link: "https://green-bank-pied.vercel.app/",
    description: {
      pt: "Landing page institucional para banco digital, com benefícios, depoimentos e perguntas frequentes.",
      en: "An institutional landing page for a digital bank, with benefits, testimonials and frequently asked questions.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    challenge: {
      pt: "Um FAQ e uma seção de depoimentos precisam ser acessíveis por teclado e leitores de tela, sem carregar o JavaScript de uma biblioteca inteira de acordeão.",
      en: "A FAQ and a testimonials section must work with keyboard and screen readers, without shipping a whole accordion library's JavaScript.",
    },
    solution: {
      pt: "Acordeão nativo com details/summary estilizado, mantendo a semântica e a navegação por teclado do navegador, e conteúdo estático renderizado no servidor.",
      en: "A native accordion built on styled details/summary, keeping the browser's semantics and keyboard navigation, with static content rendered on the server.",
    },
    uiDecisions: {
      pt: "Cartões de crédito com proporção real e sombra em uma única camada, depoimentos com citação semântica e um foco visual que não depende só de cor.",
      en: "Credit cards at real ratio with a single-layer shadow, testimonials with semantic quotes, and focus styling that does not rely on colour alone.",
    },
    highlights: {
      pt: [
        "Acordeão nativo, sem biblioteca extra",
        "Conteúdo estático e indexável",
        "Foco por teclado preservado",
      ],
      en: [
        "Native accordion, no extra library",
        "Static, indexable content",
        "Keyboard focus preserved",
      ],
    },
    githubUrl: "https://github.com/rogervalentim/green-bank",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "prime-web",
    kind: { pt: "Experiência", en: "Experience" },
    title: { pt: "Estagiário Front-End", en: "Front-End Intern" },
    org: { pt: "Prime Web", en: "Prime Web" },
    period: { pt: "OUT 2024 — MAI 2026", en: "OCT 2024 — MAY 2026" },
    summary: {
      pt: [
        "Implementei interfaces responsivas a partir de protótipos do Figma com HTML, CSS, JavaScript e PHP, acompanhando a entrega até produção.",
        "Trabalhei SEO on-page e Core Web Vitals: medi, priorizei e verifiquei ganhos de carregamento em páginas reais.",
        "Investiguei e corrigi bugs em ambiente de produção, lendo relatórios de desempenho e analisando o impacto antes de alterar o código.",
      ],
      en: [
        "Shipped responsive interfaces from Figma prototypes with HTML, CSS, JavaScript and PHP, following each one through to production.",
        "Worked on on-page SEO and Core Web Vitals: measured, prioritized and verified loading gains on live pages.",
        "Investigated and fixed production bugs, reading performance reports and measuring impact before touching the code.",
      ],
    },
  },
  {
    id: "anhanguera",
    kind: { pt: "Formação", en: "Education" },
    title: {
      pt: "Bacharelado em Engenharia de Software",
      en: "B.Sc. in Software Engineering",
    },
    org: { pt: "Anhanguera Educacional", en: "Anhanguera Educacional" },
    period: {
      pt: "SET 2024 — 2028 · 6º semestre",
      en: "SEP 2024 — 2028 · 6th semester",
    },
    summary: {
      pt: [
        "Arquitetura de sistemas, engenharia de requisitos e boas práticas de programação.",
        "Fundamentos de usabilidade, performance e qualidade aplicados ao desenvolvimento web.",
      ],
      en: [
        "Systems architecture, requirements engineering and programming best practices.",
        "Usability, performance and quality fundamentals applied to web development.",
      ],
    },
  },
];
