import { timeline } from "../data/projects";
import { Meta, SectionHeading } from "../components/badge";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

export const Experience = ({ locale = "pt" }: { locale?: Locale }) => {
  const t = getTranslations(locale);

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="border-b border-line py-16 md:py-24"
    >
      <div className="container">
        <SectionHeading id="experience-title" index="03">
          {t.experienceTitle}
        </SectionHeading>

        <ol className="mt-10 border-l border-line">
          {timeline.map((item) => (
            <li key={item.id} className="relative pb-10 pl-6 last:pb-0 md:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[4.5px] top-2 h-2 w-2 rounded-full border border-line-strong bg-ink"
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <Meta>{item.period[locale]}</Meta>
                <span aria-hidden="true" className="meta text-line-strong">
                  /
                </span>
                <Meta>{item.kind[locale]}</Meta>
              </div>
              <h3 className="display mt-2 text-lg font-semibold text-fg md:text-xl">
                {item.title[locale]}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.org[locale]}</p>
              <ul className="mt-3 space-y-2">
                {item.summary[locale].map((line) => (
                  <li key={line.slice(0, 24)} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong" />
                    {line}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
