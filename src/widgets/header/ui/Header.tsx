import { Logo } from "./Logo";
import { MobileNavBox } from "./MobileNavBox";
import { Navigation } from "./Navigation";

/**
 * Серверный компонент шапки. Основной каркас и композиция.
 */
export const Header = () => {
  return (
    <header className="bg-card/80 border-border sticky top-0 z-50 flex w-full flex-col items-center border-b px-4 py-4 backdrop-blur-2xl sm:px-6 md:px-8 md:py-5 lg:px-12 lg:py-6">
      <div className="flex w-full max-w-300 items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        {/* Мобильная навигация (клиентская шторка) */}
        <MobileNavBox />

        {/* Десктопная навигация (клиентская) */}
        <Navigation className="hidden md:flex" />
      </div>
    </header>
  );
};
