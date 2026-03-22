import { GlowCard } from "@custom-ui";
import { cn } from "@styles";

import { Principle } from "../model/about";

interface PrincipleCardProps {
  principle: Principle;
  index: number;
  className?: string;
}

/**
 * Карточка принципа - по образцу ProcessCard, Server Component.
 */
export const PrincipleCard = ({ principle, index, className }: PrincipleCardProps) => {
  const Icon = principle.icon;

  return (
    <GlowCard index={index} className={cn("p-8", className)}>
      <div className="flex flex-col gap-6">
        <div className="text-primary transition-transform duration-500 group-hover:scale-110">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold tracking-tight text-white uppercase">{principle.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
        </div>
      </div>
    </GlowCard>
  );
};
