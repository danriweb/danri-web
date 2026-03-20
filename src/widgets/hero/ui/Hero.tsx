"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Metric } from "@custom-ui";
import { Badge, Button } from "@shadcn";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-20 text-center"
      >
        {/*Заголовок*/}
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge variant="outline" className="px-6 py-3 font-bold tracking-[4px] uppercase backdrop-blur-md">
              <span className="bg-primary mr-3 h-1.5 w-1.5 rounded-full" />
              Frontend Developer
            </Badge>

            <h1 className="xs:text-5xl font-sans text-[40px] leading-[1.05] font-extrabold tracking-tighter text-balance text-white sm:text-6xl md:text-8xl">
              ПЛАТИТЕ ЗА <i className="text-primary">РЕЗУЛЬТАТ</i>, А НЕ ЗА ОБЕЩАНИЯ
            </h1>

            <p className="text-muted-foreground max-w-2xl font-sans text-sm leading-relaxed tracking-wide sm:text-base">
              Тот самый разработчик, которому не всё равно. Фокус на бизнесе и качестве кода: поддерживаемые решения и
              предсказуемая архитектура.
            </p>
          </div>

          {/*Кнопки*/}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="group bg-primary-gradient h-14 px-10 text-base font-bold hover:text-white">
              Обсудить проект
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="hover:bg-card text-foreground h-14 px-10 text-base font-bold backdrop-blur-sm"
            >
              Читать кейсы
            </Button>
          </div>
        </div>

        {/*Метрики*/}
        <div className="border-border/30 flex w-full flex-wrap items-center justify-center gap-12 border-t pt-16 md:gap-24">
          <Metric unit="3+" label="ГОДА ОПЫТА" />
          <Metric unit="20+" label="ПРОЕКТОВ" />
          <Metric unit="100%" label="БИЗНЕС-ФОКУС" highlight />
        </div>
      </m.div>
    </section>
  );
};
