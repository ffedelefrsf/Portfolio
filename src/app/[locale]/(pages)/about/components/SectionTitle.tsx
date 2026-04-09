import { cn } from "@/lib/utils";

export function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      className={cn(
        "mb-8",
        "text-2xl",
        "font-bold",
        "tracking-tight",
        "text-foreground",
      )}
    >
      {title}
    </h2>
  );
}
