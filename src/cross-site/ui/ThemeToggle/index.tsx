"use client";

import { useTheme } from "next-themes";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme !== "light";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="cursor-pointer size-9 flex items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface-alt"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
