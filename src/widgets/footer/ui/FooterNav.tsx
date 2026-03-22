import { type NavItem, navItems } from "@data";
import Link from "next/link";

export const FooterNav = () => (
  <nav aria-label="Навигация по сайту">
    <ul className="flex flex-wrap gap-x-8 gap-y-3">
      {navItems.map((item: NavItem) => (
        <li key={item.href}>
          <Link
            href={item.href.startsWith("#") ? `/${item.href}` : item.href}
            className={
              item.isAccent
                ? "text-primary text-xs font-bold tracking-[2px] uppercase transition-opacity hover:opacity-70"
                : "text-muted-foreground hover:text-foreground text-xs tracking-[2px] uppercase transition-colors"
            }
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
