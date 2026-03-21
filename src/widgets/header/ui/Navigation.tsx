"use client";

import { m } from "framer-motion";
import { Activity, Binary, Briefcase, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaTelegram } from "react-icons/fa";

import { cn } from "@styles";
import { useSmoothScroll } from "@viewport";

/**
 * Основные пункты навигации
 */
export const navItems = [
  { href: "#processes", label: "Процессы", icon: Activity },
  { href: "#cases", label: "Кейсы", icon: Briefcase },
  { href: "#stack", label: "Стек", icon: Binary },
  { href: "#about", label: "Обо мне", icon: User },
  { href: "/contact", label: "Контакты", isAccent: true, icon: Mail },
];

interface NavItemProps {
  href: string;
  label: string;
  isAccent?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  className?: string;
  onClick: (e: React.MouseEvent) => void;
  onItemClick?: () => void;
  index?: number;
  isMobile?: boolean;
}

/**
 * Элемент навигационной ссылки
 */
const NavItem = ({
  href,
  label,
  isAccent,
  icon: Icon,
  className,
  onClick,
  onItemClick,
  index = 0,
  isMobile,
}: NavItemProps) => {
  const pathname = usePathname();

  // Если мы не на главной, якорная ссылка должна вести на корень /#anchor
  const actualHref = href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  // --- Десктопная версия (простая ссылка) ---
  if (!isMobile) {
    return (
      <Link
        href={actualHref}
        onClick={onClick}
        className={cn(
          "hover:text-foreground inline-flex items-center justify-center text-xs tracking-[2px] uppercase transition-colors",
          isAccent ? "text-primary font-bold" : "text-muted-foreground",
          className,
        )}
      >
        {label}
      </Link>
    );
  }

  // --- Мобильная версия (с иконкой и анимацией) ---
  return (
    <m.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="w-full"
    >
      <Link
        href={actualHref}
        onClick={(e) => {
          onClick(e);
          onItemClick?.();
        }}
        className={cn(
          "group relative flex items-center gap-4 rounded-xl px-4 py-4 transition-all duration-300",
          isAccent
            ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 border"
            : "text-muted-foreground hover:bg-white/5 hover:text-white",
          className,
        )}
      >
        {/* Иконка блока */}
        {Icon && (
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-lg border transition-colors",
              isAccent ? "border-primary/20 bg-primary/5" : "border-white/5 bg-white/5 group-hover:border-white/10",
            )}
          >
            <Icon className="size-5" />
          </div>
        )}

        {/* Название и индикатор наведения */}
        <span className="font-funnel text-lg font-medium tracking-[2px] uppercase">{label}</span>

        {!isAccent && (
          <m.div
            className="bg-primary absolute right-4 size-1.5 rounded-full opacity-0"
            initial={false}
            whileHover={{ opacity: 1, scale: 1.2 }}
          />
        )}
      </Link>
    </m.div>
  );
};

interface NavigationProps {
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
  isMobile?: boolean;
}

/**
 * Общий компонент навигации для хедера и мобильного меню
 */
export const Navigation = ({ className, itemClassName, onItemClick, isMobile }: NavigationProps) => {
  const scrollTo = useSmoothScroll();
  const pathname = usePathname();

  return (
    <nav
      className={cn(isMobile ? "flex flex-col gap-2" : "flex items-center gap-8", className)}
      aria-label="Основное меню"
    >
      {/* Список ссылок */}
      {navItems.map(
        (item, index) =>
          (!isMobile || item.href !== "/dummy") && (
            <NavItem
              key={item.href}
              {...item}
              index={index}
              isMobile={isMobile}
              className={itemClassName}
              onClick={(e) => {
                // Если мы на главной, используем плавный скролл
                if (item.href.startsWith("#") && pathname === "/") {
                  scrollTo(item.href)(e);
                }
              }}
              onItemClick={onItemClick}
            />
          ),
      )}

      {/* Футер для мобильной навигации */}
      {isMobile && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-auto flex flex-col gap-8 pt-12 pb-8"
        >
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

          {/* Социальные ссылки */}
          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/danriweb"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="size-6" />
            </Link>
            <Link
              href="https://t.me/danriweb_online"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaTelegram className="size-6" />
            </Link>
          </div>

          {/* Копирайт */}
          <p className="text-muted-foreground/40 text-center text-[10px] tracking-[3px] uppercase">
            © 2026 DanriWeb • Frontend
          </p>
        </m.div>
      )}
    </nav>
  );
};
