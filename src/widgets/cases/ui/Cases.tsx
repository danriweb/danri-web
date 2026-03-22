import { ArrowRight } from "lucide-react";

import { SectionTitle } from "@custom-ui";
import { Button } from "@shadcn";

import { cases } from "../model/cases";
import { CaseCard } from "./CaseCard";

export const Cases = () => {
  return (
    <section
      id="cases"
      aria-labelledby="cases-title"
      className="flex flex-col items-center gap-12 py-16 md:gap-24 md:py-32"
    >
      {/* Заголовок секции */}
      <div className="w-full px-4 md:px-6">
        <SectionTitle
          id="cases-title"
          tag="Кейсы"
          title="Инженерный подход в деле"
          description={
            <>
              Не просто красивый UI, но и продуманная логика под капотом.
              <br className="hidden md:block" />
              Легко, быстро, надёжно и с поддержкой лучших практик кода.
            </>
          }
        />
      </div>

      {/* Список кейсов */}
      <div className="flex w-full flex-col gap-10 px-0 md:px-6">
        <ol className="flex flex-col gap-8 md:gap-12">
          {cases.map((project, index) => (
            <li key={project.id} className="contents">
              <CaseCard project={project} index={index} />
            </li>
          ))}
        </ol>

        {/* Кнопка "Смотреть все" */}
        <div className="flex justify-center pt-8">
          <Button
            variant="outline"
            className="group hover:bg-card h-14 border-white/10 px-12 text-base font-bold text-white uppercase backdrop-blur-sm transition-all hover:border-white/30"
          >
            Смотреть все кейсы
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
