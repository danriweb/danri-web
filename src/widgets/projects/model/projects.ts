import { Activity, Calendar, Cpu, Gauge, Layout, LucideIcon } from "lucide-react";

export interface ProjectMetric {
  label: string;
  value: string;
  className?: string;
}

export interface ProjectMeta {
  label: string;
  icon: LucideIcon;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  task: string;
  solution: string;
  meta: ProjectMeta[];
  metrics: ProjectMetric[];
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Архитектурная эволюция Маркетплейса",
    task: "Разросшаяся Legacy-архитектура с высокой связностью и циклическими зависимостями. Релизный цикл занимал 2 недели из-за сложности рефакторинга.",
    solution:
      "Поэтапный переход на FSD-архитектуру. Полная изоляция бизнес-логики в слоях entities/features. Миграция с Redux на Zustand для снижения boilerplate-кода. Внедрение строгих стейт-машин для процесса оформления заказа.",
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
    task: "Разработка истории заказов и профиля пользователя. Жёсткий дедлайн - запуск полнофункционального личного кабинета с нуля за 2 рабочих дня.",
    solution:
      "Скоростная сборка на базе shadcn/ui и типизация на основе API-контрактов. Применение реактивных форм с zod-валидацией и реализация системы нотификаций за считанные часы.",
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
