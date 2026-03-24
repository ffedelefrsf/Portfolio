import { LanguageSwitcher } from "@/cross-site/ui/i18n/LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";

export function LangAndTheme() {
  return (
    <div className="flex gap-2">
      <LanguageSwitcher />
      <ThemeToggle className="cursor-pointer size-9 flex items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface-alt" />
    </div>
  );
}
