import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { TRANSLATION_NAME } from "./translation/config";

export async function Navbar() {
  const t = await getTranslations(TRANSLATION_NAME);

  const links = [
    { href: "/skills", label: t("skills") },
    { href: "/experience", label: t("experience") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/50 backdrop-blur-md shadow-sm">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          aria-label={t("home")}
          className="flex items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity"
        >
          <span className="hidden sm:block text-sm font-semibold tracking-tight">
            {t("home")}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Desktop links={links} />
          <Mobile links={links} />
        </div>
      </div>
    </header>
  );
}
