import { cn } from "@/lib/utils";

import { LangAndTheme } from "../LangAndTheme";
import { Link } from "../types";
import { Home } from "./Home";
import { NavLink } from "./NavLink";

export function Desktop({ links }: { links: Link[] }) {
  return (
    <div
      className={cn(
        "hidden",
        "sm:flex",
        "justify-center",
        "h-full",
        "w-full",
        "border-b",
        "border-border",
        "bg-background/50",
        "backdrop-blur-md",
        "shadow-sm",
      )}
    >
      <div className={cn("flex", "items-center", "h-full", "gap-5", "w-full", "px-6", "max-w-7xl")}>
        <nav
          aria-label="Main navigation"
          className={cn("flex", "items-center", "justify-between", "h-full", "w-full")}
        >
          <Home />
          <div className={cn("flex", "items-center", "gap-3")}>
            {links.map(({ href, label }) => {
              return <NavLink key={href} href={href} label={label} />;
            })}
          </div>
        </nav>
        <div className={cn("flex", "items-center", "gap-1")}>
          <LangAndTheme />
        </div>
      </div>
    </div>
  );
}
