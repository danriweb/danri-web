import { ArrowLeft } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CaseCard, cases } from "@entities/case";

import { Link } from "@/i18n/routing";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "app.cases.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CasesPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const t = await getTranslations("app.cases");

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-10 md:gap-20 md:px-6 md:py-15">
      {/* Навигация назад */}
      <Link
        href="/#cases"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" />
        {t("backToHome")}
      </Link>

      {/* Заголовок страницы */}
      <div className="flex flex-col gap-4">
        <span className="text-primary text-xs font-bold tracking-[3px] uppercase">{t("tag")}</span>
        <h1 className="font-funnel-display text-foreground text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed md:text-lg">{t("description")}</p>
      </div>

      {/* Список всех кейсов */}
      <ol className="flex flex-col gap-8 md:gap-12">
        {cases.map((project, index) => (
          <li key={project.id} className="contents">
            <CaseCard project={project} index={index} />
          </li>
        ))}
      </ol>
    </div>
  );
}
