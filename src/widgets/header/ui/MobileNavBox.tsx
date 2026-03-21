"use client";

import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

/**
 * Обертка для мобильной навигации.
 * Нужна для корректной передачи render-prop в MobileMenu в обход ограничений серверных компонентов.
 */
export const MobileNavBox = () => {
  return (
    <MobileMenu>
      {({ close }) => (
        <div className="flex h-full flex-col">
          <Navigation className="mt-12 flex-1" isMobile onItemClick={close} />
        </div>
      )}
    </MobileMenu>
  );
};
