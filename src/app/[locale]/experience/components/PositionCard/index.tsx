import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { ExperienceEntry } from "../../data";
import { TRANSLATION_NAME } from "../../translation/config";
import { Highlights } from "./Highlights";
import { Projects } from "./Projects";
import { TechStack } from "./TechStack";
import { Title } from "./Title";

type Props = { entry: ExperienceEntry };

export async function PositionCard({ entry }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);
  const isPresent = entry.period.end === null;

  return (
    <div className={cn("relative", "pb-12", "pl-10", "last:pb-0")}>
      <div
        className={cn(
          "absolute",
          "left-0",
          "top-1",
          "flex",
          "size-5.5",
          "items-center",
          "justify-center",
          "rounded-full",
          "border-2",
          "bg-background",
          isPresent ? "border-primary" : "border-border",
        )}
      >
        {isPresent && (
          <span
            className={cn(
              "size-2",
              "animate-pulse",
              "rounded-full",
              "bg-primary",
            )}
          />
        )}
      </div>

      <div
        className={cn(
          "rounded-xl",
          "border",
          "border-border",
          "bg-card",
          "p-5",
          "shadow-sm",
          "sm:p-6",
        )}
      >
        <Title entry={entry} isPresent={isPresent} />

        {entry.hasClient && (
          <p
            className={cn(
              "mb-4",
              "inline-flex",
              "items-center",
              "gap-1.5",
              "text-sm",
              "italic",
              "text-muted",
            )}
          >
            {t(`entries.${entry.id}.client`)}
            {entry.clientUrl && (
              <a
                href={entry.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("visitWebsite")}
                className={cn(
                  "shrink-0",
                  "transition-colors",
                  "hover:text-primary",
                )}
              >
                <ExternalLink aria-hidden className={cn("size-3.5")} />
              </a>
            )}
          </p>
        )}

        {entry.layout === "highlights" && <Highlights entryId={entry.id} />}
        {entry.layout === "projects" && <Projects entry={entry} />}

        <TechStack tech={entry.tech} />
      </div>
    </div>
  );
}
