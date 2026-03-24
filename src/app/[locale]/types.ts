import { SupportedLanguage } from "@/i18n/types";

export type Params = {
  params: Promise<{ locale: SupportedLanguage }>;
};
