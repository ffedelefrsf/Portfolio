import { cn } from "@/lib/utils";

export function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className={cn("mb-2", "text-2xl", "font-semibold", "text-foreground")}>
      {children}
    </h2>
  );
}
