import { Mail } from "lucide-react";
import { GitHubIcon } from "./components/icons/GitHubIcon";
import { LinkedInIcon } from "./components/icons/LinkedInIcon";
import type { ContactMethod } from "./types";

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "email",
    value: "fedele.fausto.sw@gmail.com",
    href: "mailto:fedele.fausto.sw@gmail.com",
    Icon: Mail,
    openInNewTab: false,
  },
  {
    id: "linkedin",
    value: "linkedin.com/in/fedele-fausto",
    href: "https://linkedin.com/in/fedele-fausto",
    Icon: LinkedInIcon,
    openInNewTab: true,
  },
  {
    id: "github",
    value: "github.com/ffedelefrsf",
    href: "https://github.com/ffedelefrsf",
    Icon: GitHubIcon,
    openInNewTab: true,
  },
];
