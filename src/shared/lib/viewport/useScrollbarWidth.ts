"use client";

import { useEffect, useState } from "react";

/**
 * Хук для получения ширины скроллбара
 */
export const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      // Ширина окна со скроллом минус ширина окна без скролла
      const width = window.innerWidth - document.documentElement.clientWidth;
      setScrollbarWidth(width);
    };

    calculateScrollbarWidth();
    window.addEventListener("resize", calculateScrollbarWidth);

    return () => {
      window.removeEventListener("resize", calculateScrollbarWidth);
    };
  }, []);

  return scrollbarWidth;
};
