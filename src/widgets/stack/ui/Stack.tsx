import { useTranslations } from "next-intl";
import { SectionTitle } from "@custom-ui";

import { stackCategories } from "../model/stack";
import { StackCategoryCard } from "./StackCard";

export const Stack = () => {
  const t = useTranslations("widgets.stack");

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="flex w-full flex-col items-center gap-16 py-16 md:gap-24 md:py-32"
    >
      {/* Заголовок секции */}
      <SectionTitle
        id="stack-title"
        tag={t("tag")}
        title={t("title")}
        description={t("description")}
      />

      {/* Грид скиллов */}
      <div className="flex w-full flex-col gap-12 md:gap-20">
        <div className="mx-auto grid grid-cols-1 gap-8 px-0 md:grid-cols-2 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
          {stackCategories.map((category, index) => (
            <StackCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
