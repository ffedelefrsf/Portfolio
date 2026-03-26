import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { TRANSLATION_NAME } from "../../translation/config";
import type { SkillProficiency, SkillRecency } from "../../types";
import { PROFICIENCY_CLASSES, RECENCY_CLASSES } from "../utils";
import { CheckmarkIcon } from "./CheckmarkIcon";
import { FilterTooltip } from "./FilterTooltip";

type Props =
  | {
      isProficiency: true;
      selectedValues: Set<string>;
      toggleValue: (value: SkillProficiency) => void;
    }
  | {
      isProficiency: false;
      selectedValues: Set<string>;
      toggleValue: (value: SkillRecency) => void;
    };

export function FilterRow({
  isProficiency,
  selectedValues,
  toggleValue,
}: Props) {
  const t = useTranslations(TRANSLATION_NAME);

  const translationGroup = isProficiency ? "proficiency" : "recency";
  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "sm:flex-row",
        "flex-wrap",
        "items-start",
        "gap-3",
      )}
    >
      <span
        className={cn(
          "w-24",
          "shrink-0",
          "pt-1.5",
          "text-xs",
          "font-bold",
          "uppercase",
          "tracking-widest",
          "text-muted-foreground",
        )}
      >
        {t(`${translationGroup}.title`)}
      </span>
      <div
        className={cn(
          "flex",
          "flex-1",
          "self-stretch",
          "py-3",
          "sm:py-0",
          "sm:pb-3",
          "flex-wrap",
          "gap-4",
        )}
      >
        {Object.entries(
          isProficiency ? PROFICIENCY_CLASSES : RECENCY_CLASSES,
        ).map(([value, { bgClass, borderClass, opacityClass }]) => {
          const selected = selectedValues.has(value);
          return (
            <div
              key={value}
              className={cn(
                "flex",
                "flex-col",
                "flex-1",
                "gap-2",
                "items-center",
                "justify-center",
              )}
            >
              <Button
                variant="ghost"
                onClick={() => toggleValue(value as never)}
                className={cn(
                  "flex",
                  "flex-col",
                  "items-center",
                  "gap-1.5",
                  "cursor-pointer",
                  "transition-opacity",
                  "hover:bg-transparent!",
                  {
                    "opacity-35": !selected,
                    "hover:opacity-65": !selected,
                  },
                )}
                aria-pressed={selected}
              >
                <span
                  className={cn(
                    "inline-flex",
                    "items-center",
                    "gap-1",
                    "rounded-lg",
                    "border-2",
                    "border-border",
                    "bg-card",
                    "px-2.5",
                    "py-1",
                    "text-xs",
                    "font-medium",
                    "text-foreground",
                    "transition-all",
                    bgClass,
                    borderClass,
                    {
                      "ring-2": selected,
                      "ring-offset-2": selected,
                      "ring-neutral-400": selected,
                      "dark:ring-neutral-400": selected,
                      "ring-offset-neutral-50": selected,
                      "dark:ring-offset-card": selected,
                    },
                  )}
                >
                  {selected && (
                    <CheckmarkIcon
                      className={cn(
                        "size-3",
                        "shrink-0",
                        "fill-primary-700",
                        "dark:fill-primary-400",
                      )}
                    />
                  )}
                  <span className={cn(opacityClass)}>Aa</span>
                </span>
              </Button>
              <div
                className={cn(
                  "flex",
                  "items-center",
                  "gap-1",
                  "transition-opacity",
                  {
                    "opacity-35": !selected,
                  },
                )}
              >
                <span
                  className={cn(
                    "text-center",
                    "text-xs",
                    "leading-snug",
                    "text-muted-foreground",
                    {
                      "text-primary-700": selected,
                      "dark:text-primary-400": selected,
                      "font-semibold": selected,
                    },
                  )}
                >
                  {t(`${translationGroup}.${value}.name`)}
                </span>
                <FilterTooltip
                  content={t(`${translationGroup}.${value}.description`)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
