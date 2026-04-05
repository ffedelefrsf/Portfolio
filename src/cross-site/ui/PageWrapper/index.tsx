import { getTranslations } from "next-intl/server";
import { PropsWithChildren } from "react";
import { TranslationName } from "@/i18n/types";
import { cn } from "@/lib/utils";

type Props = {
  translationName: TranslationName;
};

export async function PageWrapper({
  translationName,
  children,
}: PropsWithChildren<Props>) {
  const t = await getTranslations(translationName);

  return (
    <article className={cn("max-w-(--desktop-max-width)")}>
      <div className={cn("mb-10")}>
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
      {children}
    </article>
  );
}
