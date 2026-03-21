"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@shadcn";
import { cn } from "@styles";

interface StandardDialogProps {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * Стандартный компонент Dialog (модальное окно) для проекта.
 */
export const StandardDialog = ({
  trigger,
  children,
  className,
  title,
  description,
  open,
  onOpenChange,
}: StandardDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className={cn("bg-card border-border backdrop-blur-2xl", className)}>
        {(title || description) && (
          <DialogHeader className={cn(!title && !description && "sr-only")}>
            {title && (
              <DialogTitle className="text-xl font-bold tracking-wider text-white uppercase">{title}</DialogTitle>
            )}
            {description && <DialogDescription className="text-muted-foreground">{description}</DialogDescription>}
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
};
