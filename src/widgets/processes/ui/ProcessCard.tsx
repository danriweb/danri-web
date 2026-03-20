import { LucideIcon } from "lucide-react";

import { cn } from "@styles";
import { GlowCard } from "@custom-ui";


interface ProcessCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  className?: string;
}

/**
 * Карточка этапа процесса.
 */
export const ProcessCard = ({ id, title, description, icon: Icon, index, className }: ProcessCardProps) => {
  return (
    <GlowCard index={index} className={cn("p-8", className)}>
      <div className="flex flex-col gap-6">
        <div className="text-primary transition-transform duration-500 group-hover:scale-110">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span
              aria-hidden="true"
              className="text-muted-foreground text-xs font-bold tracking-wider uppercase opacity-50"
            >
              {id}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white uppercase">
              <span className="sr-only">Этап {id}: </span>
              {title}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </GlowCard>
  );
};
