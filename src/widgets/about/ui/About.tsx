import { useTranslations } from "next-intl";

import { SectionTitle } from "@custom-ui";

import { principles } from "../model/about";
import { AboutHero } from "./AboutHero";
import { PrincipleCard } from "./PrincipleCard";

export const About = () => {
  const t = useTranslations("widgets.about");

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="flex w-full flex-col items-center gap-16 py-16 md:gap-24 md:py-32"
    >
      {/* Заголовок секции */}
      <SectionTitle
        id="about-title"
        tag={t("tag")}
        title={t("title")}
        description={t.rich("description", { br: () => <br className="hidden md:block" /> })}
      />

      {/* БИО + Timeline */}
      <AboutHero />

      {/* Принципы */}
      <div className="flex w-full flex-col gap-8">
        <p className="text-muted-foreground/50 text-center text-xs font-bold tracking-[3px] uppercase">
          {t("principlesTitle")}
        </p>

        <ol className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <li key={principle.id} className="contents">
              <PrincipleCard
                icon={principle.icon}
                title={t(`principles.${index}.title`)}
                description={t(`principles.${index}.description`)}
                index={index}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
