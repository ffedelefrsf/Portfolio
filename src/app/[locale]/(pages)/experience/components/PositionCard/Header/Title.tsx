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
  const isCall = companyName.includes("Cooperativa");
  const isI2t = companyName.includes("i2T");
  return (
    <div className={cn("flex", "items-center", "gap-3")}>
      <div
        className={cn("flex", "items-center", "gap-2", {
          "self-start": isCall,
          "mt-0.5": isCall,
        })}
      >
        {iconImageURL && (
          <div
            className={cn("relative", "h-6.25", "w-6.25", {
              "h-8.75": isI2t,
              "w-8.75": isI2t,
              "-mr-1.25": isI2t,
            })}
          >
            <Image
              className={cn("object-contain", {
                invert: isI2t,
                "dark:invert-0": isI2t,
              })}
              src={iconImageURL}
              alt={`${companyName} company logo`}
              fill
              sizes={isI2t ? "35px" : "25px"}
            />
          </div>
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
