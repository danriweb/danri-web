import { useTranslations } from "next-intl";
import { type NavItem, navItems } from "@data";
import Link from "next/link";

const navItemKeys = ["cases", "about", "processes", "stack", "contact"] as const;

export const FooterNav = () => {
  const tNav = useTranslations("shared.nav");

  return (
    <nav aria-label="Навигация по сайту">
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {navItems.map((item: NavItem, index) => (
          <li key={item.href}>
            <Link
              href={item.href.startsWith("#") ? `/${item.href}` : item.href}
              className={
                item.isAccent
                  ? "text-primary text-xs font-bold tracking-[2px] uppercase transition-opacity hover:opacity-70"
                  : "text-muted-foreground hover:text-foreground text-xs tracking-[2px] uppercase transition-colors"
              }
            >
              {tNav(navItemKeys[index])}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
