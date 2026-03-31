import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { ExperienceEntry } from "../../../data";
import { TRANSLATION_NAME } from "../../../translation/config";
import { Card } from "./Card";

type Props = { entry: ExperienceEntry };

export async function Projects({ entry }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <div className={cn("mb-4")}>
      <p
        className={cn(
          "mb-5",
          "flex",
          "items-start",
          "gap-2",
          "text-sm",
          "leading-relaxed",
          "text-muted",
        )}
      >
        <span
          className={cn(
            "mt-1.5",
            "size-1.5",
            "shrink-0",
            "rounded-full",
            "bg-primary-400",
          )}
        />
        {t(`entries.${entry.id}.description`)}
      </p>
      <p
        className={cn(
          "mb-3",
          "text-xs",
          "font-bold",
          "uppercase",
          "tracking-widest",
          "text-muted",
        )}
      >
        {t("projects")}
      </p>
      <div
        className={cn(
          "grid",
          "grid-cols-1",
          "gap-3",
          "sm:grid-cols-2",
          "lg:grid-cols-3",
        )}
      >
        {entry.projects?.map((project) => (
          <Card key={project.id} project={project} entryId={entry.id} />
        ))}
      </div>
    </div>
  );
}
