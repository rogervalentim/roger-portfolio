import { profile } from "../data/profile";
import { ActionLink } from "./action-link";
import { CopyEmail } from "./copy-email";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export const Hero = ({ locale = "pt" }: { locale?: Locale }) => {
  const t = getTranslations(locale);
  return (
    <section
      className="py-16 md:pt-[123px] md:pb-[156px]"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="container flex flex-col items-center justify-center">
        <p className="hidden mb-5 lg:inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-sm text-[#DFFFEA]">
          <span
            aria-hidden="true"
            className="h-2 w-2 animate-glow rounded-full bg-[#25D366]"
          />
          {t.availability}
        </p>
        <p className="text-center text-[12px] uppercase leading-[120%] tracking-[0.25em] text-[#E4ECFF] md:text-[16px]">
          {t.heroKicker}
        </p>
        <h1
          id="hero-title"
          className="mt-5 w-full max-w-[938px] text-center text-[clamp(2rem,10vw,3rem)] font-bold leading-none text-white md:text-7xl md:leading-[100%] md:tracking-[-3.6px]"
        >
          {profile.name}{" "}
          <span className="mt-2 block text-[#CBACF9]">{t.heroHeadline}</span>
        </h1>
        <p className="mt-[30px] text-center text-[16px] font-medium leading-relaxed text-[#E4ECFF] md:text-xl">
          React • Next.js • TypeScript • Tailwind CSS
        </p>
        <p className="mt-4 max-w-[750px] text-center text-[16px] leading-normal text-[#E4ECFF] md:text-2xl md:leading-[120%]">
          {t.heroDescription}
        </p>
        <p className="mt-3 text-center text-sm text-[#C1C2D3]">
          {profile.location}
        </p>
        <div className="mt-[30px] flex w-full flex-col items-center gap-4">
          <ActionLink href="#projetos" className="w-full md:w-[256px]">
            {t.viewProjects}
          </ActionLink>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-[#C1C2D3]">
            <CopyEmail email={profile.email} locale={locale} />
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center hover:text-white"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={
                locale === "en"
                  ? "/-roger-valentim-en.pdf"
                  : "/curriculo-roger-valentim.pdf"
              }
              download
              className="inline-flex min-h-11 items-center hover:text-white"
            >
              {t.resume} <span className="sr-only">PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
