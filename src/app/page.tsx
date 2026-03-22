import { Metadata } from "next";
import dynamic from "next/dynamic";

import { Hero } from "@widgets/hero";

import { SectionRevealer } from "@custom-ui";

// Ленивая загрузка тяжелых секций
const Processes = dynamic(() => import("@widgets/processes").then((mod) => mod.Processes), {
  ssr: true,
});
const Projects = dynamic(() => import("@/widgets/cases").then((mod) => mod.Cases), {
  ssr: true,
});
const Stack = dynamic(() => import("@widgets/stack").then((mod) => mod.Stack), {
  ssr: true,
});
const About = dynamic(() => import("@widgets/about").then((mod) => mod.About), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "DanriWeb | Frontend разработчик",
  description:
    "Добро пожаловать на официальный сайт DanriWeb. Здесь вы найдете информацию о моих проектах, навыках создания современных интерфейсов и опыте во Frontend-разработке.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-15 overflow-x-hidden">
      <Hero />

      <SectionRevealer index={2} rootMargin="300px 0px">
        <Projects />
      </SectionRevealer>

      <SectionRevealer index={4} rootMargin="400px 0px">
        <About />
      </SectionRevealer>

      <SectionRevealer index={1} rootMargin="300px 0px">
        <Processes />
      </SectionRevealer>

      <SectionRevealer index={3} rootMargin="400px 0px">
        <Stack />
      </SectionRevealer>
    </div>
  );
}
