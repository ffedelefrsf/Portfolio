import { CircleHelp } from "lucide-react";
import { getTranslations } from "next-intl/server";
import {
  Popover as PopoverShadcn,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../translation/config";

export async function Popover() {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <PopoverShadcn>
      <PopoverTrigger
        type="button"
        className={cn(
          "inline-flex",
          "cursor-help",
          "items-center",
          "text-muted-foreground",
          "hover:text-foreground",
          "transition-colors",
        )}
        aria-label={t("filter.mostRelevantTooltip")}
      >
        <CircleHelp className={cn("size-3.5")} aria-hidden />
      </PopoverTrigger>
      <PopoverContent className={cn("whitespace-pre-line")}>
        {t("filter.mostRelevantTooltip")}
      </PopoverContent>
    </PopoverShadcn>
  );
}
