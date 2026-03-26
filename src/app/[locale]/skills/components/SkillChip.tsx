import { technologies } from "@/cross-site/ui/technologies";
import { cn } from "@/lib/utils";

import { SKILL_DETAILS } from "../data";
import { PROFICIENCY_CLASSES, RECENCY_CLASSES } from "./utils";

type Props = {
  skill: string;
};

export function SkillChip({ skill }: Props) {
  const existingTech = technologies[skill];
  const Icon = existingTech?.component;
  const detail = SKILL_DETAILS[skill];

  return (
    <span
      className={cn(
        "inline-flex",
        "cursor-default",
        "items-center",
        "gap-2",
        "rounded-lg",
        "border-2",
        detail
          ? Object.values(PROFICIENCY_CLASSES[detail.proficiency])
          : "bg-card",
        "px-3",
        "py-1.5",
        "text-sm",
        "font-medium",
        "text-foreground",
        detail
          ? Object.values(RECENCY_CLASSES[detail.recency])
          : "border-border",
      )}
    >
      {Icon && (
        <Icon
          aria-hidden
          width={16}
          height={16}
          className={cn("size-4", "shrink-0", "object-contain", {
            invert: existingTech?.shouldInvertOnLight,
            "dark:invert-0": existingTech?.shouldInvertOnLight,
          })}
        />
      )}
      {existingTech?.name || skill}
    </span>
  );
}
