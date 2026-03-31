import { getTranslations } from "next-intl/server";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SKILL_CATEGORIES } from "../data";
import { TRANSLATION_NAME } from "../translation/config";
import { Chip } from "./Chip";
import { Filter } from "./Filter";

export async function List() {
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <div className={cn("max-w-4xl", "group")}>
      <Filter />
      <div>
        {SKILL_CATEGORIES.map(({ id, skills }, index) => (
          <div
            key={id}
            className={cn(
              "group-has-[#most-relevant:checked]:[&:not(:has(.chip-relevant))]:hidden",
            )}
          >
            {index > 0 && <Separator className={cn("my-9")} />}
            <h2
              className={cn(
                "mb-4",
                "flex",
                "items-center",
                "gap-2",
                "text-xs",
                "font-bold",
                "uppercase",
                "tracking-widest",
                "text-primary",
              )}
            >
              <span
                className={cn("h-4", "w-0.5", "rounded-full", "bg-primary")}
              />
              {t(`categories.${id}`)}
            </h2>
            <ul className={cn("flex", "flex-wrap", "gap-2")}>
              {skills.map((skill) => (
                <li key={skill}>
                  <Chip skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
