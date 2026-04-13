import { cn } from "@/lib/utils";

export function ListContainer(props: React.PropsWithChildren) {
  return <ul className={cn("flex", "flex-wrap", "gap-2")}>{props.children}</ul>;
}
