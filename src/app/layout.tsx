import type { Metadata, Viewport } from "next";
import { Funnel_Display, Inter } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";

import { Header } from "@/widgets/header";

import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#00B3FF",
};

export const metadata: Metadata = {
  title: {
    template: "%s | DanriWeb",
    default: "DanriWeb | Frontend-разработчик",
  },
  description:
    "Официальный сайт-визитка DanriWeb — Frontend-разработчика, специализирующегося на создании современных, быстрых и эстетичных интерфейсов с использованием React и Next.js.",
  keywords: [
    "Frontend-разработчик",
    "Фронтенд",
    "Frontend-разработка",
    "Frontend-developer",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Портфолио",
    "DanriWeb",
    "FSD",
    "Feature-Sliced Design",
    "Redux Toolkit",
    "Zustand",
    "Framer Motion",
    "Playwright",
    "Docker",
    "Tailwind CSS",
    "SCSS",
  ],
  authors: [{ name: "DanriWeb" }],
  creator: "DanriWeb",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${funnelDisplay.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground min-w-80 font-sans antialiased">
        <Providers>
          <Header />
          <main className="mx-auto max-w-300 px-4 sm:px-6 md:px-8 lg:px-12">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
