import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../translation/config";
import styles from "./greetings.module.css";

export async function Greetings() {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <h1
      className={cn(
        "self-center",
        "text-5xl",
        "sm:text-6xl",
        "lg:text-7xl",
        "font-bold",
        "tracking-tight",
        "text-foreground",
        "mb-5",
        "font-mono",
        "my-10",
        "sm:my-0",
        "mx-10",
        "sm:mx-4",
        "leading-tight",
        "sm:w-1/3",
        "whitespace-break-spaces",
        "z-10",
      )}
    >
      {t("hero.greeting")}
      <p>
        Fausto{" "}
        <span className="whitespace-nowrap">
          Fedele
          <span
            aria-hidden="true"
            className={cn("inline-block", styles["animate-caret"])}
          >
            |
          </span>
        </span>
      </p>
    </h1>
  );
}
