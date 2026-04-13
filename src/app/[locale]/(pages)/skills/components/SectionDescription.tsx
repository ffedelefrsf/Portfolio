import { cn } from "@/lib/utils";

export function SectionDescription({ children }: { children: string }) {
  return (
    <p
      className={cn("mb-4", "text-sm", "text-muted", "whitespace-break-spaces")}
    >
      {children}
    </p>
  );
}
