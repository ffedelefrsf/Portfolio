import { getTranslations } from "next-intl/server";
import { SupportedLanguage } from "@/i18n/types";
import { cn } from "@/lib/utils";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { TRANSLATION_NAME } from "./translation/config";
import { Link } from "./types";

export async function Navbar({ locale }: { locale: SupportedLanguage }) {
  const t = await getTranslations(TRANSLATION_NAME);

  const links: Link[] = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/skills`, label: t("skills") },
    { href: `/${locale}/experience`, label: t("experience") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "relative",
        "w-full",
        "sm:sticky",
        "sm:h-16",
        "sm:top-0",
        "sm:z-50",
      )}
    >
      <Desktop links={links.slice(1)} />
      <Mobile links={links} />
    </header>
  );
}
