import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { Params } from "../types";
import { TRANSLATION_NAME } from "./translation/config";

export default async function Home({ params }: Params) {
  await initializeI18N(params);
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <section className={cn("flex", "flex-col")}>
      {/* Hero */}
      <div
        className={cn(
          "flex",
          "flex-1",
          "flex-col",
          "items-center",
          "justify-center",
          "min-h-[calc(100vh-4rem)]",
          "px-4",
          "sm:px-6",
          "lg:px-8",
          "py-24",
        )}
      >
        <div className={cn("mx-auto", "max-w-3xl", "text-center")}>
          {/* Role badge */}
          <div
            className={cn(
              "inline-flex",
              "items-center",
              "gap-2",
              "rounded-full",
              "border",
              "border-primary-200",
              "dark:border-primary-800",
              "bg-primary-50",
              "dark:bg-primary-950/60",
              "px-4",
              "py-1.5",
              "text-sm",
              "font-medium",
              "text-primary-700",
              "dark:text-primary-400",
              "mb-10",
            )}
          >
            <span
              className={cn(
                "size-1.5",
                "rounded-full",
                "bg-primary-500",
                "dark:bg-primary-400",
              )}
            />
            {t("hero.badge")}
          </div>

          {/* Greeting + Name */}
          <h1
            className={cn(
              "text-5xl",
              "sm:text-6xl",
              "lg:text-7xl",
              "font-bold",
              "tracking-tight",
              "text-foreground",
              "mb-5",
            )}
          >
            {t("hero.greeting")}{" "}
            <span
              className={cn(
                "bg-linear-to-r",
                "from-primary-600",
                "to-secondary-500",
                "dark:from-primary-400",
                "dark:to-secondary-400",
                "bg-clip-text",
                "text-transparent",
              )}
            >
              {t("hero.name")}
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={cn(
              "text-xl",
              "sm:text-2xl",
              "font-medium",
              "text-muted",
              "mb-6",
            )}
          >
            {t("hero.title")}
          </p>

          {/* Description */}
          <p
            className={cn(
              "text-base",
              "sm:text-lg",
              "text-muted",
              "max-w-xl",
              "mx-auto",
              "mb-12",
              "leading-relaxed",
            )}
          >
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "flex",
              "flex-col",
              "xs:flex-row",
              "items-center",
              "justify-center",
              "gap-3",
            )}
          >
            <Link
              href="/experience"
              className={cn(
                "w-full",
                "xs:w-auto",
                "inline-flex",
                "items-center",
                "justify-center",
                "px-6",
                "py-3",
                "rounded-xl",
                "bg-primary-600",
                "dark:bg-primary-500",
                "text-white",
                "font-semibold",
                "text-sm",
                "transition-colors",
                "hover:bg-primary-700",
                "dark:hover:bg-primary-600",
              )}
            >
              {t("hero.cta.primary")}
            </Link>
            <Link
              href="/contact"
              className={cn(
                "w-full",
                "xs:w-auto",
                "inline-flex",
                "items-center",
                "justify-center",
                "px-6",
                "py-3",
                "rounded-xl",
                "border",
                "border-border",
                "text-foreground",
                "font-semibold",
                "text-sm",
                "transition-colors",
                "hover:bg-surface-alt",
              )}
            >
              {t("hero.cta.secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
