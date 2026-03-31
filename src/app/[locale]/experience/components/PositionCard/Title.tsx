import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { ExperienceEntry } from "../../data";
import { TRANSLATION_NAME } from "../../translation/config";

type Props = { entry: ExperienceEntry; isPresent: boolean };

export async function Title({ entry, isPresent }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <div
      className={cn(
        "mb-4",
        "flex",
        "flex-col",
        "gap-2",
        "sm:flex-row",
        "sm:items-start",
        "sm:justify-between",
      )}
    >
      <div>
        <h2 className={cn("text-xl", "font-bold", "text-foreground")}>
          {entry.companyUrl ? (
            <a
              href={entry.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex",
                "items-center",
                "gap-1.5",
                "transition-colors",
                "hover:text-primary",
              )}
            >
              {entry.company}
              <ExternalLink aria-hidden className={cn("size-4", "shrink-0")} />
            </a>
          ) : (
            entry.company
          )}
        </h2>
        <p className={cn("mt-0.5", "text-sm", "font-medium", "text-muted")}>
          {t(`entries.${entry.id}.role`)} &middot;{" "}
          {t(`workTypes.${entry.workType}`)}
        </p>
      </div>
      <div
        className={cn("flex", "shrink-0", "flex-wrap", "items-center", "gap-2")}
      >
        <span className={cn("whitespace-nowrap", "text-sm", "text-muted")}>
          {isPresent ? (
            <>
              {t("since")} {entry.period.start}
            </>
          ) : (
            <>
              {entry.period.start} - {entry.period.end}
            </>
          )}
        </span>
        {isPresent && (
          <span
            className={cn(
              "inline-flex",
              "items-center",
              "gap-1.5",
              "rounded-full",
              "border",
              "border-primary-200",
              "bg-primary-50",
              "px-2.5",
              "py-0.5",
              "text-xs",
              "font-medium",
              "text-primary-700",
              "dark:border-primary-800",
              "dark:bg-primary-950/60",
              "dark:text-primary-400",
            )}
          >
            <span
              className={cn(
                "size-1.5",
                "animate-pulse",
                "rounded-full",
                "bg-primary-500",
              )}
            />
            {t("present")}
          </span>
        )}
      </div>
    </div>
  );
}
