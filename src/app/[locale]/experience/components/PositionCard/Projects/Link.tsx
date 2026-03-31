import { ExternalLink, Smartphone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { ProjectLink } from "../../../data";
import { TRANSLATION_NAME } from "../../../translation/config";

const LINK_TYPE_NAME_MAP = {
  website: "Website",
  android: "Android",
  ios: "iOS",
};

export async function Link({ link }: { link: ProjectLink }) {
  const t = await getTranslations(TRANSLATION_NAME);

  const isApp = ["android", "ios"].includes(link.type);
  const label = LINK_TYPE_NAME_MAP[link.type];

  return !link.outOfBusiness ? (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex",
        "items-center",
        "gap-1",
        "rounded",
        "border",
        "border-border",
        "px-1.5",
        "py-0.5",
        "text-[10px]",
        "font-medium",
        "text-muted",
        "transition-colors",
        "hover:border-primary",
        "hover:text-primary",
      )}
    >
      {isApp ? (
        <Smartphone aria-hidden className={cn("size-2.5")} />
      ) : (
        <ExternalLink aria-hidden className={cn("size-2.5")} />
      )}
      {label}
    </a>
  ) : (
    <span
      className={cn(
        "inline-flex",
        "items-center",
        "gap-1",
        "rounded",
        "border",
        "border-border",
        "px-1.5",
        "py-0.5",
        "text-[10px]",
        "font-medium",
        "text-muted",
        "cursor-not-allowed",
      )}
    >
      {isApp ? (
        <Smartphone aria-hidden className={cn("size-2.5")} />
      ) : (
        <ExternalLink aria-hidden className={cn("size-2.5")} />
      )}
      {label} ({t("outOfBusiness")})
    </span>
  );
}
