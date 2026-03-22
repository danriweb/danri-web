import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactForm } from "@features/contact";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "app.contact.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return (
    <div className="relative flex min-h-[calc(100vh-140px)] items-center justify-center py-10 sm:py-20">
      <div className="bg-card/50 border-border relative w-full max-w-xl overflow-hidden rounded-[32px] border p-5 backdrop-blur-2xl sm:rounded-[40px] sm:p-12">
        <ContactForm />
      </div>
    </div>
  );
}
