import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../translation/config";

type Props = {
  id: string;
  clientURL: string;
};

export async function ClientService({ id, clientURL }: Props) {
  const t = await getTranslations(TRANSLATION_NAME);
  return (
    <p
      className={cn(
        "mb-4",
        "inline-flex",
        "items-center",
        "gap-1.5",
        "text-sm",
        "italic",
        "text-muted",
      )}
    >
      {t(`entries.${id}.client`)}
      <a
        href={clientURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("visitWebsite")}
        className={cn("shrink-0", "transition-colors", "hover:text-primary")}
      >
        <ExternalLink aria-hidden className={cn("size-3.5")} />
      </a>
    </p>
  );
}
