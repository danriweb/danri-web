"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSmoothScroll } from "@viewport";

export const Logo = () => {
  const pathname = usePathname();
  const scrollTo = useSmoothScroll();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      scrollTo("hero")(e);
    }
  };

  return (
    <Link
      href="/"
      onClick={handleLogoClick}
      className="flex items-center gap-2"
      aria-label="Danri Web - на главную"
    >
      <span aria-hidden="true" className="font-funnel text-primary text-xl font-bold tracking-[2px]">
        {"</>"}
      </span>
      <span className="font-funnel text-foreground text-xl font-extrabold tracking-[4px]">DANRIWEB</span>
    </Link>
  );
};
