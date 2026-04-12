import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../translation/config";

export async function CTAs() {
  const locale = await getLocale();
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <div className={cn("flex", "flex-col", "w-40", "sm:w-full", "gap-3")}>
      <Link
        href={`/${locale}/contact`}
        className={cn(
          "px-5",
          "py-3",
          "sm:py-2.5",
          "rounded-lg",
          "bg-primary",
          "text-primary-foreground",
          "font-semibold",
          "text-sm",
          "text-center",
          "transition-opacity",
          "hover:opacity-80",
          "focus-visible:outline-2",
          "focus-visible:outline-offset-2",
          "focus-visible:outline-primary",
        )}
      >
        {t("hero.cta.primary")}
      </Link>
      <Link
        href={`/${locale}/experience`}
        className={cn(
          "px-5",
          "py-3",
          "sm:py-2.5",
          "rounded-lg",
          "bg-secondary-100",
          "opacity-60",
          "text-black",
          "font-semibold",
          "text-sm",
          "text-center",
          "transition-opacity",
          "hover:opacity-80",
          "focus-visible:outline-2",
          "focus-visible:outline-offset-2",
          "focus-visible:outline-primary",
        )}
      >
        {t("hero.cta.secondary")}
      </Link>
    </div>
  );
}
