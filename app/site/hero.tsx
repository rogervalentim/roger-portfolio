import { heroCopy, profile } from "../data/profile";
import { ActionLink, ArrowIcon } from "../components/action-link";
import { CopyEmail } from "../components/copy-email";
import { Meta } from "../components/badge";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export const Hero = ({ locale = "pt" }: { locale?: Locale }) => {
  const t = getTranslations(locale);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="border-b border-line pb-16 pt-14 md:pb-24 md:pt-24"
    >
      <div className="container">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot"
            />
            <span className="text-xs text-muted-2 hero-enter-1">{heroCopy.availability[locale]}</span>
          </span>
          <Meta>São Paulo, BR · UTC-3</Meta>
        </div>

        <h1
          id="hero-title"
          className="display hero-enter-1 mt-8 max-w-[22ch] text-[clamp(2rem,6vw,3.75rem)] font-semibold leading-[1.04] text-fg"
        >
          {heroCopy.headline}{" "}
          <span className="text-muted">{heroCopy.headlineTail[locale]}</span>
        </h1>

        <p className="hero-enter-2 mt-6 max-w-[62ch] text-base leading-relaxed text-muted md:text-lg">
          {heroCopy.intro[locale]}
        </p>

        <div className="hero-enter-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <ActionLink href="#projetos" variant="primary" className="w-full sm:w-auto">
            {t.viewProjects}
            <ArrowIcon />
          </ActionLink>
          <CopyEmail email={profile.email} locale={locale} className="w-full sm:w-auto" />
        </div>

        <ul className="hero-enter-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-1">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-fg"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-fg"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={locale === "en" ? profile.resumeEn : profile.resume}
              download
              className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              {t.resume}
              <Meta className="text-line-strong">PDF</Meta>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
