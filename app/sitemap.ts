import type { MetadataRoute } from "next";
import { isPreview, siteUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return isPreview ? [] : [
    { url: new URL("/pt", siteUrl).href, alternates: { languages: { "pt-BR": new URL("/pt", siteUrl).href, "en-US": new URL("/en", siteUrl).href } } },
    { url: new URL("/en", siteUrl).href, alternates: { languages: { "pt-BR": new URL("/pt", siteUrl).href, "en-US": new URL("/en", siteUrl).href } } },
  ];
}
