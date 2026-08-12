import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--inter",
  display: "swap",
  fallback: ["Arial", "sans-serif"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roger-portfolio-gamma.vercel.app"),
  title: {
    default: "Roger Valentim | Desenvolvedor Front-End",
    template: "%s | Roger Valentim"
  },
  description:
    "Portfólio de Roger Valentim, Desenvolvedor Front-End em São Paulo. Interfaces modernas, responsivas e performáticas com React, Next.js e TypeScript.",
  applicationName: "Portfólio de Roger Valentim",
  authors: [
    { name: "Roger Valentim", url: "https://roger-portfolio-gamma.vercel.app" }
  ],
  creator: "Roger Valentim",
  publisher: "Roger Valentim",
  keywords: [
    "Roger Valentim",
    "Desenvolvedor Front-End",
    "React",
    "Next.js",
    "TypeScript",
    "São Paulo",
    "Portfólio",
    "Desenvolvimento web",
    "Landing pages",
    "SEO"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Portfólio de Roger Valentim",
    title: "Roger Valentim | Desenvolvedor Front-End",
    description:
      "Interfaces modernas, responsivas e performáticas com React, Next.js e TypeScript.",
    images: [
      {
        url: "/services.png",
        alt: "Portfólio de Roger Valentim - Desenvolvedor Front-End"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Valentim | Desenvolvedor Front-End",
    description:
      "Interfaces modernas, responsivas e performáticas com React, Next.js e TypeScript.",
    images: ["/services.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "technology"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#000319"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} bg-[#000319] antialiased`}>
        {children}
      </body>
    </html>
  );
}
