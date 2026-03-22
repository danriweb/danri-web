import type { Metadata, Viewport } from "next";
import { Funnel_Display, Inter } from "next/font/google";
import Script from "next/script";
import "react-loading-skeleton/dist/skeleton.css";

import { BackgroundGrid, HeroGlow, ScrollRestoration } from "@custom-ui";

import { ContactModal } from "@/features/contact";
import { Footer } from "@/widgets/footer";
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
  metadataBase: new URL("https://danri-web.ru"),
  title: {
    template: "%s | DanriWeb",
    default: "DanriWeb | Frontend-разработчик",
  },
  description:
    "Официальный сайт-визитка DanriWeb - Frontend-разработчика, специализирующегося на создании современных, быстрых и эстетичных интерфейсов с использованием React и Next.js.",
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
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://danri-web.ru",
    siteName: "DanriWeb",
    title: "DanriWeb | Frontend-разработчик",
    description: "Официальный сайт DanriWeb — Frontend-разработчика. Платите за результат, а не за обещания.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DanriWeb — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DanriWeb | Frontend-разработчик",
    description: "Платите за результат, а не за обещания.",
    images: ["/og-image.png"],
  },
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
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-scan/dist/auto.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className="bg-background text-foreground relative min-w-80 antialiased">
        <Providers>
          <ScrollRestoration />
          <Header />
          <main className="relative">
            <div className="mx-auto max-w-300 px-4 sm:px-6 md:px-8 lg:px-12">{children}</div>
            <BackgroundGrid />
          </main>
          <Footer />
          <HeroGlow />
          <ContactModal />
        </Providers>
      </body>
    </html>
  );
}
