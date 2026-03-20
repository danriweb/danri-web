"use client";

import { Menu } from "lucide-react";
import { forwardRef } from "react";

import { StandardSheet } from "@constructors";
import { useMounted } from "@dom";
import { Button } from "@shadcn";
import { cn } from "@styles";

const BurgerButton = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>((props, ref) => (
  <Button
    variant="ghost"
    size="icon"
    className={cn("text-foreground py-1 md:hidden", props.className)}
    {...props}
    ref={ref}
  >
    <Menu className="h-full! w-auto!" />
    <span className="sr-only">Открыть меню</span>
  </Button>
));
BurgerButton.displayName = "BurgerButton";

export const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  const mounted = useMounted();

  if (!mounted) {
    return <BurgerButton />;
  }

  return <StandardSheet trigger={<BurgerButton />}>{children}</StandardSheet>;
};
