import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { Fragment } from "react/jsx-runtime";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../translation/config";
import { getSkillExperienceInfo } from "../../utils";

export async function ExperienceInfo({ skill }: { skill: string }) {
  const t = await getTranslations(TRANSLATION_NAME);
  const locale = await getLocale();
  const experienceInfo = getSkillExperienceInfo(skill);

  if (experienceInfo.entries.length === 0) {
    return null;
  }

  return (
    <>
      <Separator />
      <div>
        <div className={cn("flex", "items-start", "gap-2")}>
          <p className={cn("text-xs", "mb-0.5")}>
            <span className={cn("underline")}>{t("experience.usedAt")}</span>
            <span>{": "}</span>
            {experienceInfo.entries.map((entry, index) => (
              <Fragment key={entry.id}>
                <Link
                  href={`/${locale}/experience#${entry.id}`}
                  className={cn(
                    "text-xs",
                    "text-blue-500",
                    "dark:text-blue-300",
                    "hover:underline",
                    "font-semibold",
                  )}
                >
                  {entry.company}
                </Link>
                {index < experienceInfo.entries.length - 1 && <span> - </span>}
              </Fragment>
            ))}
          </p>
        </div>
        {experienceInfo.years > 0 && (
          <span
            className={cn(
              "shrink-0",
              "text-xs",
              "font-bold",
              "text-neutral-800",
              "dark:text-neutral-300",
              "whitespace-nowrap",
            )}
          >
            {t("experience.yearsLabel", { years: experienceInfo.years })}
          </span>
        )}
      </div>
    </>
  );
}
