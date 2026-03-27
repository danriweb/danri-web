import eCommerceTwo from "@assets/images/e-commerce-2.png";
import eCommerce from "@assets/images/e-commerce.png";
import edTech from "@assets/images/edtech.png";
import fintech from "@assets/images/fintech.png";
import logistics from "@assets/images/logistics.png";
import { CheckCircle2, Code2, User, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

import { GlowCard, MotionWrapper } from "@custom-ui";
import { Badge } from "@shadcn";
import { cn } from "@styles";

import type { Job } from "../model/experience";

const domainColors: Record<string, string> = {
  "E-Commerce": "text-emerald-400",
  EdTech: "text-violet-400",
  Logistics: "text-blue-500",
  "FinTech / PFM": "text-sky-400",
};

const domainBgColors: Record<string, string> = {
  "E-Commerce": "bg-emerald-400/10 border-emerald-400/20",
  EdTech: "bg-violet-400/10 border-violet-400/20",
  Logistics: "bg-blue-600/10 border-blue-600/20",
  "FinTech / PFM": "bg-sky-400/10 border-sky-400/20",
};

const domainStackBadge: Record<string, string> = {
  "E-Commerce": "bg-emerald-400/8 border-emerald-400/20 text-emerald-300/80 hover:bg-emerald-400/15",
  EdTech: "bg-violet-400/8 border-violet-400/20 text-violet-300/80 hover:bg-violet-400/15",
  Logistics: "bg-blue-600/8 border-blue-600/20 text-blue-500/80 hover:bg-blue-600/15",
  "FinTech / PFM": "bg-sky-400/8 border-sky-400/20 text-sky-300/80 hover:bg-sky-400/15",
};

interface ExperienceJobCardProps {
  job: Job;
  index: number;
}

export const ExperienceJobCard = ({ job, index }: ExperienceJobCardProps) => {
  const t = useTranslations("widgets.experience");
  const colorClass = domainColors[job.domain] ?? "text-primary";
  const bgClass = domainBgColors[job.domain] ?? "bg-primary/10 border-primary/20";
  const stackBadgeClass = domainStackBadge[job.domain] ?? "bg-white/5 border-white/10 text-white/60";

  let bgImage: StaticImageData | null = null;
  if (job.domainKey === "e-commerce") {
    bgImage = eCommerce;
  } else if (job.domainKey === "edtech") {
    bgImage = edTech;
  } else if (job.domainKey === "logistics") {
    bgImage = logistics;
  } else if (job.domainKey === "fintech") {
    bgImage = fintech;
  } else if (job.domainKey === "e-commerce-2") {
    bgImage = eCommerceTwo;
  }

  return (
    <GlowCard index={index} className="p-6 md:p-8">
      <MotionWrapper
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.05 }}
        className="flex flex-col gap-6"
      >
        {/* Кастомный баннер-превью */}
        {bgImage && (
          <div aria-hidden="true" className="relative aspect-16/10 w-full shrink-0 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={bgImage}
              alt=""
              sizes="100vw"
              fill
              className="object-cover object-top opacity-60 transition-all duration-700 hover:scale-105 hover:opacity-100"
              placeholder="blur"
            />
            {/* Легкая маска для стилистики */}
            <div className="from-background/40 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent" />
          </div>
        )}

        {/* Шапка карточки */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            {/* Номер + домен */}
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="text-muted-foreground/40 font-mono text-sm font-bold">
                {String(job.number).padStart(2, "0")}
              </span>
              <Badge
                variant="outline"
                className={cn("border px-2.5 py-0.5 text-xs font-bold tracking-wide", bgClass, colorClass)}
              >
                {job.domain}
              </Badge>
            </div>

            {/* Тип проекта */}
            <h3 className="text-lg font-bold text-white md:text-xl">{t(`jobs.${job.domainKey}.projectTitle`)}</h3>
          </div>

          {/* Команда / соло */}
          <div className="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-white/60">
            {job.teamType === "team" ? (
              <>
                <Users aria-hidden="true" className="size-3.5" />
                {t("teamLabel")}
              </>
            ) : (
              <>
                <User aria-hidden="true" className="size-3.5" />
                {t("soloLabel")}
              </>
            )}
          </div>
        </div>

        {/* Описание проекта */}
        {t(`jobs.${job.domainKey}.description`) && (
          <p className="text-muted-foreground text-sm leading-relaxed">{t(`jobs.${job.domainKey}.description`)}</p>
        )}

        {/* Достижения */}
        {job.achievements && job.achievements.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground/50 text-[10px] font-bold tracking-[3px] uppercase">
              {t("achievementsLabel")}
            </p>
            <ul className="flex flex-col gap-2">
              {job.achievements.map((key) => (
                <li key={key} className="flex items-start gap-2.5">
                  <CheckCircle2 aria-hidden="true" className={cn("mt-0.5 size-4 shrink-0", colorClass)} />
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {t(`jobs.${job.domainKey}.achievements.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Архитектура */}
        <div className="flex items-center gap-2">
          <Code2 aria-hidden="true" className="text-muted-foreground/40 size-3.5 shrink-0" />
          <span 
            className="text-muted-foreground/60 text-xs"
            aria-label={`${t("architectureLabel")}: ${job.architecture}`}
          >
            <span aria-hidden="true">
              <span className="font-semibold">{t("architectureLabel")}:</span> {job.architecture}
            </span>
          </span>
        </div>

        {/* Стек */}
        <ul aria-label={t("stackLabel")} className="flex flex-wrap gap-2">
          {job.stack.map((tech) => (
            <li
              key={tech}
              className={cn(
                "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium tracking-wide transition-colors",
                stackBadgeClass,
              )}
            >
              {tech}
            </li>
          ))}
        </ul>
      </MotionWrapper>
    </GlowCard>
  );
};
