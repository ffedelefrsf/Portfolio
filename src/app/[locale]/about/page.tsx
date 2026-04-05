import { PageWrapper } from "@/cross-site/ui/PageWrapper";
import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { Params } from "../types";
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

export const dynamic = "force-static";
