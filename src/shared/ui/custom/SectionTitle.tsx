import { ReactNode } from "react";

import { SectionHeader, SectionTag } from "@custom-ui";
import { cn } from "@styles";

interface SectionTitleProps {
  tag: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3";
}

/**
 * Составной компонент заголовка секции.
 */
export const SectionTitle = ({ tag, title, description, className, id, as }: SectionTitleProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <SectionTag>{tag}</SectionTag>
      <SectionHeader title={title} description={description} id={id} as={as} />
    </div>
  );
};
