import { ReactNode } from "react";

import { cn } from "@styles";

interface SectionTagProps {
  children: ReactNode;
  className?: string;
  showLines?: boolean;
}

/**
 * Тег секции с горизонтальными линиями по бокам.
 */
export const SectionTag = ({ children, className, showLines = true }: SectionTagProps) => {
  return (
    <div className={cn("text-primary flex items-center gap-4", className)}>
      {showLines && <div className="bg-primary/40 h-px w-8" />}
      <span className="text-sm font-medium tracking-[4px] whitespace-nowrap uppercase">{children}</span>
      {showLines && <div className="bg-primary/40 h-px w-8" />}
    </div>
  );
};
