import { cn } from "@/lib/utils";
import { ExperienceEntry } from "../../../data";
import { PositionDescription } from "./PositionDescription";
import { TimeFrame } from "./TimeFrame";
import { Title } from "./Title";

type Props = { entry: ExperienceEntry; isPresent: boolean };

export async function Header({ entry, isPresent }: Props) {
  const {
    companyName,
    companyURL,
    iconImageURL,
    iconNodes,
    id,
    languages,
    workType,
  } = entry;

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
        <Title
          companyName={companyName}
          companyURL={companyURL}
          iconImageURL={iconImageURL}
          iconNodes={iconNodes}
        />
        <PositionDescription
          id={id}
          workType={workType}
          languages={languages}
        />
      </div>
      <TimeFrame
        isPresent={isPresent}
        start={entry.period.start}
        end={entry.period.end}
      />
    </div>
  );
}
