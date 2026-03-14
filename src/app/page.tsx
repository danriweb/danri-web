import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DanriWeb | Frontend разработчик",
  description:
    "Добро пожаловать на официальный сайт DanriWeb. Здесь вы найдете информацию о моих проектах, навыках создания современных интерфейсов и опыте во Frontend-разработке.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <h1 className="text-2xl font-bold">DanriWeb</h1>
    </div>
  );
}
