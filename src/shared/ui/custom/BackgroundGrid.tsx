"use client";

import gridSvg from "@assets/svg/grid.svg";
import { memo } from "react";

import { cn } from "@styles";

interface BackgroundGridProps {
  className?: string;
  /** З-индекс сетки (default: -1) */
  index?: number;
}

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
