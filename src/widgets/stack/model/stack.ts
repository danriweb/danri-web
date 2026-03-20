import {
  Atom,
  Bell,
  Box,
  Cpu,
  Database,
  Ghost,
  GitBranch,
  Hammer,
  Layers,
  Layout,
  type LucideIcon,
  MousePointerClick,
  Palette,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { type IconType } from "react-icons";
import {
  SiDocker,
  SiFramer,
  SiJest,
  SiKubernetes,
  SiMui,
  SiNextdotjs,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";

export interface StackItem {
  id: string;
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: IconType | LucideIcon | any;
}

export interface StackCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: StackItem[];
}

export const stackCategories: StackCategory[] = [
  {
    id: "base",
    title: "Base & Core",
    icon: Database,
    items: [
      { id: "react", name: "React", description: "Библиотека компонентов", icon: SiReact },
      { id: "next", name: "Next.js", description: "Full-stack фреймворк", icon: SiNextdotjs },
      { id: "ts", name: "TypeScript", description: "Строгая типизация", icon: SiTypescript },
      { id: "tailwind", name: "Tailwind CSS", description: "Стилизация на утилитах", icon: SiTailwindcss },
      { id: "scss", name: "SCSS", description: "Препроцессор стилей", icon: SiSass },
    ],
  },
  {
    id: "ui",
    title: "UI & UIKit",
    icon: Palette,
    items: [
      { id: "framer", name: "Framer Motion", description: "Анимации интерфейса", icon: SiFramer },
      { id: "shadcn", name: "shadcn/ui", description: "Доступные компоненты", icon: Box },
      { id: "radix", name: "Radix UI", description: "Низкоуровневые примитивы", icon: SiRadixui },
      { id: "mui", name: "MUI", description: "Библиотека готовых решений", icon: SiMui },
      { id: "sonner", name: "Sonner", description: "Тосты и уведомления", icon: Bell },
    ],
  },
  {
    id: "arch",
    title: "Architecture",
    icon: Layout,
    items: [
      { id: "fsd", name: "FSD", description: "Feature-Sliced Design", icon: Layers },
      { id: "feature-based", name: "Feature-Based", description: "Разделение по фичам", icon: GitBranch },
      { id: "classic", name: "Classic", description: "Традиционная структура", icon: Hammer },
      { id: "atomic", name: "Atomic Design", description: "Атомарный подход", icon: Atom },
      { id: "solid", name: "SOLID", description: "Принципы чистого кода", icon: ShieldCheck },
    ],
  },
  {
    id: "data",
    title: "State & Data",
    icon: Zap,
    items: [
      { id: "redux", name: "Redux Toolkit", description: "Сложные состояния", icon: SiRedux },
      { id: "zustand", name: "Zustand", description: "Легкий менеджер стейта", icon: Ghost },
      { id: "query", name: "TanStack Query", description: "Управление кэшем API", icon: SiReactquery },
      { id: "hookform", name: "React Hook Form", description: "Валидация форм", icon: SiReacthookform },
      { id: "zod", name: "Zod", description: "Схемы валидации данных", icon: SiZod },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    icon: ShieldCheck,
    items: [
      { id: "playwright", name: "Playwright", description: "E2E тестирование", icon: MousePointerClick },
      { id: "jest", name: "Jest / Vitest", description: "Unit-тестирование", icon: SiJest },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: Cpu,
    items: [
      { id: "docker", name: "Docker", description: "Контейнеризация", icon: SiDocker },
      { id: "kubernetes", name: "Kubernetes", description: "Оркестрация", icon: SiKubernetes },
    ],
  },
];
