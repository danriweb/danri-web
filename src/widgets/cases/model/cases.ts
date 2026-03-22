import { Activity, Calendar, Cpu, Gauge, Layout, LucideIcon } from "lucide-react";

export interface CaseMetric {
  label: string;
  value: string;
  className?: string;
}

export interface CaseMeta {
  label: string;
  icon: LucideIcon;
  description: string;
}

export interface Case {
  id: string;
  title: string;
  task: string;
  solution: string;
  meta: CaseMeta[];
  metrics: CaseMetric[];
}

export const cases: Case[] = [
  {
    id: "01",
    title: "Архитектурная эволюция Маркетплейса",
    task: "Legacy-монолит с циклическими зависимостями. Релизный цикл - 2 недели из-за сложности рефакторинга.",
    solution:
      "Переход на FSD, изоляция бизнес-логики. Миграция с Redux на Zustand. Стейт-машины для оформления заказа.",
    meta: [
      {
        label: "Архитектура",
        icon: Layout,
        description: "Полный переход на FSD с декомпозицией legacy-монолита",
      },
      {
        label: "Производительность",
        icon: Gauge,
        description: "Оптимизация сборки и рантайм-производительности",
      },
      {
        label: "2025",
        icon: Calendar,
        description: "Период рефакторинга: 2 недели",
      },
    ],
    metrics: [
      { label: "ОШИБКИ ПРИ ЗАКАЗЕ", value: "12% → 0.1%", className: "text-primary" },
      { label: "ЦИКЛ РЕЛИЗА", value: "5д → 1д", className: "text-green-400" },
    ],
  },
  {
    id: "02",
    title: "Личный кабинет бренда",
    task: "Запуск полнофункционального личного кабинета с нуля за 2 рабочих дня.",
    solution: "shadcn/ui + Zod-валидация реактивных форм. Система нотификаций реализована за считанные часы до старта.",
    meta: [
      {
        label: "Скорость ",
        icon: Activity,
        description: "Полная реализация личного кабинета за 20 часов",
      },
      {
        label: "Сложность",
        icon: Cpu,
        description: "Более 15 сложных форм и динамические данные пользователя",
      },
      {
        label: "2025",
        icon: Calendar,
        description: "Запуск системы к старту распродажи без критических багов",
      },
    ],
    metrics: [
      { label: "СРОК ЗАПУСКА", value: "2 дня", className: "text-primary" },
      { label: "ГОТОВНОСТЬ", value: "100%", className: "text-green-400" },
    ],
  },
];
