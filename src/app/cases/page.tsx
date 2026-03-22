import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CaseCard, cases } from "@entities/case";

export const metadata: Metadata = {
  title: "Кейсы",
  description:
    "Все проекты DanriWeb - реальные задачи, архитектурные решения и измеримые результаты. Frontend-разработка на React и Next.js.",
};

export default function CasesPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-10 md:gap-20 md:px-6 md:py-15">
      {/* Навигация назад */}
      <Link
        href="/#cases"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" />
        На главную
      </Link>

      {/* Заголовок страницы */}
      <div className="flex flex-col gap-4">
        <span className="text-primary text-xs font-bold tracking-[3px] uppercase">Кейсы</span>
        <h1 className="font-funnel-display text-foreground text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Инженерный подход в деле
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed md:text-lg">
          Реальные задачи - не учебные. Каждый кейс: конкретная проблема, принятые решения и измеримый результат.
        </p>
      </div>

      {/* Список всех кейсов */}
      <ol className="flex flex-col gap-8 md:gap-12">
        {cases.map((project, index) => (
          <li key={project.id} className="contents">
            <CaseCard project={project} index={index} />
          </li>
        ))}
      </ol>
    </div>
  );
}
