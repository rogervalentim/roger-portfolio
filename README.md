# Portfólio de Roger Valentim

Portfólio profissional voltado a oportunidades de Desenvolvimento Front-End, com React, Next.js, TypeScript e implementação de interfaces fiéis ao Figma.

## Desenvolvimento

- Node.js 20.9 ou superior.
- Instale as dependências com `npm ci`.
- Execute `npm run dev` e abra http://localhost:3000.
- Validação: `npm run lint`, `npm run typecheck` e `npm run build`.
- Para conferir a versão de produção: `npm run start`.

O projeto usa Next.js App Router, React, TypeScript e Tailwind CSS 4. O conteúdo das seções é renderizado no servidor. A stack completa abre em um `dialog` nativo, com um pequeno componente cliente para abrir e fechar a janela, sem dependências adicionais nem expansão do card.

## Conteúdo e links

- `app/data/profile.ts`: perfil, contatos, tecnologias, especialidades e interesses profissionais. A stack foi organizada conforme as informações fornecidas pelo proprietário.
- `app/data/projects.ts`: ordem dos projetos, descrições, tecnologias e funcionalidades.
- `githubUrl` é opcional: preencha apenas com a URL real de cada repositório. Sem esse valor, o link GitHub não é exibido no card.
- O currículo é servido de `public/Roger-Valentim-Curriculo.pdf`.
- As datas de experiência e formação ficam em `app/components/experience.tsx`.

## Identidade visual

A interface mantém o fundo #000319, o destaque #CBACF9, os degradês #04071D → #0C0E23, a fonte Inter, as bordas e os cantos arredondados do projeto original. Os componentes `ActionLink` e `TechBadge` reutilizam esses padrões. As animações de brilho permanecem ativas, respeitando a preferência do sistema por menos movimento.

## SEO

O domínio padrão é https://roger-portfolio-gamma.vercel.app/, confirmado no currículo existente. Ao mudar o domínio, configure `SITE_URL` no ambiente de produção antes de executar o build. O valor precisa ser uma URL HTTP ou HTTPS absoluta.

`app/lib/seo.ts` centraliza o domínio, o título, a descrição e o JSON-LD de ProfilePage/Person. O domínio é compartilhado pelo canonical, Open Graph, Twitter Card, robots e sitemap.

Rotas geradas pelo Next.js:

- `/robots.txt`
- `/sitemap.xml`
- `/opengraph-image`: imagem de compartilhamento em PNG, 1200 × 630.
- `/favicon.ico` e `/icon.svg`: monograma RV nas cores do portfólio.

Deploys com `VERCEL_ENV=preview` recebem `noindex`, robots com bloqueio de rastreamento e sitemap vazio. O sitemap de produção inclui apenas a página real; âncoras de seção não são URLs independentes. Não há datas de atualização fabricadas.

Referências: [metadata do Next.js](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) e [ProfilePage no Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/profile-page).

## Performance e acessibilidade

- Inter carregada por `next/font`, com ajuste de fallback e `display: swap`. O build precisa acessar o Google Fonts; a fonte é servida localmente em produção.
- Imagens com `next/image`, dimensões reservadas, `sizes` responsivos e carregamento tardio fora da área inicial.
- `public/blur.webp` é a versão otimizada do fundo decorativo original `blur.svg`.
- Um único h1, seções nomeadas, cards de projeto como artigos e sequência h2/h3.
- Link para pular a navegação, foco visível, links sociais com nome acessível e decorações ignoradas por leitores de tela.
- O rodapé móvel conserva seu comportamento fixo, com espaço para a navegação por teclado.

## Pendências de conteúdo

O currículo ainda descreve o estágio como “Atualmente”, enquanto o site informa término em 18/05/2026. O PDF também aponta para uma URL diferente do CineVerse. Os dados do site foram preservados; o PDF não foi reescrito. Confirme essas informações antes de atualizar o currículo.

Os links dos repositórios individuais não constavam no projeto. A estrutura está preparada para recebê-los sem URLs fictícias.
