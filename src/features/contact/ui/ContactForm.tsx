"use client";

import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaTelegramPlane } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { toast } from "sonner";

import { StandardField } from "@constructors";
import { MotionWrapper } from "@custom-ui";
import { Button, FieldSeparator, Input, Textarea } from "@shadcn";

import { useContactModal } from "../model/contactModal";
import { type ContactFormValues, contactFormSchema } from "../model/contactSchema";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay,
    type: "spring" as const,
    stiffness: 260,
    damping: 25,
  },
});

export const ContactForm = () => {
  const { close } = useContactModal();
  const t = useTranslations("features.contact.form");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Имитация отправки
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form data:", data);
    toast.success(t("success"));
    reset();
    close();
  };

  return (
    <div className="flex flex-col gap-5 py-2 sm:gap-8 sm:py-4">
      {/* Быстрые контакты */}
      <MotionWrapper {...fadeIn(0.1)} className="grid grid-cols-2 gap-4 px-1 pb-2">
        <a
          href="https://t.me/danriweb_online"
          target="_blank"
          rel="noreferrer"
          className="group hover:border-primary/30 relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/5 bg-white/3 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-5"
        >
          <div className="bg-primary/10 absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10" />
          <div className="bg-primary/10 text-primary group-hover:bg-primary relative flex size-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]">
            <FaTelegramPlane className="size-6" />
          </div>
          <span className="relative text-[10px] font-bold tracking-[3px] text-white/50 uppercase transition-colors group-hover:text-white">
            {t("telegram")}
          </span>
        </a>

        <a
          href="mailto:danri.web@gmail.com"
          className="group hover:border-primary/30 relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/5 bg-white/3 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-5"
        >
          <div className="bg-primary/10 absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10" />
          <div className="bg-primary/10 text-primary group-hover:bg-primary relative flex size-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]">
            <HiMail className="size-6" />
          </div>
          <span className="relative text-[10px] font-bold tracking-[3px] text-white/50 uppercase transition-colors group-hover:text-white">
            {t("email")}
          </span>
        </a>
      </MotionWrapper>

      <MotionWrapper {...fadeIn(0.2)} className="relative">
        <FieldSeparator className="text-muted-foreground text-[10px] font-bold tracking-[3px] uppercase">
          {t("separator")}
        </FieldSeparator>
      </MotionWrapper>

      {/* Форма */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-5">
        <MotionWrapper {...fadeIn(0.3)}>
          <StandardField label={t("nameLabel")} error={errors.name} id="name">
            <Input
              id="name"
              placeholder={t("namePlaceholder")}
              className="focus:border-primary/50 h-11 border-white/10 bg-white/5 transition-colors focus:bg-white/10"
              {...register("name")}
            />
          </StandardField>
        </MotionWrapper>

        <MotionWrapper {...fadeIn(0.4)}>
          <StandardField label={t("emailLabel")} error={errors.email} id="email">
            <Input
              id="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              className="focus:border-primary/50 h-11 border-white/10 bg-white/5 transition-colors focus:bg-white/10"
              {...register("email")}
            />
          </StandardField>
        </MotionWrapper>

        <MotionWrapper {...fadeIn(0.5)}>
          <StandardField label={t("messageLabel")} error={errors.message} id="message">
            <Textarea
              id="message"
              placeholder={t("messagePlaceholder")}
              className="focus:border-primary/50 min-h-25 resize-none border-white/10 bg-white/5 transition-colors focus:bg-white/10"
              {...register("message")}
            />
          </StandardField>
        </MotionWrapper>

        <MotionWrapper {...fadeIn(0.6)}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-gradient mt-2 h-12 w-full text-sm font-bold tracking-widest uppercase transition-transform hover:text-white active:scale-95"
          >
            {isSubmitting ? t("submitting") : t("submit")}
            {!isSubmitting && <RiSendPlaneFill className="ml-2 size-4" />}
          </Button>
        </MotionWrapper>
      </form>
    </div>
  );
};
