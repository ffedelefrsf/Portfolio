import { Mail } from "lucide-react";
import { GitHubIcon } from "./components/icons/GitHubIcon";
import { LinkedInIcon } from "./components/icons/LinkedInIcon";
import { WhatsApp } from "./components/icons/WhatsApp";
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
    id: "whatsapp",
    value: "+54 9 (3404) 51-6973",
    href: "https://wa.me/5493404516973?text=Hi%20Fausto!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.",
    Icon: WhatsApp,
    openInNewTab: true,
  },
  {
    id: "linkedin",
    value: "linkedin.com/in/fedele-fausto",
    href: "https://linkedin.com/in/fedele-fausto",
    Icon: LinkedInIcon,
    openInNewTab: true,
  },
  {
    id: "github-nw",
    value: "github.com/ffedelenw",
    href: "https://github.com/ffedelenw",
    Icon: GitHubIcon,
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
