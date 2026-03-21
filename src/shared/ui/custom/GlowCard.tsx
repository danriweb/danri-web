import { ReactNode } from "react";

import { cn } from "@styles";

import { MotionCardWrapper } from "./MotionCardWrapper";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  index: number;
  className?: string;
  wrapperClassName?: string;
  maxWidth?: string;
}

/**
 * Универсальная карточка — Server Component.
 * Использует MotionCardWrapper для анимации.
 */
export const GlowCard = ({ children, index, className, wrapperClassName, maxWidth, ...props }: GlowCardProps) => {
  return (
    <MotionCardWrapper
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group relative overflow-clip rounded-[20px] bg-white/5 p-0.5", wrapperClassName, maxWidth)}
    >
      {/* Анимированный градиент бордера — CSS анимация на ховере */}
      <div className="absolute inset-x-0 inset-y-0 overflow-hidden rounded-[20px]">
        <div
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, var(--primary) 15%, transparent 30%)",
          }}
          className={cn(
            "absolute top-1/2 left-1/2 size-[350%] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] opacity-0 transition-opacity duration-500",
            "group-hover:opacity-100",
          )}
        />
      </div>

      <div
        className={cn(
          "bg-card relative z-10 flex h-full w-full flex-col rounded-[18px] transition-all duration-500 select-none md:select-text",
          className,
        )}
        {...props}
      >
        {/* Градиенты фона */}
        <div className="absolute inset-0 rounded-[18px] bg-linear-to-br from-white/5 via-transparent to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
        <div className="from-primary/15 pointer-events-none absolute inset-0 rounded-[18px] bg-linear-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Контент */}
        <div className="relative z-20 flex h-full w-full flex-col">{children}</div>

        {/* Свечение при наведении (в углу) */}
        <div className="bg-primary/10 pointer-events-none absolute -right-20 -bottom-20 size-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </MotionCardWrapper>
  );
};
