import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories, products } from "@/lib/products";
import { industries } from "@/lib/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/products",
    "/industries",
    "/capabilities",
    "/about",
    "/technical-resources",
    "/quality",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));

  return [
    ...staticRoutes,
    ...categories.map((c) => ({
      url: `${site.url}/products/${c.slug}`,
      lastModified: now,
    })),
    ...products.map((p) => ({
      url: `${site.url}/products/${p.category}/${p.slug}`,
      lastModified: now,
    })),
    ...industries.map((i) => ({
      url: `${site.url}/industries/${i.slug}`,
      lastModified: now,
    })),
  ];
}
