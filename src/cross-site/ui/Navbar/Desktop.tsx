"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangAndTheme } from "./LangAndTheme";

export function Desktop({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  return (
    <>
      <nav
        aria-label="Main navigation"
        className="hidden md:flex items-center gap-1"
      >
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
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

      <div className="hidden md:flex items-center gap-2">
        <LangAndTheme />
      </div>
    </>
  );
}
