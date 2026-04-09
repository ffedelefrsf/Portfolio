import { cn } from "@/lib/utils";
import { ExperienceEntry } from "../../data";
import { ClientService } from "./ClientService";
import { Header } from "./Header";
import { Highlights } from "./Highlights";
import { Projects } from "./Projects";
import { TechStack } from "./TechStack";

type Props = { entry: ExperienceEntry };

export function PositionCard({ entry }: Props) {
  const isPresent = entry.period.end === null;

  return (
    <div
      id={entry.id}
      className={cn(
        "relative",
        "pb-12",
        "pl-10",
        "last:pb-0",
        "sm:scroll-mt-25",
      )}
    >
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
        <Header entry={entry} isPresent={isPresent} />

        {entry.clientURL && (
          <ClientService id={entry.id} clientURL={entry.clientURL} />
        )}
        {entry.layout === "highlights" && <Highlights entryId={entry.id} />}
        {entry.layout === "projects" && <Projects entry={entry} />}

        <TechStack tech={entry.tech} />
      </div>
    </div>
  );
}
