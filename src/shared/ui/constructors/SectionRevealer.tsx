"use client";

import { m, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface SectionRevealerProps {
  children: ReactNode;
  index?: number;
  rootMargin?: string;
}

/**
 * SEO-FRIENDLY Оркестратор рендера.
 * На сервере рендерит всё сразу (для SEO).
 * На клиенте управляет "тяжестью" гидратации.
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
    // Асинхронно помечаем, что мы на клиенте, чтобы не блокировать основной поток
    setTimeout(() => {
      setIsMounted(true);
    }, 0);

    // Постепенная активация логики/анимаций в фоне
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, index * 400);

    return () => clearTimeout(timer);
  }, [index]);

  const isActive = isInView || isRevealed;

  return (
    <div
      ref={ref}
      className="w-full"
      style={{
        //content-visibility позволяет браузеру пропустить рендер невидимых блоков,
        //даже если они есть в DOM. Это ПИК производительности для SEO-сайтов.
        contentVisibility: isActive ? "visible" : "auto",
        containIntrinsicSize: "0 500px", // Резервируем примерную высоту, чтобы не прыгал скролл
      }}
    >
      {/* 
        Мы рендерим контент ВСЕГДА, если мы на сервере (!isMounted), 
        либо если секция активирована. Так Google увидит всё.
      */}
      {!isMounted || isActive ? (
        <m.div initial={isMounted ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          {children}
        </m.div>
      ) : (
        <div className="h-50" /> // Заглушка только для клиента на время ожидания очереди
      )}
    </div>
  );
};
