import type { MetadataRoute } from "next";
import { isPreview, siteUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return isPreview ? [] : [{ url: siteUrl.href }];
}
