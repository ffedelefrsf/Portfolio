import { cn } from "@/lib/utils";

import { MobileLanguageSwitcher } from "../../i18n/MobileLanguageSwitcher";
import { ThemeToggle } from "../../ThemeToggle";

export function MobileSettingsButton() {
  return (
    <div
      className={cn(
        "fixed",
        "top-4",
        "right-4",
        "z-50",
        "sm:hidden",
        "flex",
        "items-center",
        "rounded-full",
        "border",
        "border-border",
        "bg-card",
        "shadow-md",
        "overflow-hidden",
      )}
    >
      <MobileLanguageSwitcher />
      <span className={cn("h-4", "w-px", "bg-border", "shrink-0")} aria-hidden="true" />
      <ThemeToggle
        className={cn(
          "flex",
          "items-center",
          "px-3",
          "py-2",
          "text-foreground",
          "hover:bg-surface-alt",
          "transition-colors",
        )}
      />
    </div>
  );
}
