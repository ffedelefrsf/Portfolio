import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { ExperienceEntry, Project } from "../../../data";
import { TRANSLATION_NAME } from "../../../translation/config";
import { Link } from "./Link";

type Props = { project: Project; entryId: ExperienceEntry["id"] };

export async function Card({ project, entryId }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "gap-2",
        "rounded-lg",
        "border",
        "border-border",
        "bg-background",
        "p-4",
      )}
    >
      <h3 className={cn("text-sm", "font-semibold", "text-foreground")}>
        {project.name}
      </h3>
      <p className={cn("grow", "text-xs", "leading-relaxed", "text-muted")}>
        {t(`entries.${entryId}.projects.${project.id}`)}
      </p>
      {project.links && project.links.length > 0 && (
        <div className={cn("flex", "flex-wrap", "gap-1.5")}>
          {project.links.map((link) => (
            <Link key={link.type} link={link} />
          ))}
        </div>
      )}
    </div>
  );
}
