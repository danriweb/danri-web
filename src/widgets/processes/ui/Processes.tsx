import { SectionTitle } from "@constructors";

import { processes } from "../model/processes";
import { ProcessCard } from "./ProcessCard";

/**
 * Секция Процессы — теперь Server Component!
 * Google видит весь шаблон сразу, а браузер тратит 0ms на JS для этого блока.
 */
export const Processes = () => {
  return (
    <section
      id="processes"
      aria-labelledby="processes-title"
      className="flex flex-col items-center gap-16 md:gap-24 md:py-32"
    >
      {/* Заголовок секции (рендер на сервере) */}
      <div className="flex flex-col items-center gap-6">
        <SectionTitle
          tag="Процессы"
          title="Процесс без сюрпризов"
          id="processes-title"
          description={
            <>
              Четыре этапа, которые я прохожу с каждым клиентом.
              <br className="hidden md:block" />
              Прозрачно, по-человечески и в срок.
            </>
          }
        />
      </div>

      {/* Список карточек — здесь у нас "клиентские острова" GlowCard внутри серверного списка */}
      <ol className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processes.map((process, index) => (
          <li key={process.id} className="contents">
            <ProcessCard
              id={process.id}
              title={process.title}
              description={process.description}
              icon={process.icon}
              index={index}
            />
          </li>
        ))}
      </ol>
    </section>
  );
};
