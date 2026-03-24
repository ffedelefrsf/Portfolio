"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { TRANSLATION_NAME } from "../Navbar/translation/config";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }: { className: string }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations(TRANSLATION_NAME);

  const isDark = !mounted || resolvedTheme !== "light";

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        isDark
          ? t("mobileSettings.switchToLight")
          : t("mobileSettings.switchToDark")
      }
      className={className}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
