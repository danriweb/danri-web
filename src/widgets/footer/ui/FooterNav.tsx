import { type NavItem, navItems } from "@data";
import { Link } from "@i18n";
import { useTranslations } from "next-intl";

const navItemKeys = ["about", "experience", "cases", "stack", "processes", "contact"] as const;

export const FooterNav = () => {
  const tNav = useTranslations("shared.nav");
  const tAria = useTranslations("shared.aria");

  return (
    <nav aria-label={tAria("footerNav")}>
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
