import { ReactNode } from "react";
import { NerdWallet } from "@/cross-site/ui/company-icons/NerdWallet";
import { SanCorSalud } from "@/cross-site/ui/company-icons/SanCorSalud";
import { Solvd } from "@/cross-site/ui/company-icons/Solvd";
import { cn } from "@/lib/utils";

export type ProjectLink =
  | { type: "website"; url: string; outOfBusiness?: boolean }
  | { type: "ios"; url: string; outOfBusiness?: boolean }
  | { type: "android"; url: string; outOfBusiness?: boolean };

export type Project = {
  id: string;
  name: string;
  links?: ProjectLink[];
};

export type ExperienceEntry = {
  id: string;
  companyName: string;
  companyURL: string;
  clientURL?: string;
  period: { start: string; end: string | null };
  workType: "remote" | "hybrid" | "office";
  tech: string[];
  layout: "highlights" | "projects";
  iconImageURL?: string;
  iconNodes?: ReactNode[];
  projects?: Project[];
};

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: "solvd",
    companyName: "Solvd",
    companyURL: "https://www.solvd.com/",
    clientURL: "https://www.nerdwallet.com/credit-cards/best",
    period: { start: "Jul 2023", end: null },
    workType: "remote",
    layout: "highlights",
    iconNodes: [
      <Solvd
        key="solvd-logo"
        height={20}
        width={20}
        className={cn("invert-0", "dark:invert")}
      />,
      <NerdWallet key="nerdwallet-logo" height={18} width={18} />,
    ],
    tech: [
      "nextjs",
      "typescript",
      "mui",
      "tailwind",
      "graphql",
      "reacttestinglibrary",
      "segment",
      "snowflake",
      "aws",
      "redis",
      "docker",
      "vercel",
      "cloudflare",
      "figma",
      "datadog",
      "atlassian",
      "storybook",
      "wordpress",
    ],
  },
  {
    id: "exoMindset",
    companyName: "Exo Mindset",
    companyURL: "https://exomindset.co/en/",
    period: { start: "Nov 2020", end: "Jul 2023" },
    workType: "remote",
    layout: "projects",
    iconImageURL: "/experience/exo-logo.png",
    tech: [
      "react",
      "reactnative",
      "nestjs",
      "typescript",
      "redux",
      "mysql",
      "docker",
      "aws",
      "keycloak",
      "firebase",
      "gitlab",
      "expressjs",
      "dotnet",
      "csharp",
      "antdesign",
      "azure",
      "figma",
      "xd",
      "atlassian",
      "asana",
      "trello",
    ],
    projects: [
      {
        id: "meetknit",
        name: "MeetKnit",
        links: [
          {
            type: "website",
            url: "https://app.meetknit.com/",
            outOfBusiness: true,
          },
        ],
      },
      {
        id: "sigloXxi",
        name: "Siglo XXI",
        links: [{ type: "website", url: "https://inscripciones.21.edu.ar/" }],
      },
      {
        id: "scoutSmartRecruit",
        name: "scoutSMART Recruit",
        links: [
          {
            type: "ios",
            url: "https://apps.apple.com/ar/app/scoutsmart-recruit/id1550830731",
          },
          {
            type: "android",
            url: "https://play.google.com/store/apps/details?id=com.scoutsmartrecruit&hl=es_AR&gl=US",
          },
        ],
      },
      {
        id: "scoutSmart",
        name: "scoutSMART",
        links: [
          {
            type: "ios",
            url: "https://apps.apple.com/us/app/scoutsmart-firstview/id1463371703",
          },
          {
            type: "android",
            url: "https://play.google.com/store/apps/details?id=com.exomindset.scoutsmartfirstview&hl=es_AR&gl=US",
          },
        ],
      },
      {
        id: "lapMarketplace",
        name: "LAP Marketplace",
        links: [
          { type: "website", url: "https://app.lapmarketplace.com/login" },
        ],
      },
      {
        id: "vialCard",
        name: "VialCard",
        links: [
          {
            type: "website",
            url: "https://prod.vialcard.ar/",
            outOfBusiness: true,
          },
        ],
      },
      {
        id: "mySherlock",
        name: "MySherlock",
        links: [
          {
            type: "website",
            url: "https://mysherlock.rinarsolutions.com/admin",
            outOfBusiness: true,
          },
        ],
      },
    ],
  },
  {
    id: "i2tSenior",
    companyName: "i2T S.A.",
    companyURL: "https://www.i2t.com.ar/",
    period: { start: "Jun 2019", end: "Oct 2020" },
    workType: "office",
    layout: "highlights",
    clientURL: "https://sancorsalud.com.ar/",
    iconNodes: [<SanCorSalud key="sancor-logo" height={20} width={20} />],
    iconImageURL: "/experience/i2t-logo.png",
    tech: [
      "java",
      "spring",
      "mysql",
      "mssql",
      "ibm",
      "expressjs",
      "junit",
      "php",
      "wordpress",
      "jenkins",
      "javascript",
      "jquery",
      "angular",
      "mui",
      "elastic",
      "redmine",
    ],
  },
  {
    id: "cooperativa",
    companyName: "Cooperativa Agropecuaria de López",
    companyURL: "http://www.cooperativalopez.com.ar/",
    period: { start: "2018", end: "2019" },
    workType: "hybrid",
    layout: "highlights",
    iconImageURL: "/experience/call-logo.png",
    tech: ["android", "java", "dotnet", "csharp", "twilio"],
  },
  {
    id: "i2tIntern",
    companyName: "i2T S.A.",
    companyURL: "https://www.i2t.com.ar/",
    period: { start: "Nov 2018", end: "May 2019" },
    iconImageURL: "/experience/i2t-logo.png",
    workType: "office",
    layout: "highlights",
    tech: ["php", "expressjs", "mysql", "javascript"],
  },
];
