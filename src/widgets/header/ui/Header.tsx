"use client";

import Link from "next/link";

import { cn } from "@styles";
import { useSmoothScroll } from "@viewport";

import { MobileMenu } from "./MobileMenu";

const navItems = [
  { href: "#processes", label: "Процессы" },
  { href: "#cases", label: "Кейсы" },
  { href: "#stack", label: "Стек" },
  { href: "#about", label: "Обо мне" },
  { href: "#contact", label: "Контакты", isAccent: true },
];

const NavItem = ({
  href,
  label,
  isAccent,
  className,
  onClick,
  onItemClick,
}: {
  href: string;
  label: string;
  isAccent?: boolean;
  className?: string;
  onClick: (e: React.MouseEvent) => void;
  onItemClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={(e) => {
      onClick(e);
      onItemClick?.();
    }}
    className={cn(
      "hover:text-foreground inline-flex items-center justify-center text-xs tracking-[2px] transition-colors",
      isAccent ? "text-primary" : "text-muted-foreground",
      className,
    )}
  >
    {label}
  </Link>
);

const Navigation = ({
  className,
  itemClassName,
  onItemClick,
}: {
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
}) => {
  const scrollTo = useSmoothScroll();

  return (
    <nav className={className} aria-label="Основное меню">
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          {...item}
          className={itemClassName}
          onClick={scrollTo(item.href)}
          onItemClick={onItemClick}
        />
      ))}
    </nav>
  );
};

export const Header = () => {
  return (
    <header className="bg-card/80 border-border sticky top-0 z-50 flex w-full flex-col items-center border-b px-4 py-4 backdrop-blur-2xl sm:px-6 md:px-8 md:py-5 lg:px-12 lg:py-6">
      <div className="flex w-full max-w-300 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label="Danri Web - на главную">
            <span aria-hidden="true" className="font-funnel text-primary text-xl font-bold tracking-[2px]">
              {"</>"}
            </span>
            <span className="font-funnel text-foreground text-xl font-extrabold tracking-[4px]">DANRIWEB</span>
          </Link>
        </div>

        {/* Мобильная навигация */}
        <MobileMenu>
          {({ close }) => (
            <Navigation
              className="mt-12 flex flex-col items-center gap-4"
              itemClassName="text-xl py-4 w-full"
              onItemClick={close}
            />
          )}
        </MobileMenu>

        {/* Десктопная навигация */}
        <Navigation className="hidden items-center gap-8 md:flex" />
      </div>
    </header>
  );
};
