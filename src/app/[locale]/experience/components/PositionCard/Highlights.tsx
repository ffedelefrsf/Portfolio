import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { ExperienceEntry } from "../../data";
import { TRANSLATION_NAME } from "../../translation/config";

type Props = { entryId: ExperienceEntry["id"] };

export async function Highlights({ entryId }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);
  const raw = t.raw(`entries.${entryId}.highlights`);
  const highlights = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <ul className={cn("mb-4", "space-y-2")}>
      {highlights.map((highlight, i) => (
        <li
          key={i}
          className={cn(
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
          {highlight}
        </li>
      ))}
    </ul>
  );
}
