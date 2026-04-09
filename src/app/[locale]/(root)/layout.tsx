import { cn } from "@/lib/utils";

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={cn(
        "mb-(--mobile-nav-height)",
        "sm:mb-[unset]",
        "w-full",
        "max-w-(--desktop-max-width)",
        "flex",
        "flex-col",
        "grow",
      )}
    >
      {children}
    </main>
  );
}
