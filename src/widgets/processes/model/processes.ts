import { Code, Crosshair, FileText, LucideIcon, Rocket } from "lucide-react";

export interface Process {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processes: Process[] = [
  {
    id: "01",
    title: "Идея",
    description: "Анализирую задачу, бизнес-цели и потребности вашей аудитории.",
    icon: FileText,
  },
  {
    id: "02",
    title: "Стратегия",
    description: "Подбираю оптимальный стек технологий и проектирую архитектуру.",
    icon: Crosshair,
  },
  {
    id: "03",
    title: "Разработка",
    description: "Пишу чистый, масштабируемый код с регулярными демонстрациями результата.",
    icon: Code,
  },
  {
    id: "04",
    title: "Результат",
    description: "Запускаем проект! Я всегда на связи для поддержки и развития.",
    icon: Rocket,
  },
];
