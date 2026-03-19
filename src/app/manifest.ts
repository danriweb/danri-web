import type { MetadataRoute } from "next";

/*
  Этот файл используется для генерации manifest.json.
  Он определяет поведение веб-приложения (PWA) и иконки.
*/
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DanriWeb | Frontend разработчик",
    short_name: "DanriWeb",
    description:
      "Официальный сайт-визитка DanriWeb — Frontend-рразработчика, специализирующегося на создании современных и эстетичных интерфейсов.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#00B3FF",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "300x300",
        type: "image/png",
      },
    ],
  };
}
