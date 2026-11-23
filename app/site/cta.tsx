import { profile } from "../data/profile";
import { CopyEmail } from "../components/copy-email";
import { SectionHeading } from "../components/badge";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export const Cta = ({ locale = "pt" }: { locale?: Locale }) => {
  const t = getTranslations(locale);

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="py-16 md:py-24"
    >
      <div className="container">
        <SectionHeading id="contact-title" index="04">
          {t.contactTitle}
        </SectionHeading>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="max-w-[52ch] text-[15px] leading-relaxed text-muted">
            {t.contactDescription}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
            <CopyEmail
              email={profile.email}
              locale={locale}
              variant="primary"
              className="w-full sm:w-auto"
            />
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-surface px-4 text-sm font-medium text-fg transition-colors hover:border-line-strong"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-5">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center font-mono text-xs tracking-wider text-muted transition-colors hover:text-fg"
            >
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-fg"
            >
              {t.linkedinLabel}
            </a>
          </li>
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
        </ul>
      </div>
    </section>
  );
};
