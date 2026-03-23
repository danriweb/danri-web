"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { useSmoothScroll } from "@viewport";

import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";

export const Logo = () => {
  const pathname = usePathname();
  const scrollTo = useSmoothScroll();
  const t = useTranslations("widgets.header");

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      scrollTo("hero")(e);
    }
  };

  return (
    <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3" aria-label={t("logo")}>
      <Image src="/logo.svg" alt="" width={28} height={28} aria-hidden="true" className="h-7 w-7 object-contain" />
      <span className="font-inter text-foreground text-xl font-extrabold">DANRIWEB</span>
    </Link>
  );
};
