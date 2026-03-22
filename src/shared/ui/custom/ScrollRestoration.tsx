"use client";

import { useEffect } from "react";

const KEY = "scroll-y";

/**
 * Восстановление позиции скролла при перезагрузке страницы.
 */
export const ScrollRestoration = () => {
  useEffect(() => {
    // Отключаем браузерное восстановление - Next.js всё равно обнуляет его
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Восстанавливаем сохранённую позицию
    const saved = sessionStorage.getItem(KEY);
    if (saved) {
      const y = parseInt(saved, 10);
      sessionStorage.removeItem(KEY);

      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: "instant" });
      });
    }

    // Сохраняем позицию перед уходом со страницы / перезагрузкой
    const onBeforeUnload = () => {
      sessionStorage.setItem(KEY, String(window.scrollY));
    };

    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  return null;
};
