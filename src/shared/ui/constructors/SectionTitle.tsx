import { ReactNode } from "react";

import { SectionHeader, SectionTag } from "@custom-ui";
import { cn } from "@styles";

interface SectionTitleProps {
  tag: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Составной компонент заголовка секции.
 * Соединяет SectionTag и SectionHeader.
 */
export const SectionTitle = ({ tag, title, description, className, id }: SectionTitleProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <SectionTag>{tag}</SectionTag>
      <SectionHeader title={title} description={description} id={id} />
    </div>
  );
};
