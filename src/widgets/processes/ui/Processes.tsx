"use client";

import { m } from "framer-motion";

import { SectionTitle } from "@constructors";
import { ProcessCard } from "@custom-ui";

import { processes } from "../model/processes";

export const Processes = () => {
  return (
    <section id="processes" className="flex flex-col items-center gap-16 md:gap-24 md:py-32">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <SectionTitle
          tag="Процессы"
          title="Процесс без сюрпризов"
          description={
            <>
              Четыре этапа, которые я прохожу с каждым клиентом.
              <br className="hidden md:block" />
              Прозрачно, по-человечески и в срок.
            </>
          }
        />
      </m.div>
      {/* Список карточек */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processes.map((process, index) => (
          <ProcessCard
            key={process.id}
            id={process.id}
            title={process.title}
            description={process.description}
            icon={process.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
