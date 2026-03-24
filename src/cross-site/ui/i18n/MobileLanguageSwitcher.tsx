"use client";

import { useLocale, useTranslations } from "next-intl";
import { setLocale } from "@/i18n/actions";
import { SupportedLanguage } from "@/i18n/types";
import { LANGUAGE_NAMES_AND_FLAGS_MAP } from "@/i18n/utils";
import { Button } from "@/components/ui/button";
import { TRANSLATION_NAME } from "../Navbar/translation/config";

export function MobileLanguageSwitcher() {
  const locale = useLocale() as SupportedLanguage;
  const t = useTranslations(TRANSLATION_NAME);

  const nextLocale = locale === "en" ? "es" : "en";
  const nextLanguage = LANGUAGE_NAMES_AND_FLAGS_MAP[nextLocale];

  return (
    <Button
      variant="ghost"
      onClick={() => setLocale(nextLocale)}
      aria-label={`${t("mobileSettings.switchLanguage")} ${nextLanguage.name}`}
      className="flex items-center px-3 py-2 text-foreground hover:bg-surface-alt transition-colors"
    >
      <span className="text-base leading-none" aria-hidden="true">
        {nextLanguage.flag}
      </span>
    </Button>
  );
}
