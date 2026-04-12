"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { SupportedLanguage } from "@/i18n/types";
import { LANGUAGE_NAMES_AND_FLAGS_MAP } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../Navbar/translation/config";

export function MobileLanguageSwitcher() {
  const locale = useLocale() as SupportedLanguage;
  const t = useTranslations(TRANSLATION_NAME);
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "es" : "en";
  const nextLanguage = LANGUAGE_NAMES_AND_FLAGS_MAP[nextLocale];
  const href = pathname.replace(locale, nextLocale);

  return (
    <nav
      aria-label={t("languageSelection")}
      className={cn("flex", "items-center")}
    >
      <Link
        href={href}
        prefetch
        aria-label={`${t("mobileSettings.switchLanguage")} ${nextLanguage.name}`}
        className={cn(
          "flex",
          "items-center",
          "px-3",
          "py-2",
          "text-foreground",
          "hover:bg-surface-alt",
          "transition-colors",
        )}
      >
        <span className={cn("text-base", "leading-none")} aria-hidden="true">
          {nextLanguage.flag}
        </span>
      </Link>
    </nav>
  );
}
