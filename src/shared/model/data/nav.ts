import { Activity, Binary, Briefcase, Mail, User } from "lucide-react";
import { LucideIcon } from "lucide-react";

/**
 * Единый реестр навигации — shared/config.
 * Используется Header, Footer и любыми другими виджетами.
 * FSD: shared не имеет ограничений на импорт.
 */
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  isAccent?: boolean;
}

export const navItems: NavItem[] = [
  { href: "#cases", label: "Кейсы", icon: Briefcase },
  { href: "#about", label: "Обо мне", icon: User },
  { href: "#processes", label: "Процессы", icon: Activity },
  { href: "#stack", label: "Стек", icon: Binary },
  { href: "/contact", label: "Контакты", isAccent: true, icon: Mail },
];
