export type Project = {
  id: string;
  name: string;
  tech: string[];
};

export type ExperienceEntry = {
  id: string;
  company: string;
  period: { start: string; end: string | null };
  workType: "remote" | "office";
  tech: string[];
  layout: "highlights" | "projects";
  hasClient?: boolean;
  projects?: Project[];
};

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: "solvd",
    company: "Solvd",
    period: { start: "Jul 2023", end: null },
    workType: "remote",
    layout: "highlights",
    hasClient: true,
    tech: [
      "nextjs",
      "typescript",
      "mui",
      "tailwind",
      "graphql",
      "segment",
      "snowflake",
      "aws",
      "redis",
      "docker",
      "dataDog",
    ],
  },
  {
    id: "exoMindset",
    company: "Exo Mindset",
    period: { start: "Nov 2020", end: "Jul 2023" },
    workType: "remote",
    layout: "projects",
    tech: [
      "react",
      "reactnative",
      "typescript",
      "nestjs",
      "mysql",
      "docker",
      "aws",
      "firebase",
      "gitlab",
    ],
    projects: [
      {
        id: "meetknit",
        name: "MeetKnit",
        tech: [
          "react",
          "reactnative",
          "redux",
          "nestjs",
          "mysql",
          "aws",
          "keycloak",
          "firebase",
        ],
      },
      {
        id: "sigloXxi",
        name: "Siglo XXI",
        tech: ["react", "nestjs", "mysql", "docker"],
      },
      {
        id: "scoutSmartRecruit",
        name: "scoutSMART Recruit",
        tech: ["reactnative", "redux", "dotnet", "azure"],
      },
      {
        id: "scoutSmart",
        name: "scoutSMART",
        tech: ["reactnative", "expressjs", "firebase", "azure"],
      },
      {
        id: "lapMarketplace",
        name: "LAP Marketplace",
        tech: ["react", "nestjs", "aws", "mysql"],
      },
      {
        id: "vialCard",
        name: "VialCard",
        tech: ["react", "nestjs", "docker", "mysql", "keycloak"],
      },
      {
        id: "mySherlock",
        name: "MySherlock",
        tech: ["react", "nestjs", "docker", "mysql"],
      },
    ],
  },
  {
    id: "i2tSenior",
    company: "i2T S.A.",
    period: { start: "Jun 2019", end: "Oct 2020" },
    workType: "office",
    layout: "highlights",
    tech: [
      "angular",
      "java",
      "spring",
      "mysql",
      "expressjs",
      "wordpress",
      "elasticsearch",
    ],
  },
  {
    id: "cooperativa",
    company: "Cooperativa Agropecuaria de López",
    period: { start: "2018", end: "2019" },
    workType: "remote",
    layout: "highlights",
    tech: ["java", "dotnet", "android", "twilio"],
  },
  {
    id: "i2tIntern",
    company: "i2T S.A.",
    period: { start: "Nov 2018", end: "May 2019" },
    workType: "office",
    layout: "highlights",
    tech: ["php", "expressjs", "mysql", "javascript"],
  },
];
