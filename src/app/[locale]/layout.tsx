import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Navbar } from "@/cross-site/ui/Navbar";
import { MobileSettingsButton } from "@/cross-site/ui/Navbar/Mobile/MobileSettingsButton";
import { isSupportedLanguage } from "@/i18n/utils";

export default async function LocaleLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;

  if (!isSupportedLanguage(locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <Navbar locale={locale} />
      <MobileSettingsButton />
      {children}
    </NextIntlClientProvider>
  );
}
