import {
  Activity,
  BookOpen,
  Calendar,
  Cpu,
  Eye,
  Gauge,
  Globe,
  KeyRound,
  Layers,
  Layout,
  LucideIcon,
  Monitor,
  Store,
  Users,
  Zap,
} from "lucide-react";

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
  {
    id: "06",
    title: "Адаптивный интерфейс под любой экран",
    task: "Таблица с большим количеством данных отображалась только на десктопе. На мобильных - горизонтальный скролл и потеря данных.",
    solution:
      "Перестроил компонент: на мобильных - карточки, на десктопе - таблица. CSS без JS, переключение через media query.",
    meta: [
      {
        label: "Адаптив",
        icon: Monitor,
        description: "Разный лейаут под разные экраны без JS-переключения",
      },
      {
        label: "Без библиотек",
        icon: Layout,
        description: "Чистый CSS, без сторонних решений",
      },
      {
        label: "2024",
        icon: Calendar,
        description: "Часть фриланс-проекта для малого бизнеса",
      },
    ],
    metrics: [
      { label: "ПОДДЕРЖКА ЭКРАНОВ", value: "320px+", className: "text-primary" },
      { label: "JS ДЛЯ АДАПТИВА", value: "0 строк", className: "text-green-400" },
    ],
  },
  {
    id: "07",
    title: "Оптимизация загрузки страницы",
    task: "Страница с тяжёлыми компонентами грузилась медленно. LCP выше 4 секунд - плохо и для пользователя, и для SEO.",
    solution:
      "Lazy loading компонентов, code splitting, оптимизация изображений через next/image. Убрал блокирующие запросы на старте.",
    meta: [
      {
        label: "Производительность",
        icon: Zap,
        description: "Фокус на Core Web Vitals: LCP, CLS, FID",
      },
      {
        label: "Next.js",
        icon: Gauge,
        description: "Использовал встроенные инструменты фреймворка",
      },
      {
        label: "2025",
        icon: Calendar,
        description: "Оптимизация для SEO и пользовательского опыта",
      },
    ],
    metrics: [
      { label: "LCP", value: "4.1с → 1.3с", className: "text-primary" },
      { label: "LIGHTHOUSE", value: "61 → 97", className: "text-green-400" },
    ],
  },
  {
    id: "08",
    title: "Авторизация и защита маршрутов",
    task: "Проект без авторизации: любой мог зайти на любую страницу. Нужна была система с токенами и разграничением доступа.",
    solution:
      "JWT + refresh-токены, protected routes через middleware. Логика хранения токенов вынесена отдельно от UI.",
    meta: [
      {
        label: "Безопасность",
        icon: KeyRound,
        description: "JWT, refresh-логика, защита роутов",
      },
      {
        label: "Архитектура",
        icon: Cpu,
        description: "Авторизация изолирована от UI-слоя",
      },
      {
        label: "2025",
        icon: Calendar,
        description: "Реализовано в рамках фриланс-проекта",
      },
    ],
    metrics: [
      { label: "УЯЗВИМЫХ РОУТОВ", value: "12 → 0", className: "text-primary" },
      { label: "СЛОЁВ ЗАЩИТЫ", value: "3", className: "text-green-400" },
    ],
  },
  {
    id: "09",
    title: "Многоязычность (i18n)",
    task: "Продукт выходил на новый рынок. Весь текст был вшит в компоненты - добавить второй язык без рефакторинга было невозможно.",
    solution:
      "Перевёл строки в JSON-файлы, подключил next-intl. Организовал структуру переводов так, чтобы их мог обновлять не только разработчик.",
    meta: [
      {
        label: "Локализация",
        icon: Globe,
        description: "Поддержка нескольких языков через next-intl",
      },
      {
        label: "Структура",
        icon: BookOpen,
        description: "Переводы вынесены в отдельные файлы по namespace",
      },
      {
        label: "2025",
        icon: Calendar,
        description: "Реализовано в рамках фриланс-проекта",
      },
    ],
    metrics: [
      { label: "ЯЗЫКОВ", value: "3", className: "text-primary" },
      { label: "СТРОК ХАРДКОДА", value: "200+ → 0", className: "text-green-400" },
    ],
  },
  {
    id: "10",
    title: "Доступность по стандартам WCAG 2.1",
    task: "Интерфейс не работал с клавиатурой и скринридером. Часть пользователей просто не могла им пользоваться.",
    solution:
      "Добавил ARIA-атрибуты, настроил фокус-менеджмент, исправил контраст. Прошёлся по ключевым сценариям с axe-core и вручную.",
    meta: [
      {
        label: "Доступность",
        icon: Eye,
        description: "WCAG 2.1 уровень AA: фокус, контраст, ARIA",
      },
      {
        label: "Инструменты",
        icon: Activity,
        description: "axe-core, ручное тестирование с клавиатурой",
      },
      {
        label: "2025",
        icon: Calendar,
        description: "Внедрено в UI-ките контрактного проекта",
      },
    ],
    metrics: [
      { label: "A11Y ОШИБОК", value: "34 → 2", className: "text-primary" },
      { label: "WCAG", value: "AA", className: "text-green-400" },
    ],
  },
];
