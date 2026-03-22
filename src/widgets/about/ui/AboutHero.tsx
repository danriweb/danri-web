import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";

import { MotionWrapper } from "@custom-ui";
import { Badge, Button } from "@shadcn";

import avatar from "@/shared/assets/brand-png/icon-quad-hh.png";

import { timeline } from "../model/about";
import { TimelineCard } from "./TimelineCard";

export const AboutHero = () => {
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
              alt="Фото DanriWeb"
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
              Frontend Developer
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
            Привет! Я - Frontend-разработчик из Казахстана с{" "}
            <span className="text-primary font-bold">3&nbsp;годами</span> коммерческого опыта. В IT пришёл без
            университета и курсов. Вдохновила философия и суть разработки. По сей день я не останавливаюсь, стремясь
            стать лучшей версией себя изо дня в день.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Когда мне доверили менторить новичков, я понял кое-что важное: ценность разработчика - не в объёме знаний, а
            в мышлении. Том мышлении, которое помогает расти не только тебе, но и команде, и продукту рядом.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Для меня самодисциплина - не бонус, а стандарт. Понятный коммит, чистая архитектура, следование практикам
            каждый день - это уважение к тем, кто придёт после. Вне кода читаю корейскую мангу: её философия неожиданно
            хорошо рифмуется с тем, что я ценю в разработке.
          </p>
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
            <Link href="/contact">Обсудить проект</Link>
          </Button>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/danriweb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub DanriWeb"
              className="text-muted-foreground hover:text-primary border-border flex size-10 items-center justify-center rounded-xl border bg-white/5 transition-colors hover:bg-white/10"
            >
              <FaGithub className="size-5" />
            </Link>
            <Link
              href="https://t.me/danriweb_online"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram DanriWeb"
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
          <p className="text-muted-foreground/50 mb-6 text-xs font-bold tracking-[3px] uppercase">Путь</p>
        </MotionWrapper>

        {timeline.map((item, i) => (
          <TimelineCard key={item.year} item={item} index={i} isLast={i === timeline.length - 1} />
        ))}
      </div>
    </div>
  );
};
