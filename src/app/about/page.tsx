import { getTranslations } from "next-intl/server";
import { TRANSLATION_NAME } from "./translation/config";

export default async function AboutPage() {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <main className="flex flex-1 items-center justify-center">
      <h1 className="text-2xl font-semibold text-foreground">{t("title")}</h1>
    </main>
  );
}
