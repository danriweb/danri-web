import dynamic from "next/dynamic";
import { Metadata } from "next";

import { Hero } from "@widgets/hero";

// Ленивая загрузка тяжелых секций
const Processes = dynamic(() => import("@widgets/processes").then((mod) => mod.Processes), { 
  ssr: true,
});
const Projects = dynamic(() => import("@widgets/projects").then((mod) => mod.Projects), { 
  ssr: true,
});
const Stack = dynamic(() => import("@widgets/stack").then((mod) => mod.Stack), { 
  ssr: true,
});

import { SectionRevealer } from "@constructors";

export const metadata: Metadata = {
  title: "DanriWeb | Frontend разработчик",
  description:
    "Добро пожаловать на официальный сайт DanriWeb. Здесь вы найдете информацию о моих проектах, навыках создания современных интерфейсов и опыте во Frontend-разработке.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-15 overflow-x-hidden">
      {/* Главный экран — рендерится сразу */}
      <Hero />

      {/* Постепенный рендер по мере скролла + фоновая очередь */}
      <SectionRevealer index={1} rootMargin="300px 0px">
        <Processes />
      </SectionRevealer>

      <SectionRevealer index={2} rootMargin="300px 0px">
        <Projects />
      </SectionRevealer>

      <SectionRevealer index={3} rootMargin="400px 0px">
        <Stack />
      </SectionRevealer>
    </div>
  );
}
