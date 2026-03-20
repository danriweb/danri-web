import { m } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { cn } from "@styles";

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
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group relative overflow-clip rounded-[12px] bg-white/5 p-px", className)}
    >
      {/* Анимированный градиент бордера */}
      <m.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          background: "conic-gradient(from 0deg, transparent 0%, var(--primary) 15%, transparent 30%)",
        }}
        className="absolute top-1/2 left-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 opacity-20 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div
        className={cn(
          "bg-card relative z-10 flex h-full w-full flex-col gap-6 rounded-[11px] p-8 transition-all duration-500 select-none md:select-text",
        )}
      >
        {/* Градиенты фона */}
        <div className="absolute inset-0 rounded-[11px] bg-linear-to-br from-white/5 via-transparent to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
        <div className="from-primary/15 absolute inset-0 rounded-[11px] bg-linear-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Контент */}
        <div className="relative z-10 flex flex-col gap-6">
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

        {/* Свечение при наведении */}
        <div className="bg-primary/10 absolute -right-20 -bottom-20 size-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </m.div>
  );
};
