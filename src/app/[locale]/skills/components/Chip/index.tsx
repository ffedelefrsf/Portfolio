import { getTranslations } from "next-intl/server";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { technologies } from "@/cross-site/ui/technologies";
import { cn } from "@/lib/utils";
import { SKILL_DETAILS } from "../../data";
import { TRANSLATION_NAME } from "../../translation/config";
import { DetailSpec } from "./DetailSpec";

type Props = {
  skill: string;
};

function isRelevantCheck(proficiency: string, recency: string): boolean {
  return (
    ["advanced", "solid"].includes(proficiency) &&
    ["fresh", "rusty"].includes(recency)
  );
}

export async function Chip({ skill }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);
  const existingTech = technologies[skill] ?? { name: skill };
  const detail = SKILL_DETAILS[skill];

  if (!detail) {
    throw new Error(`Missing details for skill: ${skill}`);
  }

  const { component: Icon, name, shouldInvertOnLight } = existingTech;
  const { proficiency, recency } = detail;

  const isRelevant = isRelevantCheck(proficiency, recency);

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
        {Icon && (
          <Icon
            aria-hidden
            width={16}
            height={16}
            className={cn("size-4", "shrink-0", "object-contain", {
              invert: shouldInvertOnLight,
              "dark:invert-0": shouldInvertOnLight,
            })}
          />
        )}
        {name}
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        className={cn("max-w-xs", "space-y-2", "p-3", "gap-3")}
      >
        <DetailSpec
          category={t("proficiency.title")}
          displayValue={t(`proficiency.${proficiency}.name`)}
          value={proficiency}
          description={t(`proficiency.${proficiency}.description`)}
        />
        <Separator className={cn("mb-0")} />
        <DetailSpec
          category={t("recency.title")}
          value={recency}
          displayValue={t(`recency.${recency}.name`)}
          description={t(`recency.${recency}.description`)}
        />
      </PopoverContent>
    </Popover>
  );
}
