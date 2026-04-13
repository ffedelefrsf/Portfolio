import type { SkillCategory, SkillDetail } from "./types";

export const SKILL_DETAILS: Record<string, SkillDetail> = {
  // Frontend
  nextjs: { proficiency: "advanced", recency: "fresh" },
  react: { proficiency: "advanced", recency: "fresh" },
  reactnative: { proficiency: "solid", recency: "fresh" },
  angular: { proficiency: "basic", recency: "rusty" },
  tailwind: { proficiency: "solid", recency: "fresh" },
  jquery: { proficiency: "basic", recency: "blurry" },
  redux: { proficiency: "solid", recency: "rusty" },
  storybook: { proficiency: "basic", recency: "rusty" },
  wordpress: { proficiency: "solid", recency: "rusty" },

  // Backend
  expressjs: { proficiency: "solid", recency: "rusty" },
  nestjs: { proficiency: "solid", recency: "rusty" },
  graphql: { proficiency: "solid", recency: "fresh" },
  spring: { proficiency: "solid", recency: "rusty" },
  django: { proficiency: "basic", recency: "blurry" },
  dotnet: { proficiency: "basic", recency: "blurry" },

  // AI
  openai: { proficiency: "solid", recency: "fresh" },
  claude: { proficiency: "solid", recency: "fresh" },
  cursor: { proficiency: "solid", recency: "fresh" },
  copilot: { proficiency: "basic", recency: "rusty" },

  // Testing
  jest: { proficiency: "advanced", recency: "fresh" },
  reacttestinglibrary: { proficiency: "advanced", recency: "fresh" },
  junit: { proficiency: "solid", recency: "rusty" },
  playwright: { proficiency: "basic", recency: "rusty" },

  // Cloud & DevOps
  vercel: { proficiency: "solid", recency: "fresh" },
  aws: { proficiency: "solid", recency: "fresh" },
  cloudflare: { proficiency: "solid", recency: "fresh" },
  azure: { proficiency: "basic", recency: "blurry" },
  firebase: { proficiency: "solid", recency: "rusty" },
  docker: { proficiency: "solid", recency: "fresh" },
  github: { proficiency: "advanced", recency: "fresh" },
  gitlab: { proficiency: "basic", recency: "rusty" },
  jenkins: { proficiency: "basic", recency: "rusty" },
  redis: { proficiency: "basic", recency: "rusty" },

  // Languages
  typescript: { proficiency: "advanced", recency: "fresh" },
  javascript: { proficiency: "advanced", recency: "fresh" },
  java: { proficiency: "solid", recency: "rusty" },
  python: { proficiency: "basic", recency: "rusty" },
  php: { proficiency: "solid", recency: "blurry" },
  csharp: { proficiency: "basic", recency: "blurry" },

  // Databases
  mysql: { proficiency: "advanced", recency: "fresh" },
  mssql: { proficiency: "solid", recency: "fresh" },
  ibm: { proficiency: "solid", recency: "blurry" },
  snowflake: { proficiency: "solid", recency: "fresh" },

  // Auth
  auth0: { proficiency: "solid", recency: "rusty" },
  keycloak: { proficiency: "solid", recency: "rusty" },

  // Observability
  datadog: { proficiency: "advanced", recency: "fresh" },
  segment: { proficiency: "solid", recency: "fresh" },
  elastic: { proficiency: "basic", recency: "blurry" },

  // Design
  figma: { proficiency: "solid", recency: "fresh" },
  xd: { proficiency: "solid", recency: "rusty" },

  // Management
  atlassian: { proficiency: "advanced", recency: "fresh" },
  asana: { proficiency: "basic", recency: "rusty" },
  redmine: { proficiency: "basic", recency: "blurry" },
  trello: { proficiency: "basic", recency: "blurry" },

  // Methodologies
  SCRUM: { proficiency: "advanced", recency: "fresh" },
  Kanban: { proficiency: "basic", recency: "blurry" },
  RUP: { proficiency: "solid", recency: "blurry" },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    skills: [
      "nextjs",
      "react",
      "reactnative",
      "tailwind",
      "redux",
      "wordpress",
      "storybook",
      "angular",
      "jquery",
    ],
  },
  {
    id: "backend",
    skills: [
      "nextjs",
      "expressjs",
      "nestjs",
      "graphql",
      "spring",
      "django",
      "dotnet",
    ],
  },
  {
    id: "ai",
    skills: ["openai", "claude", "cursor", "copilot"],
  },
  {
    id: "testing",
    skills: ["jest", "reacttestinglibrary", "junit", "playwright"],
  },
  {
    id: "cloudDevops",
    skills: [
      "vercel",
      "aws",
      "cloudflare",
      "firebase",
      "docker",
      "github",
      "gitlab",
      "azure",
      "jenkins",
      "redis",
    ],
  },
  {
    id: "languages",
    skills: ["typescript", "javascript", "java", "python", "php", "csharp"],
  },
  {
    id: "databases",
    skills: ["mysql", "snowflake", "mssql", "ibm"],
  },
  {
    id: "auth",
    skills: ["auth0", "keycloak"],
  },
  {
    id: "observability",
    skills: ["datadog", "segment", "elastic"],
  },
  {
    id: "design",
    skills: ["figma", "xd"],
  },
  {
    id: "management",
    skills: ["atlassian", "asana", "redmine", "trello"],
  },
  {
    id: "methodologies",
    skills: ["SCRUM", "RUP", "Kanban"],
  },
];

export const SOFT_SKILLS = [
  "ownership",
  "communication",
  "problemSolving",
  "conflictResolution",
  "adaptability-learning",
  "reliability-work-ethic",
  "collaboration-team-mindset",
  "emotional-intelligence",
  "leadership",
  "mentorshipTeamDevelopment",
];
