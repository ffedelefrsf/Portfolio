import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Props = {
  isRelevant?: boolean;
  trigger: React.ReactNode;
};

export async function Chip({
  children,
  isRelevant = true,
  trigger,
}: React.PropsWithChildren<Props>) {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "inline-flex",
          "items-center",
          "gap-2",
          "rounded-lg",
          "border",
          "border-border",
          "bg-card",
          "px-3",
          "py-1.5",
          "text-sm",
          "font-medium",
          "text-foreground",
          "cursor-pointer",
          "hover:bg-neutral-200",
          "dark:hover:bg-muted",
          "transition-colors",
          {
            "chip-relevant": isRelevant,
            "group-has-[#most-relevant:checked]:hidden": !isRelevant,
            "opacity-40": !isRelevant,
          },
        )}
      >
        {trigger}
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        className={cn("max-w-xs", "space-y-2", "p-3", "gap-3")}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}
