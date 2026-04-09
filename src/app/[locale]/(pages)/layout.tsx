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
        "px-4",
        "py-12",
        "sm:px-6",
        "lg:px-8",
        "w-full",
        "max-w-(--desktop-max-width)",
      )}
    >
      {children}
    </main>
  );
}
