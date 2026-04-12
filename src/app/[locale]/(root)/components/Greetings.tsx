import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../translation/config";
import styles from "./greetings.module.css";

export async function Greetings() {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <h1
      className={cn(
        "text-5xl",
        "sm:text-6xl",
        "lg:text-7xl",
        "font-bold",
        "tracking-tight",
        "text-foreground",
        "font-mono",
        "leading-tight",
        "whitespace-break-spaces",
        "mb-8",
      )}
    >
      {t("hero.greeting")}
      <p>Fausto </p>
      <p className="whitespace-nowrap">
        Fedele
        <span
          aria-hidden="true"
          className={cn("inline-block", styles["animate-caret"])}
        >
          |
        </span>
      </p>
    </h1>
  );
}
