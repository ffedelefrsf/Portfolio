import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../translation/config";

export async function Checkbox() {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <>
      <input
        type="checkbox"
        id="most-relevant"
        defaultChecked
        className={cn(
          "appearance-none",
          "relative",
          "size-4",
          "shrink-0",
          "cursor-pointer",
          "rounded-sm",
          "border",
          "border-input",
          "bg-background",
          "transition-[background-color,border-color]",
          "duration-150",
          "checked:border-primary",
          "checked:bg-primary",
          "checked:after:absolute",
          "checked:after:left-1.25",
          "checked:after:top-0.5",
          "checked:after:h-2",
          "checked:after:w-1.25",
          "checked:after:rotate-45",
          "checked:after:border-b-2",
          "checked:after:border-r-2",
          "checked:after:border-primary-foreground",
          "checked:after:content-['']",
          "focus-visible:outline",
          "focus-visible:outline-2",
          "focus-visible:outline-offset-2",
          "focus-visible:outline-ring",
          "hover:opacity-80",
        )}
      />
      <label
        htmlFor="most-relevant"
        className={cn(
          "cursor-pointer",
          "select-none",
          "text-sm",
          "italic",
          "font-medium",
          "leading-none",
          "font-medium",
          "hover:opacity-80",
        )}
      >
        {t("filter.mostRelevant")}
      </label>
    </>
  );
}
