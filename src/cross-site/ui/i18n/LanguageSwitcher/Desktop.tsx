"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SupportedLanguage } from "@/i18n/types";
import { SELECT_ITEMS } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../Navbar/translation/config";

export function DesktopLanguageSwitcher() {
  const locale = useLocale() as SupportedLanguage;
  const t = useTranslations(TRANSLATION_NAME);
  const pathname = usePathname();

  const nextLocale = locale === "en" ? "es" : "en";
  const href = pathname.replace(locale, nextLocale);

  return (
    <nav aria-label={t("languageSelection")}>
      <Select items={SELECT_ITEMS} value={locale}>
        <SelectTrigger
          className={cn(
            "w-full",
            "max-w-15",
            "cursor-pointer",
            "dark:bg-transparent",
          )}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className={cn("min-w-30", "max-w-30")}>
          <SelectGroup>
            <SelectLabel>Language</SelectLabel>
            {SELECT_ITEMS.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className={cn("cursor-pointer")}
              >
                <Link href={href} prefetch>
                  {item.label} {item.name}
                </Link>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </nav>
  );
}
