"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { href: "#inicio", label: "Início", section: "inicio" },
  { href: "#sobre", label: "Sobre", section: "sobre" },
  { href: "#projetos", label: "Projetos", section: "projetos" },
  { href: "#experiencia", label: "Experiência", section: "experiencia" },
  { href: "#contato", label: "Contato", section: "contato" }
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.section))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -60%", threshold: [0.05, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>

      <header className="container flex h-[114px] w-full items-center justify-center pt-[50px]">
        <div className="fixed inset-x-0 top-4 z-50 px-[5%] md:top-6">
          <nav
            aria-label="Navegação principal"
            className="header-shell relative mx-auto flex h-[72px] w-full  items-center justify-between rounded-[18px] border border-[#6971A24d] bg-[linear-gradient(105deg,rgba(4,7,29,0.96),rgba(12,14,35,0.94))] px-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-4"
          >
            <a
              aria-label="Ir para o início"
              className="group flex min-w-0 items-center gap-3 rounded-xl pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBACF9]"
              href="#inicio"
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#CBACF955] bg-[#10132E] text-sm font-black tracking-[-0.05em] text-white shadow-[inset_0_0_14px_rgba(255,255,255,0.06)] transition duration-300 group-hover:border-[#CBACF990] group-hover:shadow-[0_0_28px_rgba(203,172,249,0.16)]">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(203,172,249,0.28),transparent_65%)]" />
                <Image
                  alt=""
                  aria-hidden="true"
                  className="relative h-8 w-8 object-contain"
                  height={32}
                  src="/experince/student-1.svg"
                  width={32}
                />
              </span>
              <span className="hidden min-w-0 sm:block">
                <span className="block truncate text-sm font-bold tracking-[-0.02em] text-white">
                  Roger Valentim
                </span>
                <span className="mt-0.5 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#9FA2BF]">
                  Desenvolvedor front end
                </span>
              </span>
            </a>

            <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-xl border border-[#36374955] bg-[#070A22]/70 p-1 lg:flex">
              {navigation.map((item) => {
                const active = item.section === activeSection;
                return (
                  <li key={item.section}>
                    <a
                      aria-current={active ? "location" : undefined}
                      className={`relative flex h-10 items-center rounded-lg px-3.5 text-[13px] font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBACF9] ${
                        active
                          ? "bg-[#CBACF91a] text-white shadow-[inset_0_0_12px_rgba(203,172,249,0.06)]"
                          : "text-[#AEB0C8] hover:bg-white/[0.035] hover:text-white"
                      }`}
                      href={item.href}
                    >
                      {item.label}
                      {active ? (
                        <span className="absolute inset-x-3 bottom-0 h-px bg-linear-to-r from-transparent via-[#CBACF9] to-transparent" />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                className="hidden h-11 items-center gap-2 rounded-xl border border-[#CBACF955] bg-[linear-gradient(110deg,#161A31,#0A0D26)] px-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#CBACF990] hover:from-[#1B2B6B] hover:to-[#0A0F3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBACF9] md:flex"
                href="/Roger-Valentim-Curriculo.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver currículo
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 256 256"
                  width="16"
                >
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                </svg>
              </a>

              <button
                aria-controls="menu-mobile"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3637497d] bg-[#10132E] text-white transition hover:border-[#CBACF980] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBACF9] lg:hidden"
                onClick={() => setMenuOpen((open) => !open)}
                type="button"
              >
                <span className="relative h-4 w-5" aria-hidden="true">
                  <span
                    className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ${
                      menuOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-px w-5 bg-current transition duration-300 ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-px w-5 bg-current transition duration-300 ${
                      menuOpen ? "-translate-y-2-rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>

            {menuOpen ? (
              <div
                className="absolute inset-x-0 top-[82px] rounded-[18px] border border-[#6971A24d] bg-[linear-gradient(120deg,rgba(4,7,29,0.98),rgba(12,14,35,0.98))] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-xl lg:hidden"
                id="menu-mobile"
              >
                <ul className="grid gap-1 sm:grid-cols-2">
                  {navigation.map((item) => {
                    const active = item.section === activeSection;
                    return (
                      <li key={item.section}>
                        <a
                          aria-current={active ? "location" : undefined}
                          className={`flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-medium transition ${
                            active
                              ? "border border-[#CBACF940] bg-[#CBACF916] text-white"
                              : "border border-transparent text-[#B8BAD0] hover:bg-white/4 hover:text-white"
                          }`}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                          {active ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-[#CBACF9]" />
                          ) : null}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <a
                  className="mt-2 flex h-12 items-center justify-center gap-2 rounded-xl border border-[#CBACF955] bg-[#161A31] text-sm font-semibold text-white"
                  href="/Roger-Valentim-Curriculo.pdf"
                  onClick={() => setMenuOpen(false)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ver currículo
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            ) : null}
          </nav>
        </div>
      </header>

      <a
        aria-label="Falar com Roger pelo WhatsApp"
        className="animate-glow fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6"
        href="https://wa.me/5511976069285"
        rel="noopener noreferrer"
        target="_blank"
        title="Fale comigo no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width="32"
          height="32"
          fill="#fff "
        >
          <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
        </svg>
      </a>
    </>
  );
};
