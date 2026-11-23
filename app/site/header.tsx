"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

const SECTIONS = [
  "inicio",
  "sobre",
  "projetos",
  "experiencia",
  "certificates",
  "contato",
] as const;

export const Header = ({ locale = "pt" }: { locale?: Locale }) => {
  const t = getTranslations(locale);
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navClass = (id: string, mobile = false) =>
    `inline-flex items-center transition-colors duration-200 ${
      mobile ? "w-full rounded px-3 py-2.5 text-sm" : "rounded px-2.5 py-1.5 text-[13px]"
    } ${
      activeSection === id
        ? "bg-[#18181b] text-fg"
        : "text-muted hover:text-fg hover:bg-[#18181b]/70"
    }`;

  const langClass = (target: Locale) =>
    `rounded px-2 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
      locale === target ? "bg-[#18181b] text-fg" : "text-muted hover:text-fg"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 text-sm font-medium text-fg"
          aria-label={locale === "en" ? "Back to top" : "Voltar ao início"}
        >
          <span aria-hidden="true" className="font-mono text-xs text-accent">
            RV
          </span>
          <span className="hidden sm:inline">Roger Valentim</span>
        </a>

        <nav aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"} className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {SECTIONS.map((id, index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={navClass(id)}
                  aria-current={activeSection === id ? "true" : undefined}
                >
                  {t.nav[index]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={t.languageLabel}
            className="flex items-center gap-0.5 rounded border border-line p-0.5"
          >
            <Link href="/pt" className={langClass("pt")} lang="pt-BR" aria-current={locale === "pt" ? "page" : undefined}>
              PT
            </Link>
            <Link href="/en" className={langClass("en")} lang="en-US" aria-current={locale === "en" ? "page" : undefined}>
              EN
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              menuOpen
                ? locale === "pt"
                  ? "Fechar menu"
                  : "Close menu"
                : locale === "pt"
                  ? "Abrir menu"
                  : "Open menu"
            }
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-line text-muted transition-colors hover:text-fg md:hidden"
          >
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              {menuOpen ? (
                <path d="m6 6 12 12M6 18 18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label={locale === "pt" ? "Navegação mobile" : "Mobile navigation"}
          className="border-t border-line bg-ink md:hidden"
        >
          <ul className="container flex flex-col gap-0.5 py-3">
            {SECTIONS.map((id, index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={navClass(id, true)}
                  aria-current={activeSection === id ? "true" : undefined}
                >
                  {t.nav[index]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
