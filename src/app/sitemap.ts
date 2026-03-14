import type { MetadataRoute } from "next";

/*
  Этот файл используется для генерации sitemap.xml.
  Он определяет, какие страницы должны быть проиндексированы поисковыми системами.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://danriweb.ru",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
