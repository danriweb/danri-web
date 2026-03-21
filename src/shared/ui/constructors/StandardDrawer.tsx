"use client";

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@shadcn";
import { cn } from "@styles";

interface StandardDrawerProps {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * Стандартный компонент Drawer (шторка снизу) для проекта.
 */
export const StandardDrawer = ({
  trigger,
  children,
  className,
  title,
  description,
  open,
  onOpenChange,
}: StandardDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerContent className={cn("bg-card border-border px-4 pb-8 has-focus:pb-0 backdrop-blur-2xl", className)}>
        {(title || description) && (
          <DrawerHeader className={cn(!title && !description && "sr-only")}>
            {title && (
              <DrawerTitle className="text-xl font-bold tracking-wider text-white uppercase">{title}</DrawerTitle>
            )}
            {description && <DrawerDescription className="text-muted-foreground">{description}</DrawerDescription>}
          </DrawerHeader>
        )}
        <div className="no-scrollbar overflow-y-auto pb-4 has-focus:pb-0">{children}</div>
      </DrawerContent>
    </Drawer>
  );
};
