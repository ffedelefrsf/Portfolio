import { getTranslations } from "next-intl/server";
import { ThemeToggle } from "./components/ThemeToggle";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background text-foreground font-sans">
      <ThemeToggle />
      <p>{t("title")}</p>
    </div>
  );
}
