"use client";

import * as React from "react";

/*
  Хук для определения поддержки сенсорного ввода (Touch Devices)
  Включает смартфоны, планшеты и тач-панели
  Использует медиа-запрос (pointer: coarse) для проверки "грубого" (пальцевого) ввода
*/
export function useIsTouch() {
  const [isTouch, setIsTouch] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia("(pointer: coarse)");
    const onChange = () => {
      setIsTouch(mql.matches);
    };
    mql.addEventListener("change", onChange);
    setIsTouch(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isTouch;
}
