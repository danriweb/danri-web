import type { MetadataRoute } from "next";

/*
  Этот файл используется для генерации robots.txt.
  Он определяет, какие страницы должны быть проиндексированы поисковыми системами.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://danri-web.ru/sitemap.xml",
    host: "https://danri-web.ru",
  };
}
