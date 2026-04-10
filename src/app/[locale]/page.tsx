import { getTranslations, setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

import { Hero } from "@widgets/hero";

import { SectionRevealer } from "@custom-ui";

// Ленивая загрузка тяжелых секций
const About = dynamic(() => import("@widgets/about").then((mod) => mod.About), {
  ssr: true,
});
const ExperienceTeaser = dynamic(() => import("@widgets/experience").then((mod) => mod.ExperienceTeaser), {
  ssr: true,
});
const Projects = dynamic(() => import("@widgets/cases").then((mod) => mod.Cases), {
  ssr: true,
});
const Stack = dynamic(() => import("@widgets/stack").then((mod) => mod.Stack), {
  ssr: true,
});
const Processes = dynamic(() => import("@widgets/processes").then((mod) => mod.Processes), {
  ssr: true,
});

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "app.home.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col gap-15">
      {/* 1. Hero — первый экран */}
      <Hero />

      {/* 2. About — сначала покупают человека */}
      <SectionRevealer index={1} rootMargin="300px 0px">
        <About />
      </SectionRevealer>

      {/* 3. Experience Teaser — коммерческий контекст */}
      <SectionRevealer index={2} rootMargin="300px 0px">
        <ExperienceTeaser />
      </SectionRevealer>

      {/* 4. Cases — глубина инженерного мышления */}
      <SectionRevealer index={3} rootMargin="300px 0px">
        <Projects />
      </SectionRevealer>

      {/* 5. Stack — чем именно работаю */}
      <SectionRevealer index={4} rootMargin="400px 0px">
        <Stack />
      </SectionRevealer>

      {/* 6. Processes — финальный аргумент перед CTA */}
      <SectionRevealer index={5} rootMargin="300px 0px">
        <Processes />
      </SectionRevealer>
    </div>
  );
}
