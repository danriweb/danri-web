import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

import { LanguageSwitcher } from "@features/language-switcher";

import { Button } from "@shadcn";

import { HeaderNavProps } from "./HeaderNav";
import { Logo } from "./Logo";
import { MobileNavBox } from "./MobileNavBox";

/**
 * Серверный компонент шапки. Основной каркас и композиция.
 */
export const Header = () => {
  const t = useTranslations("widgets.header");

  return (
    <header className="bg-card/80 border-border sticky top-0 z-50 flex w-full flex-col items-center border-b px-4 py-4 backdrop-blur-2xl sm:px-6 md:px-8 md:py-5 lg:px-12 lg:py-6">
      <div className="flex w-full max-w-300 items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        <div className="flex items-center gap-5 md:gap-4">
          {/* Десктопная навигация (клиентская) */}
          <HeaderNavProps className="hidden md:flex" />

          {/* Ссылка на открытый исходный код */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:text-foreground! text-foreground inline-flex shrink-0 items-center justify-center p-0 hover:bg-white/5"
          >
            <a
              href="https://github.com/danriweb/danri-web"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("sourceCode")}
              title={t("sourceCode")}
            >
              <FaGithub className="size-5.5 md:size-5" />
            </a>
          </Button>

          {/* Переключатель языка */}
          <LanguageSwitcher />

          {/* Мобильная навигация (клиентская шторка) */}
          <MobileNavBox />
        </div>
      </div>
    </header>
  );
};
