import type { MetadataRoute } from "next";

const BASE = "https://nina-the-greek.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/menu",
    "/private-events",
    "/careers",
    "/gallery",
    "/reserve",
  ];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency:
      route === "" || route === "/menu" ? "weekly" : "monthly",
    priority:
      route === "" ? 1 : route === "/menu" || route === "/reserve" ? 0.9 : 0.7,
  }));
}
