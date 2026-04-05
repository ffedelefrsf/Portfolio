import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../../translation/config";

type Props = {
  id: string;
  languages: ("en" | "es")[];
  workType: string;
};

const LANGUAGE_FLAG_MAP = {
  en: "🇺🇸",
  es: "🇦🇷",
};

export async function PositionDescription({ id, languages, workType }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <p className={cn("mt-0.5", "text-sm", "font-medium", "text-muted")}>
      {t(`entries.${id}.role`)} &middot; {t(`workTypes.${workType}`)} &middot;{" "}
      {languages.map((lang) => `${LANGUAGE_FLAG_MAP[lang]} `)}
    </p>
  );
}
