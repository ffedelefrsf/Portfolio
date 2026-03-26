import { CircleHelp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Props = {
  content: string;
};

export function FilterTooltip({ content }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleWindowClick = (e: PointerEvent) => {
      if (contentRef.current && triggerRef.current) {
        const tooltipElements = [contentRef.current, triggerRef.current];
        if (
          tooltipElements.every(
            (tooltipElement) => !tooltipElement.contains(e.target as Node),
          )
        ) {
          setIsOpened(false);
        }
      }
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <TooltipProvider delay={100}>
      <Tooltip open={isOpened}>
        <TooltipTrigger
          ref={triggerRef}
          type="button"
          className={cn(
            "inline-flex",
            "cursor-help",
            "items-center",
            "text-muted-foreground",
            "hover:text-foreground",
            "transition-colors",
          )}
          aria-label={content}
          onClick={() => setIsOpened((prevValue) => !prevValue)}
          closeOnClick={false}
        >
          <CircleHelp className={cn("size-3")} aria-hidden />
        </TooltipTrigger>
        <TooltipContent side="bottom" ref={contentRef}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
