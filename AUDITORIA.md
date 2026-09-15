# Evolução do portfólio — 15/09/2026

## Análise anterior às alterações

Foram analisados os componentes, página, layout, tipos, estilos, configurações, dependências, assets públicos e currículo. A versão publicada também foi conferida visualmente antes das mudanças.

- Arquitetura: Next.js 16.0.10, React 19.2, App Router, TypeScript e Tailwind CSS 4; página única com componentes de servidor.
- Componentes: Header, Hero, About, Projects, ProjectCard, Experience, ExperienceCard, Cta e Footer.
- Identidade: fundo #000319, destaque #CBACF9, textos #E4ECFF/#C1C2D3/#BEC1DD, degradês #04071D → #0C0E23, cantos de 23 px e botões de 13 px. Inter já era carregada, mas o CSS não utilizava sua variável.
- SEO: título e descrição genéricos; ausência de canonical, metadados sociais, sitemap, robots e JSON-LD próprios.
- Semântica: quatro h1, Hero e contato fora do main, decorações anunciadas e links sociais apoiados apenas no atributo title.
- Performance: fundo blur.svg com 1.015.274 bytes, imagens sem sizes e dimensões inconsistentes nas decorações.

## Melhorias implementadas

### Recrutamento

Hero com nome, cargo, stack principal e links para projetos, GitHub, LinkedIn e currículo. Sobre recebeu “O que eu faço”; especialidades, disponibilidade e interesses profissionais foram integrados ao estilo existente. A stack tem cinco tecnologias em destaque e sete grupos em uma janela acessível, sem expandir o card.

CineVerse e iFood Clone aparecem primeiro. Os cinco projetos têm descrições curtas, badges textuais e funcionalidades. Os cards mantêm bordas, degradês, cantos arredondados e imagens inclinadas. O enquadramento destaca a interface, inclusive nas capturas compridas.

Os textos de experiência destacam implementação de Figma, manutenção e interfaces responsivas, com base no currículo. As tecnologias da stack foram organizadas conforme o pedido do proprietário.

### SEO

Título e descrição objetivos, canonical absoluto e metadataBase com domínio confirmado no currículo. Open Graph, Twitter Card, imagem PNG de compartilhamento 1200 × 630, favicon RV, robots.txt e sitemap.xml nativos do Next.js. JSON-LD ProfilePage/Person com nome, profissão, localização, tecnologias e perfis reais.

SITE_URL permite mudar o domínio. Deploys identificados como preview pela Vercel recebem noindex e robots restritivo. O sitemap de produção lista apenas a página real e não inventa datas de atualização.

### Acessibilidade

Um h1, h2 para seções principais, h3 para subseções e cards; todo o conteúdo principal está em main. Navegação nomeada, artigos para projetos/experiência, nomes acessíveis nos links, alt descritivo nas capturas e alt vazio em decorações. Foco visível, atalho para pular a navegação e espaço de rolagem para o rodapé fixo. As animações continuam disponíveis e respeitam prefers-reduced-motion.

### Performance

Nenhuma dependência foi adicionada ao projeto. O conteúdo das seções continua renderizado no servidor. A stack usa um dialog nativo, controlado por um pequeno componente cliente. Inter utiliza corretamente a variável de next/font. Imagens têm sizes responsivos e espaço reservado; as imagens abaixo da área inicial mantêm lazy loading.

O fundo decorativo passou de 1.015.274 bytes em SVG para 58.344 bytes em WebP: redução de 94,3%. O SVG original permanece como referência.

## Validação

- `npm run lint`: aprovado.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado; página e rotas de metadados geradas estaticamente.
- Navegador em 320, 390, 768, 1024 e 1440 px: sem rolagem horizontal ou textos visíveis cortados. A fonte do Hero foi ajustada nas menores larguras.
- Conferência visual de Hero, Sobre, projetos e contato; imagem de compartilhamento renderizada e inspecionada.
- Teclado: o primeiro Tab acessa “Pular para o conteúdo”, Enter transfere o foco ao main e Enter abre/fecha a stack com seus sete grupos.
- HTML: um h1, um main, um canonical, JSON-LD válido e tags Open Graph/Twitter presentes.
- Robots, sitemap, favicon, ícone SVG, imagem social e currículo: HTTP 200, com tipos de conteúdo corretos.
- Âncoras internas com destinos existentes.

### Limite da medição de performance

A medição inicial do Lighthouse móvel, na versão original compilada localmente, registrou performance 82, acessibilidade 100, boas práticas 100 e SEO 100; LCP 3,70 s, CLS 0 e TBT 296,5 ms. Esses resultados são de laboratório, não de visitantes reais.

A nova execução com acesso ampliado não foi autorizada. A alternativa restrita, usando a instalação local, não conseguiu conectar ao Chrome. Portanto, não existe pontuação final comparável nem confirmação quantitativa da variação de Lighthouse/Core Web Vitals. A redução do asset e as verificações de layout foram confirmadas separadamente.

## Informações pendentes

- O currículo mantém o estágio como “Atualmente”, enquanto o site registra término em 18/05/2026. As datas do site foram mantidas; o PDF não foi reescrito.
- O currículo aponta para outro endereço do CineVerse. O link existente no site foi preservado.
- Os repositórios individuais não constavam no código. O campo opcional githubUrl está preparado; links ausentes não são mostrados.
- O build precisa acessar o Google Fonts para obter Inter. As compilações com esse acesso passaram.

## Arquivos alterados

- `README.md`
- `package.json`
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `app/favicon.ico`
- `app/types/index.ts`
- `app/components/about.tsx`
- `app/components/cta.tsx`
- `app/components/experience.tsx`
- `app/components/experience-card.tsx`
- `app/components/footer.tsx`
- `app/components/header.tsx`
- `app/components/hero.tsx`
- `app/components/project-card.tsx`
- `app/components/projects.tsx`

## Arquivos adicionados

- `AUDITORIA.md`
- `app/components/action-link.tsx`
- `app/components/specialties.tsx`
- `app/components/tech-badge.tsx`
- `app/components/technology-stack.tsx`
- `app/components/stack-dialog.tsx`
- `app/data/profile.ts`
- `app/data/projects.ts`
- `app/lib/seo.ts`
- `app/icon.svg`
- `app/opengraph-image.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `public/blur.webp`

## Referências técnicas

- [Next.js: Metadata e imagens Open Graph](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Google Search Central: ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
