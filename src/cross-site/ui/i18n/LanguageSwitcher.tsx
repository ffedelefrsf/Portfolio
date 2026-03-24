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
import { SELECT_ITEMS } from "@/i18n/utils";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();

  async function handleChange(value: string | null) {
    if (value) {
      await setLocale(value);
    }
  }

  return (
    <Select items={SELECT_ITEMS} onValueChange={handleChange} value={locale}>
      <SelectTrigger className="w-full max-w-15 cursor-pointer dark:bg-transparent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-30 max-w-30">
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {SELECT_ITEMS.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="cursor-pointer"
            >
              {item.label} {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
