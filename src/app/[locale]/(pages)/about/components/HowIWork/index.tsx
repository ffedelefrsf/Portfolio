import { CheckCircle, Code2, Eye, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../translation/config";
import { SectionTitle } from "../SectionTitle";
import { ValueItem } from "./ValueItem";

const VALUES = [
  { key: "cleanCode", Icon: Code2 },
  { key: "testing", Icon: CheckCircle },
  { key: "observability", Icon: Eye },
  { key: "collaboration", Icon: Users },
];

export async function HowIWork() {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <section>
      <SectionTitle title={t("workEthic.title")} />
      <div className={cn("flex", "flex-col", "gap-5", "mb-10")}>
        <p className={cn("text-base", "text-muted", "leading-relaxed")}>
          {t("workEthic.paragraph1")}
        </p>
        <p className={cn("text-base", "text-muted", "leading-relaxed")}>
          {t("workEthic.paragraph2")}
        </p>
        <p className={cn("text-base", "text-muted", "leading-relaxed")}>
          {t("workEthic.paragraph3")}
        </p>
        <p className={cn("text-base", "text-muted", "leading-relaxed")}>
          {t("workEthic.paragraph4")}
        </p>
      </div>
      <div className={cn("grid", "gap-8", "sm:grid-cols-2")}>
        {VALUES.map(({ key, Icon }) => (
          <ValueItem
            key={key}
            Icon={Icon}
            title={t(`workEthic.${key}.title`)}
            description={t(`workEthic.${key}.description`)}
          />
        ))}
      </div>
    </section>
  );
}
