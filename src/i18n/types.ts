import { SUPPORTED_LANGUAGES } from "./utils";

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export type TranslationName =
  | "Navbar"
  | "Home"
  | "Skills"
  | "Experience"
  | "About"
  | "Contact";
