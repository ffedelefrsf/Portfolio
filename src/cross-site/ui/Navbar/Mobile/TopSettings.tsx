"use client";

import { useLayoutEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import Cookies from "js-cookie";
import { LanguageSwitcher } from "../../i18n/LanguageSwitcher";
import { ThemeToggle } from "../../ThemeToggle";
import { Button } from "@/components/ui/button";

const VISIBILITY_COOKIE_KEY = "top-settings-visibility";

export function TopSettings() {
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const historicalVisibility = Cookies.get(VISIBILITY_COOKIE_KEY);
    if (historicalVisibility === "false") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
    }
  }, []);

  const hideTopSettings = () => {
    setVisible(false);
    Cookies.set(VISIBILITY_COOKIE_KEY, "false");
  };

  return (
    <div
      className={`sm:hidden relative ${visible ? "flex" : "hidden"} justify-between w-full border-b p-3`}
    >
      <LanguageSwitcher />
      <ThemeToggle />
      <Button
        variant="ghost"
        className="absolute left-[50%] transform-[translateX(-50%)] bottom-0"
        onClick={hideTopSettings}
      >
        <ChevronUp />
      </Button>
    </div>
  );
}
