import { getTranslations, setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

const ExperiencePage = dynamic(() => import("@widgets/experience").then((mod) => mod.ExperiencePage), { ssr: true });

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "app.experience.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Experience(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <ExperiencePage />;
}
