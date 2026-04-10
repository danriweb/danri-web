"use client";

import { Link } from "@i18n";
import { ArrowRight, User, Users } from "lucide-react";
import { useTranslations } from "next-intl";

import { GlowCard, MotionWrapper, SectionTitle } from "@custom-ui";
import { Badge } from "@shadcn";
import { cn } from "@styles";

import { jobs } from "../model/experience";

const domainColors: Record<string, string> = {
  "E-Commerce": "text-emerald-400",
  EdTech: "text-violet-400",
  Logistics: "text-amber-400",
  "FinTech / PFM": "text-sky-400",
};

const domainBgColors: Record<string, string> = {
  "E-Commerce": "bg-emerald-400/10 border-emerald-400/20",
  EdTech: "bg-violet-400/10 border-violet-400/20",
  Logistics: "bg-amber-400/10 border-amber-400/20",
  "FinTech / PFM": "bg-sky-400/10 border-sky-400/20",
};

// Стиль бейджей стека (тонированный под домен)
const domainStackBadge: Record<string, string> = {
  "E-Commerce": "bg-emerald-400/8 border-emerald-400/20 text-emerald-300/80 hover:bg-emerald-400/15",
  EdTech: "bg-violet-400/8 border-violet-400/20 text-violet-300/80 hover:bg-violet-400/15",
  Logistics: "bg-amber-400/8 border-amber-400/20 text-amber-300/80 hover:bg-amber-400/15",
  "FinTech / PFM": "bg-sky-400/8 border-sky-400/20 text-sky-300/80 hover:bg-sky-400/15",
};

// Показываем первые 4 проекта — по одному на каждый домен
const teaserJobs = jobs.slice(0, 4);

export const ExperienceTeaser = () => {
  const t = useTranslations("widgets.experience");

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-6">
      <MotionWrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <SectionTitle tag={t("tag")} title={t("title")} description={t("description") || undefined} />

        {/* Мета: период + статус */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary flex items-center gap-1.5 px-3 py-1 text-xs font-semibold"
          >
            <span className="bg-primary size-1.5 animate-pulse rounded-full" />
            {t("currentlyActive")}
          </Badge>
          <span className="text-muted-foreground text-xs">{t("period")}</span>
        </div>
      </MotionWrapper>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {teaserJobs.map((job, index) => {
          const colorClass = domainColors[job.domain] ?? "text-primary";
          const bgClass = domainBgColors[job.domain] ?? "bg-primary/10 border-primary/20";
          const stackBadgeClass = domainStackBadge[job.domain] ?? "bg-white/5 border-white/10 text-white/60";

          return (
            <MotionWrapper
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <GlowCard index={index} className="h-full p-5 md:p-6">
                <div className="flex h-full flex-col gap-4">
                  {/* Шапка */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="text-muted-foreground/40 font-mono text-xs font-bold">
                        {String(job.number).padStart(2, "0")}
                      </span>
                      <Badge
                        variant="outline"
                        className={cn("border px-2.5 py-0.5 text-[11px] font-bold tracking-wide", bgClass, colorClass)}
                      >
                        {job.domain}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] text-white/50">
                      {job.teamType === "team" ? (
                        <>
                          <Users aria-hidden="true" className="size-3" />
                          {t("teamLabel")}
                        </>
                      ) : (
                        <>
                          <User aria-hidden="true" className="size-3" />
                          {t("soloLabel")}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Название */}
                  <h3 className="text-sm leading-snug font-semibold text-white">
                    {t(`jobs.${job.domainKey}.projectTitle`)}
                  </h3>

                  {/* Архитектура */}
                  {job.architecture && <p className="text-muted-foreground/50 mt-auto text-xs">{job.architecture}</p>}

                  {/* Стек (первые 4) */}
                  <ul
                    aria-label={t("stackLabel")}
                    className={cn("flex flex-wrap gap-1.5", !job.architecture && "mt-auto")}
                  >
                    {job.stack.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className={cn(
                          "inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium tracking-wide transition-colors",
                          stackBadgeClass,
                        )}
                      >
                        {tech}
                      </li>
                    ))}
                    {job.stack.length > 4 && (
                      <li
                        className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/30"
                        aria-label={`ещё ${job.stack.length - 4}`}
                      >
                        <span aria-hidden="true">+{job.stack.length - 4}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </GlowCard>
            </MotionWrapper>
          );
        })}
      </div>

      {/* Кнопка Смотреть весь кейс */}
      <MotionWrapper
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex justify-center"
      >
        <Link
          href="/experience"
          className="group border-primary/30 text-primary hover:bg-primary/5 inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-colors"
        >
          {t("viewAll")}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </MotionWrapper>
    </section>
  );
};
