import { ElementType } from "react";

import { GlowCard } from "@custom-ui";
import { cn } from "@styles";

interface PrincipleCardProps {
  icon: ElementType;
  title: string;
  description: string;
  index: number;
  className?: string;
}

export const PrincipleCard = ({ icon: Icon, title, description, index, className }: PrincipleCardProps) => {
  return (
    <GlowCard index={index} className={cn("p-8", className)}>
      <div className="flex flex-col gap-6">
        <div className="text-primary transition-transform duration-500 group-hover:scale-110">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold tracking-tight text-white uppercase sm:text-base md:text-lg">{title}</h3>
          <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">{description}</p>
        </div>
      </div>
    </GlowCard>
  );
};
