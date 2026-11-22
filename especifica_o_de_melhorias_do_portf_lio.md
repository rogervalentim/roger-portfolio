# SPEC.md — Evolução do Portfólio (Roger Valentim)

> **Objetivo:** Transformar o portfólio atual (`Next.js` + `TypeScript` + `Tailwind CSS`) em uma vitrine de alta conversão para recrutadores nacionais e internacionais, garantindo consistência total com o LinkedIn, suporte bilíngue (`PT-BR` / `EN-US`), estudo de caso técnico nos projetos e refinamento visual (UI/UX).
> **Diretriz para IA (GitHub Copilot):** Leia este documento como fonte única de verdade. Implemente cada fase de forma modular, tipada com TypeScript estrito, mantendo a semântica HTML, acessibilidade (WCAG AA) e performance (Core Web Vitals).

---

## 1. Diagnóstico do Estado Atual (`roger-portfolio-gamma.vercel.app`)

### Pontos Fortes Existentes
- **Stack Moderna:** Construído em Next.js (App Router), TypeScript e Tailwind CSS.
- **Boa Estrutura Semântica:** Uso de landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), skip-link (`Pular para o conteúdo`) e modal nativo `<dialog>` para a stack completa.
- **Base Sólida de Conteúdo:** Experiência real como Estagiário Front-End (Prime web), graduação em Engenharia de Software (Anhanguera) e 6 projetos publicados na Vercel.

### Gargalos Identificados (Foco: Recrutadores & UX)
1. **Ausência de Internacionalização (i18n):** Todo o conteúdo e o currículo em PDF estão apenas em `PT-BR`, bloqueando vagas remotas internacionais ou processos seletivos em inglês.
2. **Projetos sem Profundidade Técnica (Falta de Case Studies & Repositórios):** Os cards possuem apenas link para o deploy (`Ver projeto`), sem link para o código-fonte (`GitHub`) e sem explicar *arquitetura, desafios técnicos ou métricas/resultados*.
3. **Alinhamento com LinkedIn & Posicionamento:** O título e copy atuais ("Desenvolvedor Front-End" / "Estagiário") podem ser otimizados para destacar resultados de negócio, métricas de SEO/performance citadas na experiência na Prime web e facilitar o contato direto por e-mail (além do WhatsApp).
4. **Refinamento Visual e Interatividade:** A hierarquia visual pode ganhar mais sofisticação com micro-interações, Bento Grid aprimorado, filtros de projetos por tecnologia e feedback visual mais rico.

---

## 2. Arquitetura de Internacionalização (i18n: PT-BR & EN-US)

### Requisitos Funcionais
- Suporte nativo aos idiomas **`pt`** (Português - Brasil, padrão) e **`en`** (English - US/International).
- Alternador de idioma acessível no `<header>` (ex: `PT | EN` com indicador ativo e `aria-label` descritivo).
- Persistência da escolha do usuário via URL (`/pt`, `/en` com `next-intl` ou roteamento dinâmico `[locale]`) e detecção automática pelo header `Accept-Language`.
- **Currículo Dinâmico por Idioma:**
  - Quando `locale === 'pt'`: baixar `/Roger-Valentim-Curriculo-PT.pdf`.
  - Quando `locale === 'en'`: baixar `/Roger-Valentim-Resume-EN.pdf`.
- **SEO Multilíngue:** Configuração de `alternates.languages` (`hreflang`) no `generateMetadata` do Next.js, além de títulos e descrições traduzidos.

### Estrutura de Arquivos Sugerida (Copilot)
```text
src/
├── messages/
│   ├── pt.json          # Todas as strings da interface, projetos e experiências em PT
│   └── en.json          # Tradução técnica fiel e natural para recrutadores globais
├── i18n/
│   ├── routing.ts       # Configuração de locales ['pt', 'en'] e defaultLocale: 'pt'
│   └── request.ts       # Loader de mensagens
└── app/
    └── [locale]/
        ├── layout.tsx   # Provider de tradução + Metadata dinâmica
        └── page.tsx     # Página principal consumindo useTranslations()
```

---

## 3. Alinhamento Estratégico com LinkedIn & Atração de Recrutadores

### 3.1. Headline e Proposta de Valor (Hero Section)
- **Problema atual:** Foco apenas em execução ("Criação de interfaces modernas, responsivas e fiéis ao Figma").
- **Melhoria:** Destacar impacto, engenharia e stack principal, espelhando a *Headline* e o *Sobre* do LinkedIn:
  - **PT:** `Desenvolvedor Front-End | React, Next.js & TypeScript` — *"Construo aplicações web escaláveis, acessíveis e de alta performance, unindo precisão de design (Figma) à engenharia de software."*
  - **EN:** `Front-End Developer | React, Next.js & TypeScript` — *"I build scalable, accessible, high-performance web applications, bridging Figma design precision with modern software engineering."*
- **Badge de Disponibilidade:** Adicionar indicador visual pulsante discreto (`Disponível para oportunidades` / `Open to work`) com modalidade (Remoto / Híbrido - São Paulo, SP).

### 3.2. Experiência Profissional Orientada a Resultados (Formato XYZ / STAR)
- Refatorar o card da **Prime web (Out/2024 – Mai/2026)** para refletir conquistas mensuráveis (alinhado às *bullet points* do LinkedIn):
  - Substituir texto corrido por **lista de impacto (3 a 4 bullets objetivos)**:
    - *Desenvolvimento e manutenção de interfaces responsivas a partir de protótipos do Figma utilizando HTML, CSS, JavaScript e PHP.*
    - *Otimização técnica de SEO on-page e Core Web Vitals, elevando o ranqueamento orgânico e a velocidade de carregamento.*
    - *Análise de relatórios de desempenho e resolução proativa de bugs em ambiente de produção.*
