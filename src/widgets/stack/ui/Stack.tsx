"use client";

import { SectionTitle } from "@constructors";

import { stackCategories } from "../model/stack";
import { StackCategoryCard } from "./StackCard";

export const Stack = () => {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="container mx-auto flex flex-col items-center gap-16 py-16 md:gap-24 md:py-32"
    >
      {/* Заголовок секции */}
      <SectionTitle
        id="stack-title"
        tag="МОЙ СТЕК"
        title="Технический арсенал"
        description="Инструменты и технологии, которые я использую для создания надежных и производительных веб-приложений."
      />

      {/* Грид скиллов */}
      <div className="flex w-full flex-col gap-12 md:gap-20">
        {/* Сетка категорий навыков */}
        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
          {stackCategories.map((category, index) => (
            <StackCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
