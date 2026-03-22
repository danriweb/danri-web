import { useTranslations } from "next-intl";
import { GlowCard } from "@custom-ui";

import { StackCategory } from "../model/stack";

interface StackCategoryCardProps {
  category: StackCategory;
  index: number;
}

/**
 * Карточка категории навыков
 */
export const StackCategoryCard = ({ category, index }: StackCategoryCardProps) => {
  const t = useTranslations(`widgets.stack.categories.${index}`);
  const titleId = `category-title-${category.id}`;

  return (
    <GlowCard
      index={index}
      className="p-8 md:p-10"
      maxWidth="xs:min-w-100 max-w-80 md:min-w-0 xs:max-w-100"
      aria-labelledby={titleId}
      role="group"
    >
      <div className="flex h-full flex-col gap-8">
        {/* Заголовок категории */}
        <div className="flex items-center gap-4 border-b border-white/5 pb-6">
          <div
            className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-xl"
            aria-hidden="true"
          >
            <category.icon className="size-5" />
          </div>
          <h3 id={titleId} className="text-xl font-bold tracking-wider text-white uppercase">
            {t("title")}
          </h3>
        </div>

        {/* Список элементов в категории */}
        <ul
          className="flex flex-col gap-6"
          role="list"
          aria-label={`Список инструментов в категории ${t("title")}`}
        >
          {category.items.map((item) => (
            <li key={item.id} role="listitem">
              <div className="group flex items-center gap-5 transition-all">
                <div
                  className="text-muted-foreground group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors"
                  aria-hidden="true"
                >
                  <item.icon className="size-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="group-hover:text-primary text-sm font-bold tracking-wide text-white transition-colors">
                    {t(`items.${item.id}.name`)}
                  </span>
                  <span className="text-muted-foreground text-xs opacity-60">{t(`items.${item.id}.description`)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </GlowCard>
  );
};
