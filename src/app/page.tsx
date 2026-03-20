import { Metadata } from "next";

import { Hero } from "@widgets/hero";

export const metadata: Metadata = {
  title: "DanriWeb | Frontend разработчик",
  description:
    "Добро пожаловать на официальный сайт DanriWeb. Здесь вы найдете информацию о моих проектах, навыках создания современных интерфейсов и опыте во Frontend-разработке.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
    </div>
  );
}
