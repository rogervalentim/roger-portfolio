import { Icon } from "./ui-icon";

const trustSignals = [
  "Experiência profissional em Front-end",
  "React • Next.js • TypeScript",
  "Disponível para contratação",
  "São Paulo • Remoto / Híbrido"
];

export const Hero = () => {
  return (
    <section className="pb-20 pt-12 md:pb-[156px] md:pt-[92px]" id="inicio">
      <div className="container flex flex-col items-center justify-center">
        <p className="text-center text-[12px] uppercase leading-[120%] tracking-[0.25em] text-[rgb(228,236,255)] md:text-[16px]">
          Desenvolvedor Front-End • Disponível para oportunidades
        </p>

        <h1 className="mt-5 w-full max-w-[938px] text-center text-5xl font-bold leading-none text-white md:text-7xl md:leading-[100%] md:tracking-[-3.6px]">
          Pronto para contribuir em{" "}
          <span className="text-[#CBACF9]">
            times que criam experiências digitais
          </span>
        </h1>

        <p className="mt-[30px] max-w-[750px] text-center text-[16px] leading-normal text-[#E4ECFF] md:text-2xl md:leading-[120%]">
          Olá! Sou o Roger, Desenvolvedor Front-End de São Paulo, com experiência
          prática em interfaces responsivas, SEO e performance. Busco uma oportunidade
          para colaborar, aprender e crescer junto com a equipe.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3" aria-label="Destaques profissionais">
          {trustSignals.map((signal) => (
            <span
              className="flex items-center gap-2 text-xs font-medium text-[#C1C2D3] md:text-sm"
              key={signal}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#CBACF91f] text-[#CBACF9]">
                <Icon className="h-3.5 w-3.5" name="check" />
              </span>
              {signal}
            </span>
          ))}
        </div>

        <div className="border-header mt-[34px] w-full rounded-[13px] md:w-[256px]">
          <a
            aria-label="Ver projetos de Roger Valentim"
            className="flex h-[66px] w-full items-center justify-center gap-2.5 rounded-[13px] bg-linear-to-r from-[#161A31] to-[#06091F] text-[18px] font-medium leading-[120%] tracking-[-0.48px] text-white transition-all duration-300 hover:from-[#1B2B6B] hover:to-[#0A0F3A] md:w-[256px]"
            href="#projetos"
            title="Ver meus projetos"
          >
            Ver meus projetos
            <svg aria-hidden="true" fill="#ffffff" height="20" viewBox="0 0 256 256" width="20">
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
