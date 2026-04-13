import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageWrapper } from "@/cross-site/ui/PageWrapper";
import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { Params } from "../../types";
import { PositionCard } from "./components/PositionCard";
import { EXPERIENCE_ENTRIES } from "./data";
import { TRANSLATION_NAME } from "./translation/config";

export default async function ExperiencePage({ params }: Params) {
  const { locale } = await params;
  await initializeI18N(locale);

  return (
    <PageWrapper translationName={TRANSLATION_NAME}>
      <div className={cn("relative")}>
        <div
          className={cn(
            "absolute",
            "bottom-0",
            "left-2.75",
            "top-6",
            "w-0.5",
            "bg-border",
          )}
        />
        <div>
          {EXPERIENCE_ENTRIES.map((entry) => (
            <PositionCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: TRANSLATION_NAME });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export const dynamic = "force-static";
