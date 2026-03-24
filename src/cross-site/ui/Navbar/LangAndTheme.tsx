import { LanguageSwitcher } from "@/cross-site/ui/i18n/LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";

export function LangAndTheme() {
  return (
    <div className="flex gap-2">
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  );
}
