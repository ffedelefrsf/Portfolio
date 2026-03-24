"use client";

import { BriefcaseBusiness, House, LibraryBig, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ElementType } from "react";

import { cn } from "@/lib/utils";

import { Link as LinkType } from "../types";

const PAGE_ICON_MAP: Record<string, ElementType> = {
  "/": House,
  "/skills": LibraryBig,
  "/experience": BriefcaseBusiness,
  "/about": User,
  "/contact": Mail,
};

export function Mobile({ links }: { links: LinkType[] }) {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div
      className={cn(
        "fixed",
        "sm:hidden",
        "inset-x-0",
        "bottom-0",
        "z-50",
        "bg-background/95",
        "backdrop-blur",
        "supports-backdrop-filter:bg-background/80",
        "h-(--mobile-nav-height)",
      )}
    >
      <nav className={cn("border-t")}>
        <div
          className={cn(
            "mx-auto",
            "flex",
            "max-w-md",
            "items-stretch",
            "justify-between",
            "px-2",
            "py-2",
          )}
        >
          {links.map(({ href, label }) => {
            const cleanedHref =
              href === `/${locale}` ? "/" : href.replace(`/${locale}`, "");
            const Icon = PAGE_ICON_MAP[cleanedHref];
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex",
                  "min-w-0",
                  "flex-1",
                  "flex-col",
                  "items-center",
                  "justify-center",
                  "gap-1",
                  "rounded-xl",
                  "px-2",
                  "py-2",
                  "text-xs",
                  "transition-colors",
                  {
                    "text-primary-700": isActive,
                    "dark:text-primary-400": isActive,
                    "bg-primary-100": isActive,
                    "dark:bg-primary-950": isActive,
                    "text-foreground": !isActive,
                    "hover:text-primary-600": !isActive,
                    "dark:hover:text-primary-400": !isActive,
                    "hover:bg-surface-alt": !isActive,
                  },
                )}
              >
                <Icon
                  className={cn("h-5", "w-5", "shrink-0")}
                  {...(isActive && {
                    style: { stroke: "var(--color-primary-400)" },
                  })}
                />
                <span className={cn("truncate", "text-[11px]", "leading-none")}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
