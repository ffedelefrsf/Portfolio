import { cn } from "@/lib/utils";
import { EXPERIENCE_ENTRIES } from "../data";
import { PositionCard } from "./PositionCard";

export function PositionsList() {
  return (
    <div className={cn("relative")}>
      <div
        className={cn(
          "absolute",
          "bottom-0",
          "left-2.75",
          "top-6",
          "w-0.5",
          "bg-border",
        )}
      />
      <div>
        {EXPERIENCE_ENTRIES.map((entry) => (
          <PositionCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
