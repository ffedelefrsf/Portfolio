"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../translation/config";
import { HomeIcon } from "./HomeIcon";

export function Home() {
  const t = useTranslations(TRANSLATION_NAME);
  const pathname = usePathname();
  const locale = useLocale();

  const isActive = pathname === `/${locale}`;
  return (
    <Link
      href={`/${locale}`}
      aria-label={t("home")}
      className={cn(
        "items-center",
        "gap-2.5",
        "text-foreground",
        "hover:opacity-80",
        "transition-opacity",
      )}
    >
      <HomeIcon
        className={cn("w-6", "h-6", "sm:w-7.5", "sm:h-7.5", {
          "fill-primary": isActive,
          "light:fill-black": !isActive,
          "dark:fill-white": !isActive,
        })}
        aria-hidden="true"
      />
    </Link>
  );
}
