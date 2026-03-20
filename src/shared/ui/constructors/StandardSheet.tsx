"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@shadcn";
import { cn } from "@styles";

interface StandardSheetProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  title?: string;
  description?: string;
}

/**
 * Стандартный компонент Sheet для проекта.
 * Включает в себя общие стили: темный фон, блюр и полноэкранный режим на мобильных (<480px).
 */
export const StandardSheet = ({
  trigger,
  children,
  side = "right",
  className,
  title = "Меню",
  description = "Навигация по сайту",
}: StandardSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side={side} className={cn("bg-card border-border max-xs:w-full! backdrop-blur-xl", className)}>
        <SheetHeader className="sr-only">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
