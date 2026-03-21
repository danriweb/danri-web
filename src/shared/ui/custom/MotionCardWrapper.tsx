"use client";

import { m, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionCardWrapperProps {
  children: ReactNode;
  className?: string;
  initial?: HTMLMotionProps<"div">["initial"];
  whileInView?: HTMLMotionProps<"div">["whileInView"];
  viewport?: HTMLMotionProps<"div">["viewport"];
  transition?: HTMLMotionProps<"div">["transition"];
}

/**
 * Простая клиентская обертка для анимаций.
 */
export const MotionCardWrapper = ({ 
  children, 
  className,
  initial,
  whileInView,
  viewport,
  transition
}: MotionCardWrapperProps) => {
  return (
    <m.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={className}
    >
      {children}
    </m.div>
  );
};
