import avatar from "@assets/brand-png/icon-quad-hh.png";
import { Link } from "@i18n";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaGithub, FaTelegram } from "react-icons/fa";

import { MotionWrapper } from "@custom-ui";
import { Badge, Button } from "@shadcn";

import { timeline } from "../model/about";
import { TimelineCard } from "./TimelineCard";

export const AboutHero = () => {
  const t = useTranslations("widgets.about.hero");
  const tRoot = useTranslations("widgets.about");
  const tAria = useTranslations("shared.aria");

  return (
    <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
      {/* ── Левая колонка ── */}
      <div className="flex flex-col gap-10">
        {/* АВАТАР + ИМЯ */}
        <MotionWrapper
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-6"
        >
          <div className="relative size-20 shrink-0 md:size-24">
            <Image
              src={avatar}
              alt="DanriWeb"
              fill
              sizes="(max-width: 768px) 80px, 96px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">DanriWeb</h3>
            <Badge
              variant="outline"
              className="w-fit px-3 py-1 text-[10px] font-bold tracking-[3px] uppercase backdrop-blur-md"
            >
              <span className="bg-primary mr-2 h-1.5 w-1.5 rounded-full" />
              {t("badge")}
            </Badge>
          </div>
        </MotionWrapper>

        {/* БИО */}
        <MotionWrapper
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <p className="text-card-foreground text-base leading-relaxed md:text-lg">
            {t.rich("bio1", { years: (chunks) => <span className="text-primary font-bold">{chunks}</span> })}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">{t("bio2")}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{t("bio3")}</p>
        </MotionWrapper>

        {/* Соцсети + CTA */}
        <MotionWrapper
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button size="lg" asChild className="group bg-primary-gradient h-12 px-8 text-sm font-bold hover:text-white">
            <Link href="/contact">{t("discussProject")}</Link>
          </Button>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/danriweb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tAria("github")}
              className="text-muted-foreground hover:text-primary border-border flex size-10 items-center justify-center rounded-xl border bg-white/5 transition-colors hover:bg-white/10"
            >
              <FaGithub className="size-5" />
            </Link>
            <Link
              href="https://t.me/danriweb_online"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tAria("telegram")}
              className="text-muted-foreground hover:text-primary border-border flex size-10 items-center justify-center rounded-xl border bg-white/5 transition-colors hover:bg-white/10"
            >
              <FaTelegram className="size-5" />
            </Link>
          </div>
        </MotionWrapper>
      </div>

      {/* ── Правая колонка: Timeline ── */}
      <div className="flex flex-col gap-2 lg:border-l lg:border-white/5 lg:pl-12">
        <MotionWrapper
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-muted-foreground/50 mb-6 text-xs font-bold tracking-[3px] uppercase">{t("pathTitle")}</p>
        </MotionWrapper>

        {timeline.map((item, i) => (
          <TimelineCard
            key={item.year}
            year={tRoot(`timeline.${i}.year`)}
            title={tRoot(`timeline.${i}.title`)}
            description={tRoot(`timeline.${i}.description`)}
            index={i}
            isLast={i === timeline.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
