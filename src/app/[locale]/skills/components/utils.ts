import { cn } from "@/lib/utils";

import type { SkillProficiency, SkillRecency } from "../types";

export const PROFICIENCY_CLASSES: Record<
  SkillProficiency,
  { bgClass: string }
> = {
  advanced: {
    bgClass: cn("bg-secondary-100", "dark:bg-[oklch(0.6_0.17_144.29_/_0.44)]"),
  },
  solid: {
    bgClass: cn("bg-blue-50", "dark:bg-[oklch(0.38_0.15_265.47_/_0.5)]"),
  },
  basic: { bgClass: "" },
};

export const RECENCY_CLASSES: Record<
  SkillRecency,
  { borderClass?: string; opacityClass: string }
> = {
  fresh: {
    borderClass: cn("border-primary-600", "dark:border-primary-700"),
    opacityClass: "opacity-100",
  },
  rusty: {
    borderClass: cn("border-amber-700", "dark:border-amber-800"),
    opacityClass: "opacity-70",
  },
  blurry: { opacityClass: "opacity-30" },
};
