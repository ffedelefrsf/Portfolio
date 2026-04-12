import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../translation/config";
import styles from "./greetings.module.css";

export async function Greetings() {
  const t = await getTranslations(TRANSLATION_NAME);
  const locale = await getLocale();

  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "my-10",
        "sm:my-0",
        "mx-10",
        "sm:mx-4",
        "sm:w-1/3",
        "z-10",
      )}
    >
      <h1
        className={cn(
          "text-5xl",
          "sm:text-6xl",
          "lg:text-7xl",
          "font-bold",
          "tracking-tight",
          "text-foreground",
          "font-mono",
          "leading-tight",
          "whitespace-break-spaces",
          "mb-8",
        )}
      >
        {t("hero.greeting")}
        <p>Fausto </p>
        <p className="whitespace-nowrap">
          Fedele
          <span
            aria-hidden="true"
            className={cn("inline-block", styles["animate-caret"])}
          >
            |
          </span>
        </p>
      </h1>
      <div
        className={cn(
          "flex",
          "flex-col",
          "lg:flex-row",
          "w-40",
          "sm:w-full",
          "gap-3",
        )}
      >
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
    </div>
  );
}
