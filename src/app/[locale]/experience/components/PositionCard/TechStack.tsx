import { technologies } from "@/cross-site/ui/technologies";
import { cn } from "@/lib/utils";

type Props = { tech: string[] };

export function TechStack({ tech }: Props) {
  return (
    <div
      className={cn(
        "mt-4",
        "flex",
        "flex-wrap",
        "gap-1.5",
        "border-t",
        "border-border",
        "pt-4",
      )}
    >
      {tech.map((techId) => {
        const entry = technologies[techId];
        const Icon = entry.component;
        return (
          <span
            key={techId}
            className={cn(
              "inline-flex",
              "items-center",
              "gap-1.5",
              "rounded-md",
              "border",
              "border-border",
              "bg-neutral-50",
              "px-2",
              "py-0.5",
              "font-mono",
              "text-xs",
              "text-foreground",
              "dark:bg-neutral-800",
            )}
          >
            {Icon && (
              <Icon
                aria-hidden
                width={12}
                height={12}
                className={cn("size-3", "shrink-0", "object-contain", {
                  invert: entry.shouldInvertOnLight,
                  "dark:invert-0": entry.shouldInvertOnLight,
                })}
              />
            )}
            {entry.name}
          </span>
        );
      })}
    </div>
  );
}
