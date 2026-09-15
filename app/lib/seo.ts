import { profile, technologyGroups } from "../data/profile";

// Endereço publicado no currículo existente. SITE_URL permite trocar o domínio.
const configuredUrl = new URL(process.env.SITE_URL || "https://roger-portfolio-gamma.vercel.app/");
if (!["https:", "http:"].includes(configuredUrl.protocol)) {
  throw new Error("SITE_URL precisa ser uma URL HTTP ou HTTPS válida.");
}
export const siteUrl = new URL("/", configuredUrl);
export const isPreview = process.env.VERCEL_ENV === "preview";
export const seoTitle = "Roger Valentim | Desenvolvedor Front-End React, Next.js e TypeScript";
export const seoDescription = "Portfólio de Roger Valentim, Desenvolvedor Front-End em São Paulo. React, Next.js, TypeScript, Tailwind CSS e interfaces responsivas e fiéis ao Figma.";

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
    jobTitle: profile.role,
    url: siteUrl.href,
    sameAs: [profile.github, profile.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    knowsAbout: [...new Set(technologyGroups.flatMap(({ technologies }) => technologies))],
  },
};
