"use client";

import { usePathname } from "@i18n";
import { Link } from "@i18n";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { useSmoothScroll } from "@viewport";

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
