import { SupportedLanguage } from "@/i18n/types";

export type Page =
  | `/${SupportedLanguage}`
  | `/${SupportedLanguage}/skills`
  | `/${SupportedLanguage}/experience`
  | `/${SupportedLanguage}/about`
  | `/${SupportedLanguage}/contact`;
export type Link = { href: Page; label: string };
