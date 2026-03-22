"use client";

import { HTMLMotionProps, m } from "framer-motion";

/**
 * Универсальный клиентский остров для Framer Motion
 *
 * Принцип: никогда не используем `m.div` напрямую в компонентах.
 * Вся связь с Framer Motion проходит через эту обёртку.
 *
 * - В серверных компонентах: позволяет добавить анимацию без "use client"
 * - В клиентских компонентах: единая точка входа для всех motion-анимаций
 */
export const MotionWrapper = ({ children, ...props }: HTMLMotionProps<"div">) => {
  return <m.div {...props}>{children}</m.div>;
};
