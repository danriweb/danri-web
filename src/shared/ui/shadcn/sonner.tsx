"use client";

import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="text-primary/80 size-5" />,
        info: <InfoIcon className="text-primary/80 size-5" />,
        warning: <TriangleAlertIcon className="text-primary/80 size-5" />,
        error: <OctagonXIcon className="text-primary/80 size-5" />,
        loading: <Loader2Icon className="text-primary/80 size-5 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast group border-white/10! sm:p-5!",
          title: "text-primary/80! text-[15px]! font-bold! tracking-wide!",
          description: "text-white/90! text-sm! leading-relaxed! mt-1.5!",
          icon: "text-primary/80! mt-0.5!",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
