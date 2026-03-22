import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";

import { FooterNav } from "./FooterNav";

export const Footer = () => {
  return (
    <footer className="border-border/30 border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 md:px-6 md:py-16">
        {/* Верхняя строка: логотип + навигация */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-3" aria-label="DanriWeb — на главную">
            <Image
              src="/favicon.svg"
              alt=""
              width={28}
              height={28}
              aria-hidden="true"
              className="h-7 w-7 object-contain"
            />
            <span className="font-inter text-foreground text-xl font-extrabold">DANRIWEB</span>
          </Link>

          <FooterNav />
        </div>

        {/* Нижняя строка: копирайт + соцсети */}
        <div className="border-border/20 flex flex-col-reverse items-start gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground/50 text-[11px] tracking-[2px] uppercase">
            © 2026 DanriWeb · Frontend Developer · Казахстан
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/danriweb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub className="size-5" />
            </Link>
            <Link
              href="https://t.me/danriweb_online"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaTelegram className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
