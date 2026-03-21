"use client";

import { memo } from "react";

import { cn } from "@styles";

import gridSvg from "@/shared/assets/svg/grid.svg";

interface BackgroundGridProps {
  className?: string;
  /** З-индекс сетки (default: -1) */
  index?: number;
}

/**
 * Оптимизированный компонент фоновой сетки
 */
export const BackgroundGrid = memo(({ className, index = 0 }: BackgroundGridProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 select-none", className)}
      style={{
        zIndex: -1 - index,
        backgroundImage: `url(${gridSvg.src || gridSvg})`,
        backgroundSize: "864px 864px",
        backgroundPosition: "center top",
        backgroundRepeat: "repeat",
      }}
    />
  );
});

BackgroundGrid.displayName = "BackgroundGrid";
