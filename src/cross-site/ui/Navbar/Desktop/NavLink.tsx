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
        "relative",
        "flex",
        "h-full",
        "items-center",
        "px-3",
        "text-sm",
        "font-medium",
        "transition-colors",
        "after:absolute",
        "after:bottom-0",
        "after:inset-x-0",
        "after:h-0.5",
        "after:rounded-full",
        "after:bg-primary",
        "after:transition-transform",
        "after:duration-200",
        "after:origin-center",
        {
          "text-primary": isActive,
          "dark:text-primary-400": isActive,
          "after:scale-x-100": isActive,
          "text-foreground/70": !isActive,
          "hover:text-foreground": !isActive,
          "after:scale-x-0": !isActive,
          "hover:after:scale-x-100": !isActive,
        },
      )}
    >
      {label}
    </Link>
  );
}
