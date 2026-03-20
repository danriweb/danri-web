"use client";

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
 * Стандартный компонент для текстовых подсказок (тултипов).
 * На ПК работает как Tooltip (при наведении), на мобильных
 * и тач-устройствах (планшетах) — как Popover (по клику),
 * что обеспечивает стабильность отображения на тач-устройствах.
 */
export const StandardTooltip = ({
  trigger,
  children,
  side = "top",
  align = "center",
  className,
}: StandardTooltipProps) => {
  const isTouch = useIsTouch();

  const contentClassName = cn(
    "text-muted-foreground w-fit max-w-60 border-white/10 bg-zinc-900 px-3 py-1.5 text-[11px] shadow-2xl z-50",
    className,
  );

  if (isTouch) {
    return (
      <StandardPopover trigger={trigger} side={side} align={align} className={contentClassName} sideOffset={8}>
        {children}
      </StandardPopover>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent side={side} align={align} className={contentClassName} sideOffset={8}>
        {children}
      </TooltipContent>
    </Tooltip>
  );
};
