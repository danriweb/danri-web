"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@shadcn";
import { cn } from "@styles";

interface StandardPopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  className?: string;
  sideOffset?: number;
}

/**
 * Стандартный компонент Popover для проекта.
 * Используется для более сложных меню или контента, открывающегося по клику.
 */
export const StandardPopover = ({
  trigger,
  children,
  side = "bottom",
  align = "center",
  className,
  sideOffset = 8,
}: StandardPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-card animate-in fade-in-0 zoom-in-95 z-50 flex w-72 flex-col gap-4 rounded-xl border-white/10 p-6 text-sm shadow-2xl backdrop-blur-xl",
          className,
        )}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};
