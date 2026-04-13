import { Clock, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../translation/config";

export async function ContactInfo() {
  const t = await getTranslations(TRANSLATION_NAME);

  return (
    <div
      className={cn(
        "flex",
        "flex-wrap",
        "items-center",
        "gap-x-6",
        "gap-y-3",
        "border-y",
        "border-border",
        "py-4",
      )}
    >
      <div className={cn("flex", "items-center", "gap-2")}>
        <span className={cn("relative", "flex", "size-2")}>
          <span
            className={cn(
              "animate-ping",
              "absolute",
              "inline-flex",
              "size-full",
              "rounded-full",
              "bg-amber-400",
              "opacity-75",
            )}
          />
          <span
            className={cn(
              "relative",
              "inline-flex",
              "size-2",
              "rounded-full",
              "bg-amber-500",
            )}
          />
        </span>
        <span className={cn("text-sm", "text-muted")}>{t("availability")}</span>
      </div>
      <div className={cn("flex", "items-center", "gap-2", "text-muted")}>
        <Clock aria-hidden className={cn("size-4", "shrink-0")} />
        <span className={cn("text-sm")}>{t("responseTime")}</span>
      </div>
      <div className={cn("flex", "items-center", "gap-2", "text-muted")}>
        <MapPin aria-hidden className={cn("size-4", "shrink-0")} />
        <span className={cn("text-sm")}>{t("timezone")}</span>
      </div>
    </div>
  );
}
