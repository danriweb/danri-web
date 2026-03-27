import { useTranslations } from "next-intl";
import { HelpCircle } from "lucide-react";

import { StandardTooltip } from "@constructors";
import { GlowCard } from "@custom-ui";
import { cn } from "@styles";

import { Case } from "../model/case";

interface CaseCardProps {
  project: Case;
  index: number;
}

export const CaseCard = ({ project, index }: CaseCardProps) => {
  const tCard = useTranslations("entities.case.card");
  const tProject = useTranslations(`entities.case.list.${project.id}`);

  return (
    <GlowCard index={index} className="p-6 sm:p-8 md:p-10">
      {/* Шапка карточки */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-white/5 pb-5 md:pb-8 lg:flex-row">
        <h3 className="text-lg leading-snug font-bold text-white uppercase sm:text-xl md:text-2xl">
          {tProject("title")}
        </h3>

        <div className="flex flex-wrap justify-start gap-2 sm:justify-end lg:max-w-70">
          {project.meta.map((item, i) => {
            const IconComponent = item.icon || HelpCircle;
            const label = tProject(`meta.${i}.label`);
            return (
              <StandardTooltip
                key={label}
                trigger={
                  <button
                    type="button"
                    aria-label={`${tCard("more")}: ${label.trim()}`}
                    className="flex cursor-help items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-colors outline-none hover:bg-white/10 focus:bg-white/10 active:scale-95"
                  >
                    <IconComponent className="text-primary size-3.5" />
                    <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                      {label}
                    </span>
                  </button>
                }
              >
                {tProject(`meta.${i}.description`)}
              </StandardTooltip>
            );
          })}
        </div>
      </div>

      {/* Тело карточки */}
      <div className="grid grid-cols-1 gap-8 pt-6 md:pt-8 lg:grid-cols-2 lg:gap-12">
        {/* Левая колонка: Задача + Метрики */}
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-primary text-xs font-bold tracking-[3px] uppercase">{tCard("task")}</span>
            <p className="text-card-foreground text-sm leading-relaxed md:text-base">{tProject("task")}</p>
          </div>

          {/* Метрики кейса */}
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 pt-2 sm:gap-x-10 sm:pt-4">
            {project.metrics.map((metric, i) => {
              const val = tProject(`metrics.${i}.value`);
              const parts = val.split("→").map((s) => s.trim());
              const isTransition = parts.length === 2;
              const label = tProject(`metrics.${i}.label`);

              return (
                <div key={label} className="flex flex-col gap-1">
                  <dt className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase opacity-50">
                    {label}
                  </dt>
                  <dd className={cn("text-xl font-bold text-white md:text-2xl", metric.className)}>
                    {isTransition ? (
                      <>
                        <span aria-hidden="true">{val}</span>
                        <span className="sr-only">
                          {tCard("was")} {parts[0]}, {tCard("became")} {parts[1]}
                        </span>
                      </>
                    ) : (
                      val
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        {/* Правая колонка: Решение */}
        <div className="flex flex-col gap-3 lg:border-l lg:border-white/5 lg:pl-10">
          <span className="text-muted-foreground/50 text-xs font-bold tracking-[3px] uppercase">{tCard("solution")}</span>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">{tProject("solution")}</p>
        </div>
      </div>
    </GlowCard>
  );
};
