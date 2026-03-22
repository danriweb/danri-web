import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ru", "en", "ko", "ja", "de"],
  defaultLocale: "ru",
  localePrefix: "never",
});
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
