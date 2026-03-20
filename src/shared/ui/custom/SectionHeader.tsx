import { ReactNode } from "react";

import { cn } from "@styles";

interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Заголовок секции с заголовком и подзаголовком (описанием).
 */
export const SectionHeader = ({ title, description, className, id }: SectionHeaderProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-4 text-center", className)}>
      <h2 id={id} className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && <div className="text-muted-foreground max-w-2xl text-base md:text-lg">{description}</div>}
    </div>
  );
};
