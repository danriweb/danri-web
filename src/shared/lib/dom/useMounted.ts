"use client";

import { useEffect, useState } from "react";

/**
 * Хук для проверки, примонтирован ли компонент в браузере.
 * Полезен для предотвращения ошибок гидратации в Next.js.
 */
export const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  return mounted;
};
