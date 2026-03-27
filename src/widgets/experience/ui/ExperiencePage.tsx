"use client";

import { ArrowLeft, Briefcase, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

import { GlowCard, MotionWrapper, SectionTitle } from "@custom-ui";
import { Badge } from "@shadcn";

import { Link } from "@/i18n/routing";

import { jobs } from "../model/experience";
import { ExperienceJobCard } from "./ExperienceJobCard";

export const ExperiencePage = () => {
  const t = useTranslations("widgets.experience");

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-10 md:gap-20 md:px-6 md:py-15">
      {/* Навигация назад */}
      <MotionWrapper initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <Link
          href="/#about"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          {t("backToHome")}
        </Link>
      </MotionWrapper>

      {/* Заголовок страницы */}
      <MotionWrapper
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center gap-6"
      >
        <SectionTitle
          tag={t("tag")}
          title={t("title")}
          description={t("description")}
        />

        {/* Мета: период + статус */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge
            variant="outline"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide"
          >
            <Calendar aria-hidden="true" className="size-3" />
            {t("period")}
          </Badge>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide"
          >
            <span className="bg-primary size-1.5 animate-pulse rounded-full" />
            {t("currentlyActive")}
          </Badge>
        </div>
      </MotionWrapper>

      {/* Список проектов */}
      <ol className="flex flex-col gap-8">
        {jobs.map((job, index) => (
          <li key={job.id} className="contents">
            <ExperienceJobCard job={job} index={index} />
          </li>
        ))}
      </ol>

      {/* NDA-проект */}
      <MotionWrapper
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GlowCard index={jobs.length} className="p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <div aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
              <Briefcase className="text-primary size-5" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold tracking-[3px] text-white/40 uppercase">{t("ndaLabel")}</span>
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary/80 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase"
                >
                  NDA
                </Badge>
              </div>
              <h3 className="text-base font-bold text-white md:text-lg">{t("ndaTitle")}</h3>
              {t("ndaDescription") && (
                <p className="text-muted-foreground text-sm leading-relaxed">{t("ndaDescription")}</p>
              )}
              <ul aria-label={t("stackLabel")} className="mt-3 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Zustand",
                  "TanStack Query",
                  "Zod",
                  "React Hook Form",
                  "next-intl",
                ].map((tech) => (
                  <li
                    key={tech}
                    className="inline-flex items-center rounded-md border border-primary/20 bg-primary/8 px-2 py-0.5 text-[11px] font-medium tracking-wide text-primary/70 transition-colors hover:bg-primary/15"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlowCard>
      </MotionWrapper>
    </div>
  );
};
