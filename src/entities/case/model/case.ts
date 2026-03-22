import { Activity, BookOpen, Calendar, Cpu, Gauge, Layers, Layout, LucideIcon, Store, Users } from "lucide-react";

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
        label: "Скорость",
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
  {
    id: "03",
    title: "UI-кит с нуля",
    task: "Проект без дизайн-системы - каждый компонент писался по-разному, переиспользование было нулевым.",
    solution:
      "Собрал базовый набор компонентов: кнопки, инпуты, карточки, типографика. Задокументировал использование и варианты состояний.",
    meta: [
      {
        label: "Компоненты",
        icon: Layers,
        description: "Базовый набор переиспользуемых UI-элементов",
      },
      {
        label: "Документация",
        icon: BookOpen,
        description: "Описание состояний и правил использования каждого компонента",
      },
      {
        label: "2025",
        icon: Calendar,
        description: "Разработка в рамках реального фриланс-проекта",
      },
    ],
    metrics: [
      { label: "КОМПОНЕНТОВ", value: "20+", className: "text-primary" },
      { label: "ДУБЛИРОВАНИЯ", value: "было → нет", className: "text-green-400" },
    ],
  },
  {
    id: "04",
    title: "Лендинг для малого бизнеса",
    task: "Небольшой бизнес без сайта. Нужен был быстрый запуск, без лишнего - только суть.",
    solution:
      "Вёрстка на Next.js с упором на скорость загрузки, оптимизацию и мобильную адаптацию. Никаких лишних библиотек и логики. Только то, что работает.",
    meta: [
      {
        label: "Бизнес",
        icon: Store,
        description: "Реальный клиент, малый бизнес",
      },
      {
        label: "Скорость",
        icon: Gauge,
        description: "Производительность как приоритет с первой строки",
      },
      {
        label: "2024",
        icon: Calendar,
        description: "Запуск в рамках фриланс-контракта",
      },
    ],
    metrics: [
      { label: "LIGHTHOUSE", value: "98", className: "text-primary" },
      { label: "ВРЕМЯ ЗАПУСКА", value: "3 дня", className: "text-green-400" },
    ],
  },
  {
    id: "05",
    title: "Онбординг и соглашения для команды",
    task: "Новые разработчики тратили несколько дней, чтобы разобраться в проекте. Соглашений не было, каждый писал по-своему.",
    solution:
      "Оформил структуру проекта, правила нейминга, формат коммитов и базовые принципы код-ревью. Положил в репозиторий для всеобщего ознакомления.",
    meta: [
      {
        label: "Команда",
        icon: Users,
        description: "Документ писался в реальной команде, не в вакууме",
      },
      {
        label: "Процесс",
        icon: Activity,
        description: "Коммиты, нейминг, код-ревью - базовые, но важные вещи",
      },
      {
        label: "2024",
        icon: Calendar,
        description: "Внедрено в реальной команде",
      },
    ],
    metrics: [
      { label: "ОНБОРДИНГ", value: "5д → 1д", className: "text-primary" },
      { label: "СТИЛЬ КОДА", value: "единый", className: "text-green-400" },
    ],
  },
];
