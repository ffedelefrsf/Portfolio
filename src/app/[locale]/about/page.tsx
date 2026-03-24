import { getTranslations } from "next-intl/server";

import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";

import { Params } from "../types";
import { TRANSLATION_NAME } from "./translation/config";

export default async function AboutPage({ params }: Params) {
  await initializeI18N(params);
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <section className={cn("flex", "flex-1", "items-center", "justify-center")}>
      <h1 className={cn("text-2xl", "font-semibold", "text-foreground")}>
        {t("title")}
      </h1>
    </section>
  );
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
