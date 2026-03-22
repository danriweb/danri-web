"use client";

import { ComponentPropsWithoutRef } from "react";

import { Button } from "@shadcn";
import { useSmoothScroll } from "@viewport";

type ScrollButtonProps = Omit<ComponentPropsWithoutRef<typeof Button>, "onClick"> & {
  targetId: string;
};

/**
 * Клиентский остров: кнопка со smooth-scroll
 */
export const ScrollButton = ({ targetId, children, ...buttonProps }: ScrollButtonProps) => {
  const scrollTo = useSmoothScroll();

  return (
    <Button onClick={scrollTo(targetId)} {...buttonProps}>
      {children}
    </Button>
  );
};
