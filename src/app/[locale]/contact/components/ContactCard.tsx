import { ExternalLink } from "lucide-react";
import type { ElementType } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  Icon: ElementType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
  action: string;
  openInNewTab: boolean;
};

export function ContactCard({
  href,
  Icon,
  label,
  value,
  action,
  openInNewTab,
}: Props) {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      aria-label={action}
      className={cn(
        "group",
        "flex",
        "items-center",
        "gap-4",
        "rounded-xl",
        "border",
        "border-border",
        "bg-card",
        "p-5",
        "transition-all",
        "hover:border-primary",
        "hover:shadow-sm",
      )}
    >
      <div
        className={cn(
          "flex",
          "size-11",
          "shrink-0",
          "items-center",
          "justify-center",
          "rounded-lg",
          "bg-primary-50",
          "dark:bg-primary-950/40",
          "text-primary-600",
          "dark:text-primary-400",
          "transition-colors",
          "group-hover:bg-primary-100",
          "dark:group-hover:bg-primary-950/60",
        )}
      >
        <Icon aria-hidden className={cn("size-5")} />
      </div>
      <div className={cn("flex-1", "min-w-0")}>
        <p className={cn("text-sm", "font-semibold", "text-foreground")}>
          {label}
        </p>
        <p className={cn("text-sm", "text-muted", "truncate")}>{value}</p>
      </div>
      <ExternalLink
        aria-hidden
        className={cn(
          "size-4",
          "shrink-0",
          "text-muted",
          "transition-colors",
          "group-hover:text-primary",
        )}
      />
    </a>
  );
}
