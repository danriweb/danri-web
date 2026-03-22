"use client";

import Image from "next/image";
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
    <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3" aria-label="Danri Web - на главную">
      <Image src="/favicon.svg" alt="" width={28} height={28} aria-hidden="true" className="h-7 w-7 object-contain" />
      <span className="font-inter text-foreground text-xl font-extrabold">DANRIWEB</span>
    </Link>
  );
};
