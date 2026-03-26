import { getTranslations } from "next-intl/server";

import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";

import { Params } from "../types";
import { SkillsGrid } from "./components/SkillsGrid";
import { TRANSLATION_NAME } from "./translation/config";

export default async function SkillsPage({ params }: Params) {
  await initializeI18N(params);
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <section className={cn("px-4", "py-12", "w-full", "sm:px-6", "lg:px-8")}>
      <div className={cn("mb-16")}>
        <h1
          className={cn(
            "mb-4",
            "text-4xl",
            "font-bold",
            "tracking-tight",
            "text-foreground",
            "sm:text-5xl",
          )}
        >
          {t("title")}
        </h1>
        <p className={cn("text-lg", "text-muted")}>{t("subtitle")}</p>
      </div>
      <SkillsGrid />
    </section>
  );
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
