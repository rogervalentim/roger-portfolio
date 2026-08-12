import { Icon, type IconName } from "./ui-icon";
import { Reveal } from "./reveal";

const actions: Array<{
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
}> = [
  { label: "Ver currículo", href: "/Roger-Valentim-Curriculo.pdf", icon: "file", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rogervalentim33", icon: "linkedin", external: true },
  { label: "GitHub", href: "https://www.github.com/rogervalentim", icon: "github", external: true },
  { label: "Enviar e-mail", href: "mailto:valentim.roger33@gmail.com", icon: "mail" },
  { label: "WhatsApp", href: "https://wa.me/5511976069285", icon: "whatsapp", external: true }
];

export const Cta = () => {
  return (
    <section className="container pb-[140px] pt-[100px] md:pb-[190px] md:pt-[130px]" id="contato">
      <Reveal>
        <div className="cta-glow relative overflow-hidden rounded-[28px] border border-[#CBACF94d] bg-linear-to-r from-[#04071D] to-[#0C0E23] px-6 py-14 text-center shadow-[0_28px_90px_rgba(80,42,140,0.2)] md:px-12 md:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-3/4 -translate-x-1/2 rounded-full bg-[#CBACF91f] blur-[70px]" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CBACF9]">
              Disponível para oportunidades
            </p>
            <h2 className="mx-auto mt-5 max-w-[820px] text-4xl font-bold leading-[105%] tracking-[-2px] text-white md:text-6xl">
              Busco meu próximo <span className="text-[#CBACF9]">desafio profissional</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-base leading-[155%] text-[#C1C2D3] md:text-lg">
              Estou buscando uma oportunidade como Desenvolvedor Front-end Jr ou Full Stack Jr,
              onde eu possa aplicar minha experiência, colaborar em projetos reais e evoluir junto com o time.
            </p>

            <div className="mx-auto mt-10 flex max-w-[900px] flex-wrap justify-center gap-3">
              {actions.map((action) => (
                <a
                  aria-label={action.label}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#3637497d] bg-[#10132E]/85 px-5 py-3 text-sm font-semibold text-[#E4ECFF] transition duration-300 hover:-translate-y-1 hover:border-[#CBACF980] hover:bg-[#161A31] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBACF9]"
                  href={action.href}
                  key={action.label}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  target={action.external ? "_blank" : undefined}
                >
                  <Icon className="h-[18px] w-[18px]" name={action.icon} />
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
