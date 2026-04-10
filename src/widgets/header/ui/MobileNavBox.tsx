"use client";

import { HeaderNavProps } from "./HeaderNav";
import { MobileMenu } from "./MobileMenu";

/**
 * Обертка для мобильной навигации.
 * Нужна для корректной передачи render-prop в MobileMenu в обход ограничений серверных компонентов.
 */
export const MobileNavBox = () => {
  return (
    <MobileMenu>
      {({ close }) => (
        <div className="flex h-full flex-col overflow-y-auto px-6 py-6">
          <HeaderNavProps className="mt-6 flex-1" isMobile onItemClick={close} />
        </div>
      )}
    </MobileMenu>
  );
};
