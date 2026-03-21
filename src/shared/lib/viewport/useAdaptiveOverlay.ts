"use client";

import { useEffect, useState } from "react";

import { useIsTablet } from "./useMobile";

/**
 * Хук для адаптивного переключения между Dialog и Drawer.
 * Возвращает true, если нужно использовать Drawer (шторку),
 * и false, если Dialog (модальное окно).
 *
 * Переключается на Drawer, если:
 * 1. Экран соответствует размеру планшета/мобильного устройства.
 * 2. Высота окна меньше указанной (expectedHeight), что может привести к обрезке диалога.
 */
export function useAdaptiveOverlay(expectedHeight: number = 700) {
  const isTablet = useIsTablet();
  const [isHeightConstrained, setIsHeightConstrained] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Проверяем, поместится ли диалог по высоте
      setIsHeightConstrained(window.innerHeight < expectedHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [expectedHeight]);

  // Если состояние еще не определено (гидратация), возвращаем undefined
  if (isTablet === undefined) return undefined;

  return isTablet || isHeightConstrained;
}
