import { Link } from "@i18n";
import { ArrowLeft } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CaseCard, cases } from "@entities/case";

import { SectionTitle } from "@custom-ui";

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
      <SectionTitle
        as="h1"
        tag={t("tag")}
        title={t("title")}
        description={t("description")}
        className="self-start md:items-center md:self-center [&_div]:text-left md:[&_div]:text-center"
      />

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
