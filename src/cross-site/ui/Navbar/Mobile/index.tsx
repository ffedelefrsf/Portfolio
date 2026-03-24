"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness, House, LibraryBig, Mail, User } from "lucide-react";
import { ElementType } from "react";
import { Link as LinkType } from "../types";

const PAGE_ICON_MAP: Record<LinkType["href"], ElementType> = {
  "/": House,
  "/skills": LibraryBig,
  "/experience": BriefcaseBusiness,
  "/about": User,
  "/contact": Mail,
};

export function Mobile({ links }: { links: LinkType[] }) {
  const pathname = usePathname();

  return (
    <div className="fixed sm:hidden inset-x-0 bottom-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 h-(--mobile-nav-height)">
      <nav className="border-t">
        <div className="mx-auto flex max-w-md items-stretch justify-between px-2 py-2">
          {links.map(({ href, label }) => {
            const Icon = PAGE_ICON_MAP[href];
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  `flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs
                 transition-colors ${
                   isActive
                     ? "text-primary-700 dark:text-primary-400 bg-primary-100 dark:bg-primary-950"
                     : "text-foreground hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-alt"
                 }`,
                )}
              >
                <Icon
                  className="h-5 w-5 shrink-0"
                  {...(isActive && {
                    style: { stroke: "var(--color-primary-400)" },
                  })}
                />
                <span className="truncate text-[11px] leading-none">
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
