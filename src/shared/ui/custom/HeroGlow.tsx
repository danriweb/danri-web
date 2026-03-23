"use client";

import { usePathname } from "@/i18n/routing";

export const HeroGlow = () => {
  const pathname = usePathname();

  // Показывать только на главной странице
  if (pathname !== "/") return null;

  return (
    <div className="pointer-events-none absolute top-0 left-1/2 z-[-1] h-125 w-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#0073ff_0%,transparent_100%)] opacity-40 select-none sm:h-175" />
  );
};
