"use client";

import { cn } from "@styles";

interface HorizontalLineProps {
  className?: string;
  style?: React.CSSProperties;
}

export const HorizontalLine = ({ className, style }: HorizontalLineProps) => {
  return (
    <div className={cn("absolute h-fit w-fit", className)} style={style}>
      {/*Линия*/}
      <div className="h-px w-screen bg-[#ffffff1a]"></div>
    </div>
  );
};
