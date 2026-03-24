"use client";

import { setLocale } from "../../../i18n/actions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";

const items = [
  { value: "en", label: "🇬🇧", lang: "English" },
  { value: "es", label: "🇪🇸", lang: "Español" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();

  async function handleChange(value: string | null) {
    if (value) {
      await setLocale(value);
    }
  }

  return (
    <Select items={items} onValueChange={handleChange} value={locale}>
      <SelectTrigger className="w-full max-w-15 cursor-pointer dark:bg-transparent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-30 max-w-30">
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="cursor-pointer"
            >
              {item.label} {item.lang}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
