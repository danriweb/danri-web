import { useTranslations } from "next-intl";

import { SectionTitle } from "@custom-ui";

import { processes } from "../model/processes";
import { ProcessCard } from "./ProcessCard";

export const Processes = () => {
  const t = useTranslations("widgets.processes");

  return (
    <section
      id="processes"
      aria-labelledby="processes-title"
      className="flex flex-col items-center gap-16 md:gap-24 md:py-32"
    >
      {/* Заголовок секции */}
      <div className="flex flex-col items-center gap-6">
        <SectionTitle
          tag={t("tag")}
          title={t("title")}
          id="processes-title"
          description={t.rich("description", { br: () => <br className="hidden md:block" /> })}
        />
      </div>

      {/* Список карточек */}
      <ol className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processes.map((process, index) => (
          <li key={process.id} className="contents">
            <ProcessCard
              id={process.id}
              title={t(`items.${index}.title`)}
              description={t(`items.${index}.description`)}
              icon={process.icon}
              index={index}
            />
          </li>
        ))}
      </ol>
    </section>
  );
};
