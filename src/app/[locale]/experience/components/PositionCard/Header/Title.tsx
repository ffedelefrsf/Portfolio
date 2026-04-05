import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  iconImageURL?: string;
  iconNodes?: ReactNode;
  companyURL: string;
  companyName: string;
};

export function Title({
  companyName,
  companyURL,
  iconImageURL,
  iconNodes,
}: Props) {
  const isI2t = companyName.includes("i2T");
  return (
    <div className={cn("flex", "items-center", "gap-3")}>
      <div className={cn("flex", "items-center", "gap-2")}>
        {iconImageURL && (
          <Image
            {...(isI2t && {
              className: cn("invert", "dark:invert-0", "mr-[-5px]"),
            })}
            src={iconImageURL}
            alt={`${companyName} company logo`}
            width={isI2t ? 35 : 25}
            height={0}
            style={{ height: "auto" }}
          />
        )}
        {iconNodes}
      </div>
      <h2 className={cn("text-xl", "font-bold", "text-foreground")}>
        <a
          href={companyURL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex",
            "items-center",
            "gap-1.5",
            "transition-colors",
            "hover:text-primary",
          )}
        >
          {companyName}
          <ExternalLink aria-hidden className={cn("size-4", "shrink-0")} />
        </a>
      </h2>
    </div>
  );
}
