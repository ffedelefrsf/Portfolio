import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export function ValueItem({ Icon, title, description }: Props) {
  return (
    <div className={cn("flex", "gap-4")}>
      <div
        className={cn(
          "flex",
          "size-10",
          "shrink-0",
          "items-center",
          "justify-center",
          "rounded-lg",
          "bg-primary-50",
          "dark:bg-primary-950/40",
          "text-primary-600",
          "dark:text-primary-400",
        )}
      >
        <Icon aria-hidden className={cn("size-5")} />
      </div>
      <div>
        <p className={cn("text-sm", "font-semibold", "text-foreground")}>
          {title}
        </p>
        <p className={cn("mt-0.5", "text-sm", "text-muted")}>{description}</p>
      </div>
    </div>
  );
}
