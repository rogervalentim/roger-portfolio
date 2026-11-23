import { aboutCopy, profile, stackCategories } from "../data/profile";
import { Meta, SectionHeading, TechBadge } from "../components/badge";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export const About = ({ locale = "pt" }: { locale?: Locale }) => {
  const t = getTranslations(locale);

  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="border-b border-line py-16 md:py-24"
    >
      <div className="container">
        <SectionHeading id="about-title" index="01">
          {t.aboutTitle}
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-16">
          <div>
            <Meta>São Paulo, BR</Meta>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-muted">
              {aboutCopy.paragraphs[locale].map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-5 flex flex-wrap gap-x-5">
              {[
                { href: profile.github, label: "GitHub", external: true },
                { href: profile.linkedin, label: "LinkedIn", external: true },
                {
                  href: locale === "en" ? profile.resumeEn : profile.resume,
                  label: t.resume,
                  external: false,
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { download: true })}
                  className="inline-flex min-h-11 items-center text-sm text-fg underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {link.label}
                </a>
              ))}
            </p>
          </div>

          <div>
            <Meta>{t.stackTitle}</Meta>
            <dl className="mt-4 border-t border-line">
              {stackCategories.map((category) => (
                <div
                  key={category.title.en}
                  className="grid grid-cols-1 gap-2 border-b border-line py-4 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:gap-6"
                >
                  <dt className="text-sm font-medium text-fg">{category.title[locale]}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-1.5">
                      {category.items.map((item) => (
                        <li key={item}>
                          <TechBadge>{item}</TechBadge>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
