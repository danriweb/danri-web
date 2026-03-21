import { Metadata } from "next";

import { ContactForm } from "@features/contact";

export const metadata: Metadata = {
  title: "Обсудить проект",
  description: "Оставьте свои контакты, и мы воплотим ваши идеи в жизнь. Frontend-разработчик DanriWeb.",
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-140px)] items-center justify-center py-10 sm:py-20">
      <div className="bg-card/50 border-border relative w-full max-w-xl overflow-hidden rounded-[32px] border p-5 backdrop-blur-2xl sm:rounded-[40px] sm:p-12">
        <ContactForm />
      </div>
    </div>
  );
}
