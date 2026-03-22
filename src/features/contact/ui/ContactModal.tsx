"use client";

import { useTranslations } from "next-intl";
import { StandardAdaptiveOverlay } from "@constructors";

import { useContactModal } from "../model/contactModal";
import { ContactForm } from "./ContactForm";

export const ContactModal = () => {
  const { isOpen, close } = useContactModal();
  const t = useTranslations("features.contact.modal");

  const onOpenChange = (open: boolean) => !open && close();

  return (
    <StandardAdaptiveOverlay
      open={isOpen}
      onOpenChange={onOpenChange}
      title={t("title")}
      description={t("description")}
      className="sm:max-w-120"
      expectedHeight={700}
    >
      <ContactForm />
    </StandardAdaptiveOverlay>
  );
};
