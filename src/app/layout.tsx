import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";

import { Providers } from "./providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | DanriWeb",
    default: "DanriWeb | Frontend разработчик",
  },
  description:
    "Официальный сайт-визитка DanriWeb — Frontend разработчика, специализирующегося на создании современных, быстрых и эстетичных интерфейсов с использованием React и Next.js.",
  keywords: ["Frontend разработчик", "Фронтенд", "React", "Next.js", "TypeScript", "UI/UX", "Портфолио", "DanriWeb"],
  authors: [{ name: "DanriWeb" }],
  creator: "DanriWeb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
