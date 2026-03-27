"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      key={href}
      href={href}
      prefetch
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "px-3",
        "py-1.5",
        "rounded-lg",
        "text-sm",
        "font-medium",
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
      {label}
    </Link>
  );
}
