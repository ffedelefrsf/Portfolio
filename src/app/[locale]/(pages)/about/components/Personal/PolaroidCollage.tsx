import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./polaroidCollage.module.css";
import type { PolaroidItem } from "./types";
import { Y_OFFSETS } from "./utils";

type Props = {
  name: string;
  items: PolaroidItem[];
};

export function PolaroidCollage({ name, items }: Props) {
  return (
    <div
      className={cn(
        "grid",
        "grid-cols-[repeat(2,minmax(0,auto))]",
        "sm:grid-cols-[repeat(3,minmax(0,auto))]",
        "justify-center",
        "py-10",
      )}
    >
      {items.map((item, index) => {
        const baseTransform = `rotate(${item.rotation}deg) translateY(${Y_OFFSETS[index % Y_OFFSETS.length]}px)`;
        return (
          <div
            key={`${name}-polaroid#${index}`}
            tabIndex={0}
            className={cn(
              "p-2",
              "pb-7",
              "shadow-md",
              "cursor-default",
              "select-none",
              "sm:p-2.5",
              "sm:pb-9",
              "transition",
              "duration-300",
              "ease-in-out",
              "min-w-35",
              "xs:min-w-40",
              "sm:min-w-50",
              "w-43",
              "2xs:w-50",
              "sm:w-60",
              styles.polaroid,
            )}
            style={{
              backgroundColor: "white",
              border: "1px solid oklch(0.88 0 0)",
              transform: baseTransform,
              zIndex: index + 1,
            }}
          >
            <div className={cn("relative", "w-full", "h-40", "sm:h-50")}>
              <Image
                src={item.src}
                className="object-cover object-center"
                fill
                sizes="(max-width: 640px) 33vw, 200px"
                alt={item.caption}
                placeholder={item.placeholder}
                loading="lazy"
              />
            </div>
            <p
              className={cn(
                "text-center",
                "text-xs",
                "mt-2",
                "font-light",
                "w-full",
              )}
              style={{ color: "oklch(0.45 0 0)" }}
            >
              {item.caption}
            </p>
          </div>
        );
      })}
    </div>
  );
}
