"use client";

import { useTranslations } from "next-intl";

import { Menu } from "lucide-react";
import { ReactNode, forwardRef, useState } from "react";

import { StandardSheet } from "@constructors";
import { useMounted } from "@dom";
import { Button } from "@shadcn";
import { cn } from "@styles";

const BurgerButton = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>((props, ref) => {
  const t = useTranslations("widgets.header");

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("text-foreground py-1 md:hidden", props.className)}
      {...props}
      ref={ref}
    >
      <Menu className="h-full! w-auto!" />
      <span className="sr-only">{t("mobileMenu")}</span>
    </Button>
  );
});
BurgerButton.displayName = "BurgerButton";

interface MobileMenuProps {
  children: (props: { close: () => void }) => ReactNode;
}

export const MobileMenu = ({ children }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();

  const close = () => setOpen(false);

  if (!mounted) {
    return <BurgerButton />;
  }

  return (
    <StandardSheet open={open} onOpenChange={setOpen} trigger={<BurgerButton />}>
      {children({ close })}
    </StandardSheet>
  );
};
