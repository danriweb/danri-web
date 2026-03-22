"use client";

import { useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

import { MotionWrapper } from "./MotionWrapper";

interface SectionRevealerProps {
  children: ReactNode;
  index?: number;
  rootMargin?: string;
}

/**
 * SEO-FRIENDLY Оркестратор рендера.
 * На сервере рендерит всё сразу (для SEO).
 * На клиенте управляет анимацией появления секций.
 *
 * ВАЖНО: контент всегда находится в DOM — это обеспечивает корректную
 * высоту страницы и позволяет браузеру правильно восстанавливать позицию скролла.
 */
export const SectionRevealer = ({ children, index = 0, rootMargin = "200px 0px" }: SectionRevealerProps) => {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isInView = useInView(ref, {
    once: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    margin: rootMargin as any,
  });

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);

    const timer = setTimeout(() => setIsRevealed(true), index * 400);
    return () => clearTimeout(timer);
  }, [index]);

  const isActive = isInView || isRevealed;

  return (
    <div ref={ref} className="w-full">
      {/*
        Контент ВСЕГДА в DOM — браузер знает реальную высоту страницы.
        Анимация только через opacity: до активации секция прозрачна,
        после — плавно появляется.
      */}
      <MotionWrapper
        initial={isMounted ? { opacity: 0 } : false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </MotionWrapper>
    </div>
  );
};
