"use client";

import { StandardAdaptiveOverlay } from "@constructors";

import { useContactModal } from "../model/contactModal";
import { ContactForm } from "./ContactForm";

export const ContactModal = () => {
  const { isOpen, close } = useContactModal();

  const onOpenChange = (open: boolean) => !open && close();
  const title = "Обсудить проект";
  const description = "Оставьте свои контакты, и мы воплотим ваши идеи в жизнь.";

  return (
    <StandardAdaptiveOverlay
      open={isOpen}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      className="sm:max-w-120"
      expectedHeight={700}
    >
      <ContactForm />
    </StandardAdaptiveOverlay>
  );
};
