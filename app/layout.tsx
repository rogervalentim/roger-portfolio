import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { isPreview, seoDescription, seoTitle, siteUrl } from "./lib/seo";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: seoTitle,
  description: seoDescription,
  applicationName: "Portfólio de Roger Valentim",
  authors: [{ name: "Roger Valentim", url: siteUrl.href }],
  alternates: { canonical: siteUrl.href },
  robots: { index: !isPreview, follow: !isPreview },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl.href,
    siteName: "Roger Valentim | Portfólio Front-End",
    title: seoTitle,
    description: seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [{ url: new URL("opengraph-image", siteUrl).href, alt: "Roger Valentim — Desenvolvedor Front-End" }],
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable}  antialiased bg-[#000319]`}>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
