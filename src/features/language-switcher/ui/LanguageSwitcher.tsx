"use client";

import { usePathname, useRouter } from "@i18n";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

import { StandardDropdown } from "@custom-ui";
import { Button } from "@shadcn";

// Языки в порядке отображения в дропдауне
const LANGUAGES = [
  { code: "ru", label: "Русский", badge: "RU" },
  { code: "en", label: "English", badge: "EN" },
  { code: "ko", label: "한국어", badge: "KO" },
  { code: "ja", label: "日本語", badge: "JA" },
  { code: "de", label: "Deutsch", badge: "DE" },
] as const;

export const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const t = useTranslations("features.languageSwitcher");
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale, scroll: false });
      router.refresh();
    });
  };

  const dropdownItems = LANGUAGES.map(({ code, label, badge }) => ({
    id: code,
    label: label,
    badge: badge,
    isActive: locale === code,
    onClick: () => handleLanguageChange(code),
    disabled: isPending,
  }));

  const triggerButton = (
    <Button
      variant="ghost"
      size="icon"
      className="hover:text-foreground! text-foreground inline-flex shrink-0 items-center justify-center p-0 hover:bg-white/5"
      aria-label={t("ariaLabel")}
    >
      <Languages className="size-5.5 md:size-5" />
    </Button>
  );

  return <StandardDropdown trigger={triggerButton} items={dropdownItems} />;
};
