import { cn } from "@/lib/utils";
import { Checkbox } from "./Checkbox";
import { Popover } from "./Popover";

export function Filter() {
  return (
    <div className={cn("flex", "items-center", "gap-2", "mb-8")}>
      <Checkbox />
      <Popover />
    </div>
  );
}
