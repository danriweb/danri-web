import { HelpCircle } from "lucide-react";

import { StandardTooltip } from "@constructors";
import { GlowCard } from "@custom-ui";
import { cn } from "@styles";

import { Case } from "../model";

interface CaseCardProps {
  project: Case;
  index: number;
}

export const CaseCard = ({ project, index }: CaseCardProps) => {
  return (
    <GlowCard index={index} className="px-5 py-6 sm:px-8 sm:py-8 md:px-12 md:py-14">
      {/* Шапка карточки */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-white/5 pb-5 sm:gap-6 md:pb-10 lg:flex-row lg:items-start">
        <h3 className="text-xl leading-tight font-bold text-white uppercase sm:text-2xl md:text-3xl">
          {project.title}
        </h3>

        <div className="flex flex-wrap justify-start gap-2 sm:justify-end lg:max-w-70">
          {project.meta.map((item) => {
            const IconComponent = item.icon || HelpCircle;
            return (
              <StandardTooltip
                key={item.label}
                trigger={
                  <button
                    type="button"
                    aria-label={`Подробнее: ${item.label.trim()}`}
                    className="flex cursor-help items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-colors outline-none hover:bg-white/10 focus:bg-white/10 active:scale-95"
                  >
                    <IconComponent className="text-primary size-3.5" />
                    <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                      {item.label}
                    </span>
                  </button>
                }
              >
                {item.description}
              </StandardTooltip>
            );
          })}
        </div>
      </div>

      {/* Тело карточки */}
      <div className="grid grid-cols-1 gap-6 pt-5 sm:gap-8 sm:pt-8 md:gap-14 md:pt-14 lg:grid-cols-2 lg:gap-20">
        {/* Левая колонка: Задача + Метрики */}
        <div className="flex flex-col gap-5 md:gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-primary text-xs font-bold tracking-[3px] uppercase">Задача</span>
            <p className="text-card-foreground text-sm leading-relaxed md:text-lg">{project.task}</p>
          </div>

          {/* Метрики кейса */}
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 pt-3 sm:gap-x-12 sm:gap-y-8 sm:pt-4">
            {project.metrics.map((metric) => {
              const parts = metric.value.split("→").map((s) => s.trim());
              const isTransition = parts.length === 2;

              return (
                <div key={metric.label} className="flex flex-col gap-1">
                  <dt className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase opacity-50">
                    {metric.label}
                  </dt>
                  <dd className={cn("text-xl font-bold text-white md:text-2xl", metric.className)}>
                    {isTransition ? (
                      <>
                        <span aria-hidden="true">{metric.value}</span>
                        <span className="sr-only">
                          было {parts[0]}, стало {parts[1]}
                        </span>
                      </>
                    ) : (
                      metric.value
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        {/* Правая колонка: Решение */}
        <div className="flex flex-col gap-4 lg:border-l lg:border-white/5 lg:pl-10">
          <span className="text-muted-foreground/50 text-xs font-bold tracking-[3px] uppercase">Решение</span>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">{project.solution}</p>
        </div>
      </div>
    </GlowCard>
  );
};
