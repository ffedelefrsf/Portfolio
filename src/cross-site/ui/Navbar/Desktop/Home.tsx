"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { TRANSLATION_NAME } from "../translation/config";
import { HomeIcon } from "./HomeIcon";
import { usePathname } from "next/navigation";

export function Home() {
  const t = useTranslations(TRANSLATION_NAME);
  const pathname = usePathname();
  const isActive = pathname === "/";
  return (
    <Link
      href="/"
      aria-label={t("home")}
      className="items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity"
    >
      <HomeIcon
        className="light:fill-black dark:fill-white w-6 h-6 sm:w-7.5 sm:h-7.5"
        aria-hidden="true"
        {...(isActive && { style: { fill: "var(--color-primary-400)" } })}
      />
    </Link>
  );
}
