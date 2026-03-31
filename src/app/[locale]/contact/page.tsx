import { getTranslations } from "next-intl/server";
import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { Params } from "../types";
import { ContactCard } from "./components/ContactCard";
import { CONTACT_METHODS } from "./data";
import { TRANSLATION_NAME } from "./translation/config";

export default async function ContactPage({ params }: Params) {
  await initializeI18N(params);
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <section>
      <div className={cn("mb-10", "max-w-2xl")}>
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

      <div className={cn("flex", "flex-col", "gap-5", "max-w-4xl")}>
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
    </section>
  );
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
