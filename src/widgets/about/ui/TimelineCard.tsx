import { MotionWrapper } from "@custom-ui";
import { cn } from "@styles";

import { TimelineItem } from "../model/about";

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isLast: boolean;
}

/**
 * Одна ячейка вертикального тайм-лайна.
 * Server Component - анимация через клиентский MotionCardWrapper.
 */
export const TimelineCard = ({ item, index, isLast }: TimelineCardProps) => {
  return (
    <MotionWrapper
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative flex gap-6 md:gap-10"
    >
      {/* Вертикальная линия + точка */}
      <div className="flex flex-col items-center">
        <div className="bg-primary relative z-10 size-3 shrink-0 rounded-full ring-4 ring-white/5" />
        {!isLast && <div className="bg-primary/20 mt-1 w-px flex-1" />}
      </div>

      {/* Содержимое */}
      <div className={cn("flex flex-col gap-1.5 pb-10", isLast && "pb-0")}>
        <span className="text-primary text-xs font-bold tracking-[3px] uppercase">{item.year}</span>
        <h3 className="text-base font-bold text-white">{item.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
      </div>
    </MotionWrapper>
  );
};
