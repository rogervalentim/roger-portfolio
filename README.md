# Portfólio — Roger Valentim

Portfólio profissional voltado a oportunidades em Desenvolvimento Front-End e Engenharia de Software. A aplicação apresenta projetos, experiência, certificações e informações de contato em uma interface bilíngue, responsiva e orientada a desempenho.

Construído com Next.js App Router, React, TypeScript e Tailwind CSS 4, com Server Components, metadados técnicos centralizados, acessibilidade por padrão e implementação fiel ao design.

[![Next.js](https://img.shields.io/badge/Next.js-16.0.10-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Visitar-10B981?style=for-the-badge)](https://roger-portfolio-gamma.vercel.app/)

## Destaques de Arquitetura & Engenharia

- **Renderização & Performance:** arquitetura baseada no Next.js App Router com React Server Components, fontes otimizadas via `next/font/google` (`DM Sans` e `JetBrains Mono`, ambas com `display: swap`) e mídia otimizada com `next/image` em assets estáticos e com carregamento tardio fora da área inicial.
- **UI & Design System:** estilização com Tailwind CSS 4 e tokens visuais consistentes (`#0A0A0B` como fundo principal e `#10B981` como destaque). Componentes reutilizáveis como `ActionLink`, `ActionButton`, `TechBadge` e `SectionHeading`; estudos de caso em um elemento `<dialog>` nativo, sem dependências pesadas, e animações condicionadas por `prefers-reduced-motion`.
- **Internacionalização (i18n):** rotas localizadas em `/pt` e `/en`, geradas pelo App Router. Traduções de navegação, interface e conteúdo ficam centralizadas em `app/i18n.ts`, com metadados, canonical e `alternates.languages` configurados para `pt-BR` e `en-US`.
- **SEO Técnico & Metadados Dinâmicos:** domínio e dados estruturados centralizados em `app/lib/seo.ts`, com schema JSON-LD `ProfilePage`/`Person`, `/sitemap.xml`, `/robots.txt`, imagem Open Graph de 1200 × 630 e canonical por localidade. Deploys identificados pela Vercel como preview recebem `noindex` e bloqueio por robots.
- **Acessibilidade (a11y):** hierarquia semântica com um `h1`, seções em `h2`, cards e subseções em `h3`, projetos como `<article>` e skip link para o conteúdo principal. Estados de foco visíveis, nomes acessíveis em ações e navegação completa por teclado estão preservados no layout.

## Projetos em Destaque

| Projeto | Breve descrição | Stack principal | Links |
| --- | --- | --- | --- |
| [CineVerse](https://movies-next-seven.vercel.app/) | Catálogo de filmes e séries com busca, destaques e páginas de detalhe alimentadas pela API do TMDB. | Next.js, TypeScript, Tailwind CSS, TanStack Query | [Código](https://github.com/rogervalentim/movies-next) |
| [FoodDelivery UI](https://ifood-fsw.vercel.app/) | Fluxo completo de pedido: restaurantes, cardápios, carrinho e resumo antes do checkout. | Next.js, TypeScript, Prisma, Tailwind CSS | [Código](https://github.com/rogervalentim/ifood-fsw) |
| [Evogym](https://gym-app-mocha.vercel.app/) | Landing page de academia com programas, provas sociais e formulário de contato. | React.js, TypeScript, Tailwind CSS | [Código](https://github.com/rogervalentim/gym_app) |
| [CommerceFlow](https://blog-28ma.vercel.app/) | Landing page de conversão para uma plataforma de lojas online, com planos, benefícios e CTA. | Next.js, TypeScript, Tailwind CSS | [Código](https://github.com/rogervalentim/blog) |
| [Panto Furniture](https://panto-funiture.vercel.app/) | Vitrine de móveis em HTML, CSS e JavaScript puro, com catálogo por categorias. | HTML5, CSS3, JavaScript | [Código](https://github.com/rogervalentim/panto-funiture) |
| [Green Bank](https://green-bank-pied.vercel.app/) | Landing page institucional de banco digital com benefícios, depoimentos e FAQ. | Next.js, TypeScript, Tailwind CSS | [Código](https://github.com/rogervalentim/green-bank) |

## Estrutura do Projeto

```text
app/
├── data/
│   ├── profile.ts       # Dados pessoais, contatos, stack técnica e especialidades
│   └── projects.ts      # Catálogo de projetos, estudos de caso, tags e links
├── lib/
│   └── seo.ts           # Domínio, metadados, JSON-LD e controle de preview
├── components/          # Componentes de interface, filtros e diálogo de estudo de caso
├── site/                # Seções da página: Header, Hero, About, Projects e Footer
├── [locale]/            # Rotas localizadas /pt e /en
├── sitemap.ts           # Geração dinâmica do sitemap
├── robots.ts            # Regras de indexação para produção e preview
└── opengraph-image.tsx  # Imagem social 1200 × 630
public/
├── projects/            # Capturas dos projetos
├── blur.webp            # Asset decorativo otimizado
├── curriculo-roger-valentim.pdf
└── curriculo-roger-valentim-en.pdf
```

## Como Executar Localmente

**Pré-requisitos:** Node.js `>= 20.9` e npm.

```bash
git clone https://github.com/rogervalentim/roger-portfolio.git
cd roger-portfolio
npm ci
npm run dev
```

A aplicação estará disponível em `http://localhost:3000` e redirecionará `/` para `/pt`.

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

---

- **Live Demo:** [https://roger-portfolio-gamma.vercel.app/](https://roger-portfolio-gamma.vercel.app/)
- **GitHub:** [github.com/rogervalentim](https://github.com/rogervalentim)
- **LinkedIn:** [linkedin.com/in/rogervalentim33](https://www.linkedin.com/in/rogervalentim33)
