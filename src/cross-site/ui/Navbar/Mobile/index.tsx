"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { LangAndTheme } from "../LangAndTheme";
import { XIcon } from "./icons/XIcon";
import { MenuIcon } from "./icons/MenuIcon";
import { useTranslations } from "next-intl";
import { TRANSLATION_NAME } from "../translation/config";

export function Mobile({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations(TRANSLATION_NAME);
  return (
    <>
      <div className="flex md:hidden items-center gap-2">
        <LangAndTheme />
        <button
          type="button"
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden size-9 flex items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface-alt"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-2 px-4 flex flex-col gap-1 shadow-md"
        >
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary-700 dark:text-primary-400 bg-primary-100 dark:bg-primary-950"
                    : "text-foreground hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-alt"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
