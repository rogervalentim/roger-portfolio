"use client";

import { useMemo, useState } from "react";
import { certificates, type CertificateCategory } from "../data/certificates";
import { Meta, SectionHeading, TechBadge } from "../components/badge";
import { Reveal } from "../components/reveal";
import type { Locale } from "../i18n";
import { getTranslations } from "../i18n";

const categories: Array<"all" | CertificateCategory> = [
  "all",
  "ai-agents",
  "frontend-fullstack",
  "software-engineering",
  "productivity-other",
];

function categoryLabel(category: "all" | CertificateCategory, locale: Locale) {
  const labels = {
    pt: {
      all: "Todas",
      "ai-agents": "IA & Agentes",
      "frontend-fullstack": "Front-End & Full Stack",
      "software-engineering": "Engenharia de Software",
      "productivity-other": "Produtividade & Outros",
    },
    en: {
      all: "All",
      "ai-agents": "AI & Agents",
      "frontend-fullstack": "Front-End & Full Stack",
      "software-engineering": "Software Engineering",
      "productivity-other": "Productivity & Other",
    },
  } as const;
  return labels[locale][category];
}

function formatIssueDate(issueDate: string | null, locale: Locale) {
  if (!issueDate) return locale === "pt" ? "Data não informada" : "Date unavailable";
  if (/^\d{4}$/.test(issueDate)) return issueDate;
  const [year, month] = issueDate.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function Certificates({ locale = "pt" }: { locale?: Locale }) {
  const t = getTranslations(locale);
  const [category, setCategory] = useState<"all" | CertificateCategory>("all");

  const filteredCertificates = useMemo(() => {
    const filtered =
      category === "all"
        ? certificates
        : certificates.filter((certificate) => certificate.category === category);

    return [...filtered].sort((a, b) => {
      if (!a.issueDate) return 1;
      if (!b.issueDate) return -1;
      return b.issueDate.localeCompare(a.issueDate);
    });
  }, [category]);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="border-b border-line py-16 md:py-24"
    >
      <div className="container">
        <SectionHeading id="certificates-title" index="04">
          {t.certificatesTitle}
        </SectionHeading>

        <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-muted">
          {t.certificatesDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5" role="group" aria-label={t.certificatesFilterLabel}>
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`min-h-9 cursor-pointer rounded border px-2.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                category === item
                  ? "border-line-strong bg-[#18181b] text-fg"
                  : "border-line text-muted hover:border-line-strong hover:text-fg"
              }`}
            >
              {categoryLabel(item, locale)}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {filteredCertificates.map((certificate, index) => {
            const credentialHref =
              certificate.credentialUrl ??
              (certificate.attachment
                ? /^https?:\/\//.test(certificate.attachment)
                  ? certificate.attachment
                  : `/${certificate.attachment}`
                : undefined);

            return (
              <Reveal
                as="li"
                key={certificate.id}
                delay={Math.min(index * 75, 300)}
                className="group flex h-full flex-col rounded-lg border border-line bg-surface p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-lg hover:shadow-black/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <Meta className="text-muted">{categoryLabel(certificate.category, locale)}</Meta>
                  <Meta className="shrink-0 text-right">{formatIssueDate(certificate.issueDate, locale)}</Meta>
                </div>

                <h3 className="display mt-4 text-base font-semibold leading-snug text-fg">
                  {certificate.title[locale]}
                </h3>

                <p className="mt-2 text-xs text-muted">{certificate.issuer}</p>

                {certificate.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-2">
                    {certificate.description[locale]}
                  </p>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill) => (
                    <li key={skill}>
                      <TechBadge>{skill}</TechBadge>
                  </li>
                  ))}
                </ul>

                {credentialHref ? (
                  <a
                    href={credentialHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex min-h-11 items-end pt-5 text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {certificate.credentialUrl
                      ? t.viewCredential
                      : t.viewAttachment}
                  </a>
                ) : null}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
