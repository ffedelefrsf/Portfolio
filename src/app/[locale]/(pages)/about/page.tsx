import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageWrapper } from "@/cross-site/ui/PageWrapper";
import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { Params } from "../../types";
import { HowIWork } from "./components/HowIWork";
import { Personal } from "./components/Personal";
import { TRANSLATION_NAME } from "./translation/config";

export default async function AboutPage({ params }: Params) {
  const { locale } = await params;
  await initializeI18N(locale);

  return (
    <PageWrapper translationName={TRANSLATION_NAME}>
      <HowIWork />
      <Personal />
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
