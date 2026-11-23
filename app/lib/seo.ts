import { profile, stackCategories } from "../data/profile";

// Endereço publicado no currículo existente. SITE_URL permite trocar o domínio.
const configuredUrl = new URL(process.env.SITE_URL || "https://roger-portfolio-gamma.vercel.app/");
if (!["https:", "http:"].includes(configuredUrl.protocol)) {
  throw new Error("SITE_URL precisa ser uma URL HTTP ou HTTPS válida.");
}
export const siteUrl = new URL("/", configuredUrl);
export const isPreview = process.env.VERCEL_ENV === "preview";
export const seoTitle = "Roger Valentim | Engenheiro Front-End focado em interfaces de alta precisão";
export const seoDescription =
  "Portfólio de Roger Valentim, engenheiro Front-End em São Paulo. Interfaces React e Next.js com TypeScript, fiéis ao Figma, acessíveis e de alta performance.";

export const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": siteUrl.href + "#perfil",
  url: siteUrl.href,
  name: seoTitle,
  description: seoDescription,
  inLanguage: "pt-BR",
  mainEntity: {
    "@type": "Person",
    "@id": siteUrl.href + "#roger-valentim",
    name: profile.name,
    jobTitle: "Engenheiro Front-End",
    url: siteUrl.href,
    email: profile.email,
    sameAs: [profile.github, profile.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    knowsAbout: [...new Set(stackCategories.flatMap(({ items }) => items))],
  },
};
