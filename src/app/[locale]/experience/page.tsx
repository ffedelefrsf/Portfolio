import { getTranslations } from "next-intl/server";
import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { Params } from "../types";
import { PositionsList } from "./components/PositionsList";
import { TRANSLATION_NAME } from "./translation/config";

export default async function ExperiencePage({ params }: Params) {
  await initializeI18N(params);
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <section>
      <div className={cn("mb-16", "max-w-2xl")}>
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
      <PositionsList />
    </section>
  );
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
