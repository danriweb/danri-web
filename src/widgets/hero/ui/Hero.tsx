import { Link } from "@i18n";
import { ArrowRight, Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Metric } from "@custom-ui";
import { Badge, Button } from "@shadcn";

export const Hero = () => {
  const t = useTranslations("widgets.hero");
  const locale = useLocale();

  const SUPPORTED_RESUME_LOCALES = ["ru", "en", "de", "ko", "ja"] as const;
  const resumeLocale = SUPPORTED_RESUME_LOCALES.includes(locale as (typeof SUPPORTED_RESUME_LOCALES)[number])
    ? locale
    : "en";
  const resumeUrl = `/documents/danriweb_${resumeLocale}.pdf`;
  const resumeFilename = `danriweb_${resumeLocale}.pdf`;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex flex-col items-center justify-center overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32"
    >
      <div className="flex flex-col items-center gap-20 text-center">
        {/*Заголовок*/}
        <div className="flex flex-col items-center gap-10">
          <div className="flex w-full flex-col items-center gap-6 px-4 text-center sm:px-6">
            <Badge
              aria-hidden="true"
              variant="outline"
              className="px-6 py-3 font-bold tracking-[4px] uppercase backdrop-blur-md"
            >
              <span className="bg-primary mr-3 h-1.5 w-1.5 rounded-full" />
              {t("badge")}
            </Badge>

            <h1
              id="hero-title"
              className="xs:text-5xl w-full text-[40px] leading-[1.05] font-extrabold tracking-tighter text-balance wrap-break-word hyphens-auto text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {t.rich("title", { result: (chunks) => <span className="text-primary">{chunks}</span> })}
            </h1>

            <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed tracking-wide sm:text-base">
              {t("description")}
            </p>
          </div>

          {/*Кнопки*/}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="group bg-primary-gradient h-14 px-10 text-base font-bold hover:text-white"
            >
              <Link href="/contact">
                {t("discussProject")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="hover:bg-card text-foreground h-14 px-10 text-base font-bold backdrop-blur-sm"
              asChild
            >
              <a href={resumeUrl} download={resumeFilename}>
                <Download className="mr-2 h-4 w-4" />
                {t("getResume")}
              </a>
            </Button>
          </div>
        </div>

        {/*Метрики*/}
        <ul className="border-border/30 flex w-full flex-wrap items-center justify-center gap-12 border-t md:gap-24">
          <li className="flex flex-col items-center">
            <Metric unit="3+" label={t("metrics.years")} />
          </li>
          <li className="flex flex-col items-center">
            <Metric unit="20+" label={t("metrics.projects")} />
          </li>
          <li className="flex flex-col items-center">
            <Metric unit="100%" label={t("metrics.businessFocus")} highlight />
          </li>
        </ul>
      </div>
    </section>
  );
};
