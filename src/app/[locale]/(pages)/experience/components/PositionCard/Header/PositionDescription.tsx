import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../../translation/config";

type Props = {
  id: string;
  regions: ("en" | "ar")[];
  workType: string;
};

const REGION_FLAG_MAP = {
  en: "🇺🇸",
  ar: "🇦🇷",
};

export async function PositionDescription({ id, regions, workType }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <p className={cn("mt-0.5", "text-sm", "font-medium", "text-muted")}>
      {t(`entries.${id}.role`)} &middot; {t(`workTypes.${workType}`)} &middot;{" "}
      <span aria-label={`Involved regions: ${regions.join(",")}`}>
        {regions.map((region) => `${REGION_FLAG_MAP[region]} `)}
      </span>
    </p>
  );
}
