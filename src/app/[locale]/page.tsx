import { getTranslations, setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

import { Hero } from "@widgets/hero";

import { SectionRevealer } from "@custom-ui";

// Ленивая загрузка тяжелых секций
const Processes = dynamic(() => import("@widgets/processes").then((mod) => mod.Processes), {
  ssr: true,
});
const Projects = dynamic(() => import("@/widgets/cases").then((mod) => mod.Cases), {
  ssr: true,
});
const Stack = dynamic(() => import("@widgets/stack").then((mod) => mod.Stack), {
  ssr: true,
});
const About = dynamic(() => import("@widgets/about").then((mod) => mod.About), {
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
    <div className="flex flex-col gap-15 overflow-x-hidden">
      <Hero />

      <SectionRevealer index={2} rootMargin="300px 0px">
        <Projects />
      </SectionRevealer>

      <SectionRevealer index={4} rootMargin="400px 0px">
        <About />
      </SectionRevealer>

      <SectionRevealer index={1} rootMargin="300px 0px">
        <Processes />
      </SectionRevealer>

      <SectionRevealer index={3} rootMargin="400px 0px">
        <Stack />
      </SectionRevealer>
    </div>
  );
}
