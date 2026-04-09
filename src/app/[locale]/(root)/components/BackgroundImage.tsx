import Image from "next/image";
import { cn } from "@/lib/utils";

export function BackgroundImage() {
  return (
    <>
      <Image
        src="/landing.avif"
        placeholder="blur"
        blurDataURL="/landing-placeholder.avif"
        fill
        priority
        alt="Fausto Fedele"
        sizes="(max-width: 639px) 100vw, 896px"
        className={cn(
          "grayscale",
          "brightness-75",
          "group-hover:grayscale-0",
          "group-hover:brightness-100",
          "transition",
          "duration-300",
        )}
        style={{
          objectFit: "cover",
        }}
      />
      <div
        className={cn(
          "absolute",
          "inset-x-0",
          "sm:inset-x-unset",
          "sm:inset-y-0",
          "top-0",
          "sm:top-unset",
          "sm:left-0",
          "h-[50%]",
          "sm:h-full",
          "sm:w-[60%]",
          "bg-linear-to-b",
          "sm:bg-linear-to-r",
          "from-background",
          "via-background/80",
          "to-transparent",
        )}
      />
    </>
  );
}
