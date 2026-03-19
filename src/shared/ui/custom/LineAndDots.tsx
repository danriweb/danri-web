"use client";

import { cn } from "@styles";

interface LineAndDotsProps {
  className?: string;
  style?: React.CSSProperties;
}

const Dot = ({ className }: { className?: string }) => {
  return <div className={cn("h-0.75 w-0.75 bg-[#444444ff]", className)}></div>;
};

export const LineAndDots = ({ className, style }: LineAndDotsProps) => {
  return (
    <div className={cn("absolute flex h-fit w-0.75 flex-col items-center", className)} style={style}>
      {/*Точки*/}
      <Dot key={0} className="absolute top-0 bg-[#444444ff]" />
      <Dot key={1} className="absolute top-30 bg-[#444444ff]" />
      <Dot key={2} className="absolute top-60 bg-[#222222]" />
      <Dot key={3} className="absolute top-90 bg-[#1b1b1bff]" />
      <Dot key={4} className="absolute top-120 bg-[#1e1e1eff]" />
      <Dot key={5} className="absolute top-150 bg-[#1b1b1bff]" />
      <Dot key={6} className="absolute top-180 bg-[#222222]" />
      <Dot key={7} className="absolute top-210 bg-[#222222ff]" />
      <Dot key={8} className="absolute top-240 bg-[#444444ff]" />
      {/*Линия*/}
      <div className="h-240 w-px bg-[linear-gradient(to_top,#1a1b1c_0%,#09090a80_25%,#1a1b1c_50%,#09090a80_75%,#1a1b1c_100%)]"></div>
    </div>
  );
};
