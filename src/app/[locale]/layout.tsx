import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import { Navbar } from "@/cross-site/ui/Navbar";
import { MobileSettingsButton } from "@/cross-site/ui/Navbar/Mobile/MobileSettingsButton";
import { SupportedLanguage } from "@/i18n/types";
import { SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";

export default async function LocaleLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: SupportedLanguage }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;

  if (!SUPPORTED_LANGUAGES.includes(locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <Navbar locale={locale} />
      <MobileSettingsButton />
      <main
        className={cn(
          "mb-(--mobile-nav-height)",
          "sm:mb-[unset]",
          "p-3",
          "max-w-7xl",
        )}
      >
        {children}
      </main>
    </NextIntlClientProvider>
  );
}
