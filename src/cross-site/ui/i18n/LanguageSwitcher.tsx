"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SELECT_ITEMS, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { setLocale } from "../../../i18n/actions";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    SUPPORTED_LANGUAGES.forEach((supportedLanguage) => {
      if (locale !== supportedLanguage) {
        router.prefetch(pathname.replace(locale, supportedLanguage));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, pathname]);

  async function handleChange(value: string | null) {
    if (value) {
      await setLocale(value);
      router.push(pathname.replace(locale, value));
    }
  }

  return (
    <Select items={SELECT_ITEMS} onValueChange={handleChange} value={locale}>
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
              {item.label} {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