- **Sincronização de Dados (Single Source of Truth):** Criar um arquivo tipado `src/data/profile.ts` contendo links, experiências, formação (Engenharia de Software - Anhanguera, previsão Jan/2028) e certificações para manter 100% de paridade com o perfil `linkedin.com/in/rogervalentim33`.

### 3.3. Canais de Contato Amigáveis para Recrutadores
- Recrutadores corporativos e tech recruiters frequentemente preferem **E-mail** ou **LinkedIn** ao WhatsApp no primeiro contato.
- **Ação:**
  - Adicionar botão de **Copiar E-mail com um clique** (`Copy email` + toast de confirmação *"E-mail copiado!"*) na Hero e na seção de Contato.
  - Manter WhatsApp e LinkedIn como opções secundárias claras.

---

## 4. Evolução da Seção de Projetos (De "Vitrine" para "Case Studies")

### 4.1. Ações Duplas nos Cards
Cada card de projeto deve exibir claramente:
1. **Live Demo (`Ver projeto` / `Live Demo`)** — link para Vercel.
2. **Código-Fonte (`Código` / `Source Code`)** — link direto para o repositório correspondente em `github.com/rogervalentim/...` (essencial para avaliação técnica de código).

### 4.2. Modal / Drawer de Detalhes Técnicos ("Case Study")
Ao clicar em *"Detalhes técnicos"* / *"Case Study"* no card, abrir um `<dialog>` ou `Sheet` (Radix/shadcn) contendo:
- **O Problema / Objetivo:** O que a aplicação resolve.
- **Decisões de Arquitetura:** Ex: *Uso de TanStack Query para cache e sincronização de estado servidor no CineVerse*; *Modelagem relacional com Prisma no iFood Clone*.
- **Destaques Técnicos:** Responsividade, tipagem estrita, tratamento de erros/loading states (Skeletons).

### 4.3. Filtro Interativo por Tecnologia
- Adicionar barra de filtros acima do grid de projetos: `Todos`, `Next.js`, `React`, `TypeScript`, `Full-Stack / API`.
- Renomear o projeto `"Blog"` para um título mais descritivo da plataforma (ex: *"Landing Page SaaS / E-commerce Platform"*) para evitar parecer um projeto genérico de tutorial.

---

## 5. Refinamento de Design & UI/UX

### 5.1. Sistema Visual e Hierarquia
- **Paleta & Superfícies:** Manter o tema dark moderno, aprimorando o contraste de bordas (`border-white/10` com hover `border-emerald-500/40` ou cor de destaque primária) e profundidade via gradientes radiais sutis.
- **Tipografia:** Combinar fonte sans-serif limpa (`Inter` ou `Plus Jakarta Sans`) para leitura com fonte monospace (`JetBrains Mono` ou `Geist Mono`) para badges de stack, datas e métricas técnicas.
- **Bento Grid na Seção "Sobre":** Reorganizar os cards de *"O que eu faço"*, *"Minha stack"* e *"Foco"* em um grid assimétrico equilibrado, evitando espaços vazios excessivos em telas `xl` (`1280px+`).

### 5.2. Micro-interações e Acessibilidade
- **Motion:** Adicionar animações sutis de entrada (`framer-motion` ou CSS transitions respeitando `prefers-reduced-motion`).
- **Navbar Inteligente:** Destaque automático do link ativo na navegação (`ScrollSpy` via `IntersectionObserver`) conforme o usuário rola a página, além de menu mobile (`Drawer`) otimizado para telas pequenas.
- **Botão de Stack Completa:** Garantir que o gatilho que abre o `<dialog>` de *"Stack completa"* tenha affordance visual clara de botão interativo (`Ver todas as 25+ tecnologias →`) e suporte fechamento via tecla `ESC` e clique no backdrop.

---

## 6. Checklist de Execução (Prompts por Etapa para o GitHub Copilot)

Use esta ordem de implementação no Copilot Chat / Agent Mode:

- [ ] **Etapa 1 (Dados & LinkedIn Sync):** Criar `src/data/portfolio.ts` centralizando projetos (com links do GitHub e detalhes de case study), experiência (bullets orientados a impacto), formação e contatos (incluindo e-mail).
- [ ] **Etapa 2 (Internacionalização):** Instalar e configurar `next-intl` com rotas `/pt` e `/en`, criando `messages/pt.json` e `messages/en.json` e o componente `LanguageSwitcher.tsx` no Header.
- [ ] **Etapa 3 (Design System & Hero):** Refatorar a Hero Section com badge *Open to Work*, headline alinhada ao LinkedIn, botões para CV dinâmico (`PT`/`EN`) e botão de copiar e-mail com feedback visual.
- [ ] **Etapa 4 (Projetos & Case Study Modal):** Atualizar `ProjectCard.tsx` com links duplos (Demo + GitHub), filtro por stack e modal `<ProjectDetailsModal />` com arquitetura e aprendizados.
- [ ] **Etapa 5 (Bento Grid & Experiência):** Refinar o layout da seção *Sobre* (Bento Grid responsivo), melhorar a visibilidade do botão do modal de *Stack Completa* e aplicar bullets de impacto na seção *Experiência*.
- [ ] **Etapa 6 (SEO, OpenGraph & Performance):** Configurar `metadata` dinâmica por idioma, `sitemap.ts`, `robots.ts` e validar pontuação >= 95 no Lighthouse (Performance, Acessibilidade, Best Practices e SEO).