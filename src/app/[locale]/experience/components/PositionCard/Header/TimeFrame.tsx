import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../../translation/config";

type Props = {
  isPresent: boolean;
  start: string;
  end: string | null;
};

export async function TimeFrame({ isPresent, start, end }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <div
      className={cn("flex", "shrink-0", "flex-wrap", "items-center", "gap-2")}
    >
      <span className={cn("whitespace-nowrap", "text-sm", "text-muted")}>
        {isPresent ? (
          <>
            {t("since")} {start}
          </>
        ) : (
          <>
            {start} - {end}
          </>
        )}
      </span>
      {isPresent && (
        <span
          className={cn(
            "inline-flex",
            "items-center",
            "gap-1.5",
            "rounded-full",
            "border",
            "border-primary-200",
            "bg-primary-50",
            "px-2.5",
            "py-0.5",
            "text-xs",
            "font-medium",
            "text-primary-700",
            "dark:border-primary-800",
            "dark:bg-primary-950/60",
            "dark:text-primary-400",
          )}
        >
          <span
            className={cn(
              "size-1.5",
              "animate-pulse",
              "rounded-full",
              "bg-primary-500",
            )}
          />
          {t("present")}
        </span>
      )}
    </div>
  );
}
