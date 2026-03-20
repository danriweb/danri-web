"use client";

import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/*
  Этот хук используется для определения, является ли текущий viewport мобильным.
  Он использует window.matchMedia API для отслеживания изменений в размере viewport.
  Когда размер viewport изменяется, он обновляет состояние isMobile.
*/
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
