import { cn } from "@/lib/utils";
import { SkillProficiency, SkillRecency } from "../../types";

const VALUE_TEXT_COLOR_CLASS_MAP: Record<
  SkillProficiency | SkillRecency,
  string
> = {
  advanced: cn("text-primary-700"),
  solid: cn("text-indigo-400"),
  basic: cn("text-neutral-400", "dark:text-neutral-500"),
  fresh: cn("text-primary-500"),
  rusty: cn("text-amber-800"),
  blurry: cn("text-neutral-600", "dark:text-neutral-300", "opacity-40"),
};

export function DetailSpec({
  category,
  displayValue,
  value,
  description,
}: {
  category: string;
  displayValue: string;
  value: SkillProficiency | SkillRecency;
  description: string;
}) {
  return (
    <div className={cn("flex-1", "mb-0")}>
      <p className={cn("text-xs")}>
        <span className={cn("underline")}>{category}</span>:{" "}
        <span
          className={cn(
            "font-bold",
            VALUE_TEXT_COLOR_CLASS_MAP[value],
            "no-underline",
          )}
        >
          {displayValue}
        </span>
      </p>
      <p className={cn("text-xs", "opacity-75", "mt-0.5")}>{description}</p>
    </div>
  );
}
