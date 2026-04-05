import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../../translation/config";

type Props = {
  id: string;
  workType: string;
};

export async function PositionDescription({ id, workType }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <p className={cn("mt-0.5", "text-sm", "font-medium", "text-muted")}>
      {t(`entries.${id}.role`)} &middot; {t(`workTypes.${workType}`)}
    </p>
  );
}
