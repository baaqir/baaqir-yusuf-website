import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://baaqir.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${SITE}/writing/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [
    { url: `${SITE}/`, lastModified: new Date() },
    { url: `${SITE}/writing`, lastModified: new Date() },
    { url: `${SITE}/travel`, lastModified: new Date() },
    { url: `${SITE}/photos`, lastModified: new Date() },
    { url: `${SITE}/music`, lastModified: new Date() },
    { url: `${SITE}/movies`, lastModified: new Date() },
    { url: `${SITE}/food`, lastModified: new Date() },
    { url: `${SITE}/reads`, lastModified: new Date() },
    { url: `${SITE}/contact`, lastModified: new Date() },
    ...posts,
  ];
}
