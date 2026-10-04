import type { MetadataRoute } from "next";

import { services } from "@/src/config/services";
import { siteUrl } from "@/src/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/contact", "/our-work", ...services.map((service) => `/${service.slug}`)];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
