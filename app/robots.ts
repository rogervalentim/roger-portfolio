import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://roger-portfolio-gamma.vercel.app/sitemap.xml",
    host: "https://roger-portfolio-gamma.vercel.app"
  };
}
