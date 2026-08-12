import Image from "next/image";
import { Icon, type IconName } from "./ui-icon";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" }
];

const socialLinks: Array<{
  label: string;
  href: string;
  icon: IconName;
}> = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rogervalentim33",
    icon: "linkedin"
  },
  {
    label: "GitHub",
    href: "https://www.github.com/rogervalentim",
    icon: "github"
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511976069285",
    icon: "whatsapp"
  }
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden pb-8 pt-4 md:pb-10">
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[#7B4AE21a] blur-[100px]" />

      <div className="container relative">
        <div className="overflow-hidden rounded-[28px] border border-[#3637497d] bg-linear-to-br from-[#0C0E23] via-[#070A20] to-[#04071D] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-8 px-6 py-8 md:px-10 md:py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#CBACF94d] bg-[#10132E] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <Image
                  alt="Símbolo de Roger Valentim"
                  className="h-9 w-9 object-contain"
                  height={36}
                  src="/experince/student-1.svg"
                  width={36}
                />
              </div>

              <div>
                <p className="text-lg font-bold tracking-[-0.02em] text-white">
                  Roger Valentim
                </p>
                <p className="mt-1 text-sm text-[#C1C2D3]">
                  Desenvolvedor Front-End
                </p>
              </div>
            </div>

            <p className="max-w-[500px] text-sm leading-6 text-[#C1C2D3] lg:text-center">
              Interfaces responsivas, código organizado e atenção aos detalhes
              para criar experiências digitais rápidas e acessíveis.
            </p>

            <a
              className="group inline-flex h-11 w-fit items-center gap-2 rounded-xl border border-[#CBACF94d] bg-[#10132E] px-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#CBACF980] hover:bg-[#161A31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBACF9]"
              href="#inicio"
            >
              Voltar ao topo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path>
              </svg>{" "}
            </a>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-[#363749] to-transparent" />

          <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.4fr_1fr] md:px-10 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#CBACF9]">
                Navegação
              </p>
              <nav
                aria-label="Navegação do rodapé"
                className="mt-4 flex flex-wrap gap-x-5 gap-y-3"
              >
                {footerLinks.map((link) => (
                  <a
                    className="text-sm text-[#C1C2D3] transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#CBACF9]">
                Contato
              </p>
              <a
                className="mt-4 inline-flex items-center gap-2 text-sm text-[#C1C2D3] transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                href="mailto:valentim.roger33@gmail.com"
              >
                <Icon aria-hidden="true" className="h-4 w-4" name="mail" />
                <span className="break-all">valentim.roger33@gmail.com</span>
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#CBACF9]">
                Redes
              </p>
              <div className="mt-4 flex gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#363749] bg-[#10132E] text-[#E4ECFF] transition duration-300 hover:-translate-y-0.5 hover:border-[#CBACF96b] hover:bg-[#161A31] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBACF9]"
                    href={social.href}
                    key={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={social.label}
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-[18px] w-[18px]"
                      name={social.icon}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-[#36374966] px-6 py-5 text-xs text-[#8F90A6] md:flex-row md:items-center md:justify-between md:px-10">
            <p>
              © {new Date().getFullYear()} Roger Valentim. Todos os direitos
              reservados.
            </p>
            <p>Desenvolvido com Next.js e atenção aos detalhes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
