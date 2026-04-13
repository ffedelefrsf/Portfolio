import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { SOFT_SKILLS } from "../../data";
import { TRANSLATION_NAME } from "../../translation/config";
import { Chip } from "../Chip";
import { ListContainer } from "../ListContainer";
import { SectionDescription } from "../SectionDescription";
import { SectionTitle } from "../SectionTitle";

export async function SoftSkills() {
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <section>
      <SectionTitle>{t("softSkills.title")}</SectionTitle>
      <SectionDescription>{t("softSkills.description")}</SectionDescription>
      <ListContainer>
        {SOFT_SKILLS.map((skill) => {
          return (
            <li key={skill}>
              <Chip trigger={t(`softSkills.strengths.${skill}.title`)}>
                <p className={cn("text-xs", "opacity-75")}>
                  {t(`softSkills.strengths.${skill}.description`)}
                </p>
              </Chip>
            </li>
          );
        })}
      </ListContainer>
    </section>
  );
}
