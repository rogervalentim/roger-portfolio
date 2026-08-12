import { Icon, type IconName } from "./ui-icon";
import { Reveal } from "./reveal";

const surface =
  "group relative h-full overflow-hidden rounded-[23px] border border-[#3637497d] bg-linear-to-r from-[#04071D] to-[#0C0E23] transition duration-300 hover:-translate-y-1 hover:border-[#CBACF980] hover:shadow-[0_18px_55px_rgba(112,78,170,0.16)]";

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description
}: {
  eyebrow?: string;
  title: string;
  highlight: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-[780px] text-center">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#CBACF9] md:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-bold leading-[105%] tracking-[-2px] text-white md:text-5xl">
        {title} <span className="text-[#CBACF9]">{highlight}</span>
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-[150%] text-[#C1C2D3] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

const advantages: Array<{
  icon: IconName;
  title: string;
  description: string;
}> = [
  {
    icon: "rocket",
    title: "Desenvolvimento focado em performance",
    description: "Interfaces rápidas, leves e otimizadas para gerar uma experiência melhor."
  },
  {
    icon: "figma",
    title: "Fidelidade ao Figma",
    description: "Transformo layouts em páginas funcionais, responsivas e visualmente fiéis."
  },
  {
    icon: "device",
    title: "Mobile first",
    description: "Experiência consistente do celular ao desktop, sem perder clareza ou impacto."
  },
  {
    icon: "code",
    title: "Código limpo",
    description: "Componentização, organização e uma base fácil de entender, manter e evoluir em equipe."
  }
];

export function WhyHire() {
  return (
    <section className="container pb-[110px] pt-[20px] md:pb-[150px]" id="vantagens">
      <Reveal>
        <SectionHeading
          eyebrow="Contribuição profissional"
          title="O que posso agregar"
          highlight="ao time"
          description="Experiência prática, colaboração e cuidado técnico para apoiar a equipe e entregar interfaces de qualidade."
        />
      </Reveal>
      <div className="mt-[60px] grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {advantages.map((item, index) => (
          <Reveal delay={index * 80} key={item.title}>
            <article className={`${surface} p-7`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#CBACF938] bg-[#10132E] text-[#CBACF9] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(203,172,249,0.2)]">
                <Icon name={item.icon} />
              </div>
              <h3 className="mt-7 text-xl font-bold leading-[120%] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[150%] text-[#C1C2D3]">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const technologyGroups = [
  {
    title: "Front-end",
    icon: "palette" as IconName,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Styled Components",
      "Material UI",
      "Shadcn"
    ]
  },
  {
    title: "Back-end",
    icon: "layers" as IconName,
    technologies: ["Node", "Fastify", "Prisma", "PostgreSQL", "Docker", "REST API"]
  },
  {
    title: "Ferramentas",
    icon: "code" as IconName,
    technologies: ["Git", "GitHub", "Figma", "Vercel", "Netlify", "VS Code"]
  }
];

export function Technologies() {
  return (
    <section className="container py-[90px] md:py-[120px]" id="tecnologias">
      <Reveal>
        <SectionHeading
          eyebrow="Stack & ferramentas"
          title="Tecnologias que levo para o"
          highlight="time"
          description="Uma stack moderna que utilizo para colaborar desde a implementação do layout até os testes e o deploy."
        />
      </Reveal>
      <div className="mt-[60px] grid gap-6 lg:grid-cols-3">
        {technologyGroups.map((group, index) => (
          <Reveal delay={index * 100} key={group.title}>
            <article className={`${surface} p-7 md:p-9`}>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#10132E] text-[#CBACF9]">
                  <Icon className="h-5 w-5" name={group.icon} />
                </span>
                <h3 className="text-2xl font-bold text-white">{group.title}</h3>
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {group.technologies.map((technology) => (
                  <span
                    className="tech-badge rounded-lg border border-[#3637497d] bg-[#10132E] px-3.5 py-2 text-sm font-semibold text-[#E4ECFF]"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const processSteps = [
  ["01", "Recebo o briefing", "Entendo contexto, objetivo, público e critérios de sucesso."],
  ["02", "Analiso o layout", "Mapeio componentes, estados, conteúdo e comportamento."],
  ["03", "Desenvolvo componentes", "Crio uma base organizada, reutilizável e consistente."],
  ["04", "Responsividade", "Ajusto a experiência para cada tamanho de tela."],
  ["05", "Testes", "Reviso fluxos, acessibilidade, performance e detalhes visuais."],
  ["06", "Deploy", "Publico, valido o ambiente e acompanho o resultado final."]
];

export function Process() {
  return (
    <section className="container py-[90px] md:py-[120px]" id="processo">
      <Reveal>
        <SectionHeading
          eyebrow="Da ideia à entrega"
          title="Meu processo de"
          highlight="desenvolvimento"
          description="Um fluxo simples e transparente para reduzir retrabalho e manter o foco na qualidade da entrega."
        />
      </Reveal>
      <div className="relative mt-[64px] grid gap-5 md:grid-cols-2 xl:grid-cols-6">
        <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-linear-to-r from-transparent via-[#CBACF970] to-transparent xl:block" />
        {processSteps.map(([number, title, description], index) => (
          <Reveal delay={index * 90} key={number}>
            <article className="group relative h-full rounded-[20px] border border-[#3637497d] bg-[#070A22]/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#CBACF980]">
              <span className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-full border border-[#CBACF966] bg-[#10132E] text-sm font-bold text-[#CBACF9] shadow-[0_0_26px_rgba(203,172,249,0.12)]">
                {number}
              </span>
              <h3 className="mt-6 text-base font-bold leading-[125%] text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-[150%] text-[#C1C2D3]">
                {description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const principles: Array<{
  icon: IconName;
  title: string;
  description: string;
}> = [
  {
    icon: "gauge",
    title: "Performance",
    description: "Priorizo velocidade de carregamento, estabilidade visual e boas práticas."
  },
  {
    icon: "users",
    title: "UX",
    description: "Construo interfaces intuitivas, acessíveis e fáceis de navegar."
  },
  {
    icon: "layers",
    title: "Escalabilidade",
    description: "Organizo componentes reutilizáveis para facilitar manutenção, evolução e colaboração."
  },
  {
    icon: "search",
    title: "SEO",
    description: "Preparo a estrutura técnica e o conteúdo para posicionamento orgânico."
  }
];

export function ProductThinking() {
  return (
    <section className="container py-[90px] md:py-[120px]" id="como-penso">
      <Reveal>
        <SectionHeading
          eyebrow="Minha forma de trabalhar"
          title="Como contribuo no"
          highlight="desenvolvimento"
          description="Tomo decisões pensando na experiência do usuário, na qualidade do código e na colaboração com a equipe."
        />
      </Reveal>
      <div className="mt-[60px] grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {principles.map((principle, index) => (
          <Reveal delay={index * 80} key={principle.title}>
            <article className={`${surface} p-7`}>
              <Icon className="h-8 w-8 text-[#CBACF9]" name={principle.icon} />
              <h3 className="mt-8 text-2xl font-bold text-white">{principle.title}</h3>
              <p className="mt-3 text-sm leading-[150%] text-[#C1C2D3]">
                {principle.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const results = [
  "Landing pages responsivas",
  "SEO implementado",
  "Componentização",
  "Performance otimizada",
  "Integração com APIs",
  "Código organizado"
];

export function Results() {
  return (
    <section className="container py-[90px] md:py-[120px]" id="resultados">
      <div className={`${surface} px-6 py-12 md:px-12 md:py-14`}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#CBACF9]">
                Competências na prática
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[105%] tracking-[-2px] text-white md:text-5xl">
                Competências aplicadas em <span className="text-[#CBACF9]">projetos reais</span>
              </h2>
              <p className="mt-5 max-w-[500px] leading-[150%] text-[#C1C2D3]">
                Conhecimentos que aplico no dia a dia, da estrutura do código à experiência final de quem acessa.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {results.map((result, index) => (
              <Reveal delay={index * 70} key={result}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-[#36374970] bg-[#10132E]/75 px-4 py-4 text-[#E4ECFF] transition hover:border-[#CBACF970]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CBACF91f] text-[#CBACF9]">
                    <Icon className="h-4 w-4" name="check" />
                  </span>
                  <span className="text-sm font-medium">{result}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  ["palette", "Desenvolvimento de landing pages"],
  ["device", "Responsividade"],
  ["search", "SEO técnico"],
  ["layers", "Integração com APIs"],
  ["test", "Correção de bugs"],
  ["code", "Manutenção de aplicações"],
  ["gauge", "Otimização de performance"]
] as Array<[IconName, string]>;

export function ProfessionalCapabilities() {
  return (
    <section className="container py-[90px] md:py-[120px]" id="atuacao">
      <Reveal>
        <SectionHeading
          eyebrow="Experiência prática"
          title="Atuação em"
          highlight="desenvolvimento"
          description="Competências aplicadas em projetos profissionais e pessoais, com atenção constante à qualidade da interface."
        />
      </Reveal>
      <div className="mt-[60px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {capabilities.map(([icon, title], index) => (
          <Reveal delay={index * 65} key={title}>
            <article className={`${surface} flex min-h-[150px] flex-col justify-between p-6`}>
              <Icon className="h-7 w-7 text-[#CBACF9]" name={icon} />
              <h3 className="mt-7 text-lg font-bold leading-[125%] text-white">
                {title}
              </h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="container py-[90px] md:py-[120px]" id="depoimentos">
      <Reveal>
        <SectionHeading
          eyebrow="Confiança se constrói"
          title="O que dizem sobre meu"
          highlight="trabalho"
          description="A seção está preparada para receber recomendações reais de pessoas e equipes com quem trabalhei."
        />
      </Reveal>
      <Reveal className="mx-auto mt-[60px] max-w-[780px]">
        <div className={`${surface} p-8 md:p-10`}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#CBACF94d] bg-[#10132E] text-[#CBACF9]">
              <Icon className="h-7 w-7" name="sparkles" />
            </span>
            <div>
              <p className="text-lg font-semibold leading-[150%] text-white">
                Depoimentos verificados serão publicados aqui.
              </p>
              <p className="mt-2 text-sm leading-[150%] text-[#C1C2D3]">
                Prefiro apresentar referências autênticas a preencher este espaço com uma recomendação genérica.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
