"use client";

import { useState } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@shadcn";
import { cn } from "@styles";

import { useIsTouch } from "@/shared/lib/viewport/useTouch";

import { StandardPopover } from "./StandardPopover";

interface StandardTooltipProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  className?: string;
}

/**
 * Стандартный компонент для текстовых подсказок (тултипов)
 * Оптимизирован для мобилок: рендерит тяжелый Popover только при первом клике
 */
export const StandardTooltip = ({
  trigger,
  children,
  side = "top",
  align = "center",
  className,
}: StandardTooltipProps) => {
  const isTouch = useIsTouch();
  const [hasInteracted, setHasInteracted] = useState(false);

  const contentClassName = cn(
    "text-muted-foreground w-fit max-w-60 border-white/10 bg-zinc-900 px-3 py-1.5 text-[11px] shadow-2xl z-50",
    className,
  );

  // На тач-устройствах: ленивый поповер (по клику)
  if (isTouch) {
    if (!hasInteracted) {
      return (
        <div onClick={() => setHasInteracted(true)} className="contents">
          {trigger}
        </div>
      );
    }

    return (
      <StandardPopover
        open={true}
        onOpenChange={(val: boolean) => !val && setHasInteracted(false)}
        trigger={trigger}
        side={side}
        align={align}
        className={contentClassName}
        sideOffset={8}
      >
        {children}
      </StandardPopover>
    );
  }

  // На десктопе: стандартный тултип (по ховеру)
  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent side={side} align={align} className={contentClassName} sideOffset={8}>
        {children}
      </TooltipContent>
    </Tooltip>
  );
};
