import { Activity, Binary, Briefcase, Layers, Mail, User } from "lucide-react";
import { LucideIcon } from "lucide-react";

/**
 * Единый реестр навигации - shared/config.
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
  { href: "#about", label: "Обо мне", icon: User },
  { href: "/experience", label: "Опыт", icon: Briefcase },
  { href: "/cases", label: "Кейсы", icon: Layers },
  { href: "#stack", label: "Стек", icon: Binary },
  { href: "#processes", label: "Процессы", icon: Activity },
  { href: "/contact", label: "Контакты", isAccent: true, icon: Mail },
];
