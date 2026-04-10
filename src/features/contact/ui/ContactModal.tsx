"use client";

import { useTranslations } from "next-intl";

import { StandardAdaptiveOverlay } from "@constructors";

import { useIsOpenContactModal, useSetIsOpenContactModal } from "../model/contact-modal.store";
import { ContactForm } from "./ContactForm";

export const ContactModal = () => {
  const isOpen = useIsOpenContactModal();
  const setIsOpen = useSetIsOpenContactModal();
  const t = useTranslations("features.contact.modal");

  const onOpenChange = (open: boolean) => setIsOpen(open);

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
