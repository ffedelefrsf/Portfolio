import type { ElementType } from "react";

export type ContactMethodId =
  | "email"
  | "linkedin"
  | "github"
  | "github-nw"
  | "whatsapp";

export type ContactMethod = {
  id: ContactMethodId;
  value: string;
  href: string;
  Icon: ElementType<{ className?: string; "aria-hidden"?: boolean }>;
  openInNewTab: boolean;
};
