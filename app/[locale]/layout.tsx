import type { Metadata } from "next";

// Centralize a URL base (troque facilmente quando registrar seu domínio próprio)
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://roger-portfolio-gamma.vercel.app";

type Locale = "pt" | "en";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Next.js 15/16: params é uma Promise
}

const seoContent: Record<
  Locale,
  {
    title: string;
    description: string;
    jobTitle: string;
    ogLocale: string;
    keywords: string[];
  }
> = {
  pt: {
    title:
      "Roger Valentim | Desenvolvedor Front-End (React, Next.js, TypeScript)",
    description:
      "Desenvolvedor Front-End e estudante de Engenharia de Software. Especialista em React, Next.js, TypeScript, Core Web Vitals, Design Systems e interfaces integradas com IA.",
    jobTitle: "Desenvolvedor Front-End",
    ogLocale: "pt_BR",
    keywords: [
      "Roger Valentim",
      "Desenvolvedor Front-End",
      "Front-End Developer",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Core Web Vitals",
      "Storybook",
      "Engenharia de Software",
      "São Paulo",
    ],
  },
  en: {
    title: "Roger Valentim | Front-End Engineer (React, Next.js, TypeScript)",
    description:
      "Front-End Engineer & Software Engineering student building high-precision, accessible, and fast web interfaces with React, Next.js, TypeScript, and AI workflows.",
    jobTitle: "Front-End Engineer",
    ogLocale: "en_US",
    keywords: [
      "Roger Valentim",
      "Front-End Engineer",
      "Frontend Developer",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Web Performance",
      "Design Systems",
      "AI Engineering",
    ],
  },
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "pt";
  const content = seoContent[locale];

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: content.title,
      template: "%s | Roger Valentim", // Usado automaticamente nas rotas internas (ex: /pt/projetos/cineverse)
    },
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: "Roger Valentim da Silva", url: BASE_URL }],
    creator: "Roger Valentim",
    publisher: "Roger Valentim",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt",
        "en-US": "/en",
        "x-default": "/pt",
      },
    },
    openGraph: {
      type: "website",
      locale: content.ogLocale,
      alternateLocale: locale === "pt" ? "en_US" : "pt_BR",
      url: `${BASE_URL}/${locale}`,
      siteName: "Roger Valentim — Portfolio",
      title: content.title,
      description: content.description,
      images: [
        {
          url: `/og-image-${locale}.png`, // Crie public/og-image-pt.png e public/og-image-en.png (1200x630)
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [`/og-image-${locale}.png`],
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "pt";
  const content = seoContent[locale];

  // Dados Estruturados Schema.org (Person)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Roger Valentim",
    givenName: "Roger",
    familyName: "Valentim da Silva",
    url: `${BASE_URL}/${locale}`,
    image: `${BASE_URL}/og-image-${locale}.png`,
    jobTitle: content.jobTitle,
    description: content.description,
    email: "mailto:valentim.roger33@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Faculdade Anhanguera",
    },
    sameAs: [
      "https://github.com/rogervalentim",
      "https://www.linkedin.com/in/rogervalentim33",
    ],
    knowsAbout: [
      "Front-End Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Storybook",
      "TanStack Query",
      "Zustand",
      "Web Accessibility (WCAG)",
      "Core Web Vitals",
      "Technical SEO",
      "Node.js",
      "Prisma",
      "Agentic AI & LLM Integration",
    ],
  };

  return (
    <>
      {/* Injeção segura do JSON-LD para Rich Snippets do Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
