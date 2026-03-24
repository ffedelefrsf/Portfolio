export const SUPPORTED_LANGUAGES = ["en", "es"] as const;

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
