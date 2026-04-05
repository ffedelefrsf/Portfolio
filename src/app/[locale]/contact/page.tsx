import { getTranslations } from "next-intl/server";
import { PageWrapper } from "@/cross-site/ui/PageWrapper";
import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { Params } from "../types";
import { ContactCard } from "./components/ContactCard";
import { CONTACT_METHODS } from "./data";
import { TRANSLATION_NAME } from "./translation/config";

export default async function ContactPage({ params }: Params) {
  const { locale } = await params;
  await initializeI18N(locale);
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <PageWrapper translationName={TRANSLATION_NAME}>
      <div className={cn("flex", "flex-col", "gap-5")}>
        <p className={cn("text-base", "text-muted", "leading-relaxed", "mb-8")}>
          {t("description")}
        </p>

        <div className={cn("grid", "gap-3", "sm:grid-cols-2")}>
          {CONTACT_METHODS.map((method) => (
            <ContactCard
              key={method.id}
              href={method.href}
              Icon={method.Icon}
              label={t(`methods.${method.id}.label`)}
              value={method.value}
              action={t(`methods.${method.id}.action`)}
              openInNewTab={method.openInNewTab}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
