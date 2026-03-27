import { setRequestLocale } from "next-intl/server";
import { Params } from "@/app/[locale]/types";
import { SupportedLanguage } from "./types";

export const SUPPORTED_LANGUAGES = ["en", "es"] as const;

export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

export const LANGUAGE_NAMES_AND_FLAGS_MAP: Record<
  (typeof SUPPORTED_LANGUAGES)[number],
  { name: string; flag: string }
> = {
  en: { name: "English", flag: "🇺🇸" },
  es: { name: "Español", flag: "🇪🇸" },
};

export const SELECT_ITEMS = Object.entries(LANGUAGE_NAMES_AND_FLAGS_MAP).map(
  ([value, { name, flag }]) => ({
    value,
    name,
    label: flag,
  }),
);

export async function initializeI18N(params: Params["params"]) {
  const { locale } = await params;
  setRequestLocale(locale);
}
