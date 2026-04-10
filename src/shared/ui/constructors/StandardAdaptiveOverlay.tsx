"use client";

import * as React from "react";

import { useMounted } from "@dom";
import { useAdaptiveOverlay } from "@viewport";

import { StandardDialog } from "./StandardDialog";
import { StandardDrawer } from "./StandardDrawer";

interface StandardAdaptiveOverlayProps {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  drawerClassName?: string;
  expectedHeight?: number;
}

/**
 * Адаптивный конструктор оверлея
 * Автоматически переключается между Dialog и Drawer на основе ширины и высоты экрана
 */
export const StandardAdaptiveOverlay = ({
  expectedHeight = 700,
  className,
  drawerClassName,
  children,
  ...props
}: StandardAdaptiveOverlayProps) => {
  const isDrawerPreferred = useAdaptiveOverlay(expectedHeight);
  const mounted = useMounted();

  // Предотвращаем гидратационные ошибки и ждем определения типа оверлея
  if (!mounted || isDrawerPreferred === undefined) return null;

  if (isDrawerPreferred) {
    return (
      <StandardDrawer className={drawerClassName} {...props}>
        {children}
      </StandardDrawer>
    );
  }

  return (
    <StandardDialog className={className} {...props}>
      {children}
    </StandardDialog>
  );
};
