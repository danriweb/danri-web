import { ReactNode } from "react";

import { cn } from "@styles";

interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3";
}

/**
 * Заголовок секции с заголовком и подзаголовком (описанием).
 */
export const SectionHeader = ({ title, description, className, id, as: Tag = "h2" }: SectionHeaderProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-4 text-center", className)}>
      <Tag id={id} className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
        {title}
      </Tag>
      {description && <p className="text-muted-foreground max-w-2xl text-base md:text-lg">{description}</p>}
    </div>
  );
};
