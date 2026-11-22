import type { Metadata } from "next";
import { siteUrl } from "../lib/seo";

const locales = {
  pt: {
    title: "Roger Valentim | Desenvolvedor Front-End",
    description: "Portfólio de Roger Valentim, Desenvolvedor Front-End especializado em React, Next.js e TypeScript.",
  },
  en: {
    title: "Roger Valentim | Front-End Developer",
    description: "Roger Valentim's portfolio. Front-End Developer specializing in React, Next.js and TypeScript.",
  },
} as const;

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return params.then(({ locale }) => {
    const copy = locales[locale === "en" ? "en" : "pt"];
    const url = new URL(`/${locale === "en" ? "en" : "pt"}`, siteUrl);
    return {
      title: copy.title,
      description: copy.description,
      alternates: {
        canonical: url.href,
        languages: {
          "pt-BR": new URL("/pt", siteUrl).href,
          "en-US": new URL("/en", siteUrl).href,
        },
      },
      openGraph: {
        locale: locale === "en" ? "en_US" : "pt_BR",
        url: url.href,
        title: copy.title,
        description: copy.description,
      },
    };
  });
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  return (
    <div lang={locale === "en" ? "en-US" : "pt-BR"} data-locale={locale}>
      {children}
    </div>
  );
}
