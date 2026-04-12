import { cn } from "@/lib/utils";
import { DesktopLanguageSwitcher } from "../i18n/LanguageSwitcher/Desktop";
import { ThemeToggle } from "../ThemeToggle";

export function LangAndTheme() {
  return (
    <div className={cn("flex", "gap-2")}>
      <DesktopLanguageSwitcher />
      <ThemeToggle
        className={cn(
          "cursor-pointer",
          "size-9",
          "flex",
          "items-center",
          "justify-center",
          "rounded-lg",
          "border",
          "border-border",
          "text-foreground",
          "transition-colors",
          "hover:bg-surface-alt",
        )}
      />
    </div>
  );
}
