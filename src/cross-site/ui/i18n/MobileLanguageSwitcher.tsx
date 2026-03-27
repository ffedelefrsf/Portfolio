"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { setLocale } from "@/i18n/actions";
import { SupportedLanguage } from "@/i18n/types";
import { LANGUAGE_NAMES_AND_FLAGS_MAP } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../Navbar/translation/config";

export function MobileLanguageSwitcher() {
  const locale = useLocale() as SupportedLanguage;
  const t = useTranslations(TRANSLATION_NAME);
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "es" : "en";
  const nextLanguage = LANGUAGE_NAMES_AND_FLAGS_MAP[nextLocale];

  async function handleSwitch() {
    await setLocale(nextLocale);
    router.push(pathname.replace(locale, nextLocale));
  }

  return (
    <Button
      variant="ghost"
      onClick={handleSwitch}
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
    </Button>
  );
}
