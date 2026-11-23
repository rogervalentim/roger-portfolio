import type { Metadata } from "next";
import "./globals.css";
import { mono, sans } from "./lib/fonts";
import { isPreview, seoDescription, seoTitle, siteUrl } from "./lib/seo";

const ogImage = new URL("opengraph-image", siteUrl).href;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: seoTitle,
  description: seoDescription,
  applicationName: "Portfólio de Roger Valentim",
  authors: [{ name: "Roger Valentim", url: siteUrl.href }],
  alternates: {
    canonical: siteUrl.href,
    languages: {
      "pt-BR": new URL("/pt", siteUrl).href,
      "en-US": new URL("/en", siteUrl).href,
    },
  },
  robots: { index: !isPreview, follow: !isPreview },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl.href,
    siteName: "Roger Valentim | Portfólio Front-End",
    title: seoTitle,
    description: seoDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Roger Valentim — Engenheiro Front-End" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [{ url: ogImage, alt: "Roger Valentim — Engenheiro Front-End" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-ink text-fg antialiased">
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
