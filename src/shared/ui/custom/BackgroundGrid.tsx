"use client";

import { useEffect, useState } from "react";

import { cn } from "@styles";

import { HorizontalLine } from "./HorizontalLine";
import { LineAndDots } from "./LineAndDots";

interface BackgroundGridProps {
  className?: string;
  top?: number;
  index?: number;
}

export const BackgroundGrid = ({ className, top = 0, index = 0 }: BackgroundGridProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Получаем ширину окна без учета скролла
    const calculateWidth = () => {
      setWindowWidth(document.documentElement.clientWidth);
    };

    // Вызываем функцию при монтировании компонента
    calculateWidth();
    // Добавляем слушатель события resize
    window.addEventListener("resize", calculateWidth);

    // Удаляем слушатель события resize при размонтировании компонента
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  // Высота технического фона (количество интервалов * шаг + 1px выравнивания под точки)
  const height = 8 * 120 + 1;

  // Вычисляем центр окна
  const centerX = windowWidth / 2;
  // Вычисляем количество линий, которые нужно нарисовать
  const linesPerSide = Math.max(0, Math.ceil((centerX - 110) / 120));

  return (
    <div
      className={cn("pointer-events-none absolute w-full overflow-hidden", className)}
      style={{
        top: `${top}px`,
        height: `${height}px`,
        zIndex: -1 - index,
      }}
    >
      {/* Горизонтальные линии, +1 для конечной линии */}
      {[...Array(9)].map((_, i) => (
        <HorizontalLine key={i} style={{ top: `${(i + 1) * 120}px` }} />
      ))}
      {/* Группы линий, расходящиеся от центра */}
      {windowWidth > 0 && (
        <>
          {/* Вправо от центра */}
          {[...Array(linesPerSide)].map((_, i) => (
            <LineAndDots key={`right-${i}`} style={{ left: `${centerX + 60 + i * 120}px` }} />
          ))}
          {/* Влево от центра */}
          {[...Array(linesPerSide)].map((_, i) => (
            <LineAndDots key={`left-${i}`} style={{ left: `${centerX - 60 - i * 120}px` }} />
          ))}
        </>
      )}
    </div>
  );
};
