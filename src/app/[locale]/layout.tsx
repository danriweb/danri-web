import type { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Funnel_Display, Inter, Noto_Sans_JP, Noto_Sans_KR } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import "react-loading-skeleton/dist/skeleton.css";

import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";

import { ContactModal } from "@features/contact";

import { BackgroundGrid, HeroGlow, ScrollRestoration } from "@custom-ui";

import { routing } from "@/i18n/routing";

import "../globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#00B3FF",
};

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "app.layout.metadata" });

  return {
    metadataBase: new URL("https://danri-web.ru"),
    title: {
      template: t("titleTemplate"),
      default: t("titleDefault"),
    },
    description: t("description"),
    keywords: t.raw("keywords"),
    authors: [{ name: "DanriWeb" }],
    creator: "DanriWeb",
    openGraph: {
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      url: "https://danri-web.ru",
      siteName: "DanriWeb",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "DanriWeb - Frontend Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
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
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const children = props.children;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  const fontVariable = locale === "ja" ? notoSansJP.variable : locale === "ko" ? notoSansKR.variable : inter.variable;

  return (
    <html lang={locale} className={`${fontVariable} ${funnelDisplay.variable}`} suppressHydrationWarning>
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
        <NextIntlClientProvider locale={locale} messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
