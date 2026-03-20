"use client";

import { MouseEvent } from "react";

/**
 * Хук для плавной прокрутки к элементу по его ID.
 * Предотвращает стандартное поведение ссылки и удаляет '#' из ID, если он передан.
 */
export const useSmoothScroll = () => {
  const scrollTo = (id: string) => (e: MouseEvent) => {
    e.preventDefault();

    // Убираем #, если он есть в начале
    const cleanId = id.startsWith("#") ? id.slice(1) : id;
    const element = document.getElementById(cleanId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollTo;
};
