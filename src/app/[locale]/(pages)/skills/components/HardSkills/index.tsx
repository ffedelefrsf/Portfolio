import { getTranslations } from "next-intl/server";
import { Separator } from "@/components/ui/separator";
import { technologies } from "@/cross-site/ui/technologies";
import { cn } from "@/lib/utils";
import { SKILL_CATEGORIES, SKILL_DETAILS } from "../../data";
import { TRANSLATION_NAME } from "../../translation/config";
import { Chip } from "../Chip";
import { ListContainer } from "../ListContainer";
import { SectionDescription } from "../SectionDescription";
import { SectionTitle } from "../SectionTitle";
import { DetailSpec } from "./DetailSpec";
import { ExperienceInfo } from "./ExperienceInfo";
import { Filter } from "./Filter";
import { isRelevantCheck } from "./utils";

export async function HardSkills() {
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <section>
      <SectionTitle>{t("hardSkills.title")}</SectionTitle>
      <SectionDescription>{t("hardSkills.description")}</SectionDescription>
      <div className={cn("group")}>
        <Filter />
        {SKILL_CATEGORIES.map(({ id, skills }) => (
          <div
            key={id}
            className={cn(
              "group-has-[#most-relevant:checked]:[&:not(:has(.chip-relevant))]:hidden",
            )}
          >
            <h3
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
              {t(`hardSkills.categories.${id}`)}
            </h3>
            <ListContainer>
              {skills.map((skill) => {
                const existingTech = technologies[skill] ?? { name: skill };
                const detail = SKILL_DETAILS[skill];

                if (!detail) {
                  throw new Error(`Missing details for skill: ${skill}`);
                }

                const {
                  component: Icon,
                  name,
                  shouldInvertOnLight,
                } = existingTech;
                const { proficiency, recency } = detail;

                const isRelevant = isRelevantCheck(proficiency, recency);
                return (
                  <li key={skill}>
                    <Chip
                      isRelevant={isRelevant}
                      trigger={
                        <>
                          {Icon && (
                            <Icon
                              aria-hidden
                              width={16}
                              height={16}
                              className={cn(
                                "size-4",
                                "shrink-0",
                                "object-contain",
                                {
                                  invert: shouldInvertOnLight,
                                  "dark:invert-0": shouldInvertOnLight,
                                },
                              )}
                            />
                          )}
                          {name}
                        </>
                      }
                    >
                      <DetailSpec
                        category={t("hardSkills.proficiency.title")}
                        displayValue={t(
                          `hardSkills.proficiency.${proficiency}.name`,
                        )}
                        value={proficiency}
                        description={t(
                          `hardSkills.proficiency.${proficiency}.description`,
                        )}
                      />
                      <Separator className={cn("mb-0")} />
                      <DetailSpec
                        category={t("hardSkills.recency.title")}
                        value={recency}
                        displayValue={t(`hardSkills.recency.${recency}.name`)}
                        description={t(
                          `hardSkills.recency.${recency}.description`,
                        )}
                      />
                      <ExperienceInfo skill={skill} />
                    </Chip>
                  </li>
                );
              })}
            </ListContainer>
            <Separator className={cn("my-9")} />
          </div>
        ))}
      </div>
    </section>
  );
}
