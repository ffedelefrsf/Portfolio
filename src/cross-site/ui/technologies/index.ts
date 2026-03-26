import type { ElementType } from "react";

import { Android } from "./icons/Android";
import { Angular } from "./icons/Angular";
import { AntDesign } from "./icons/AntDesign";
import { Asana } from "./icons/Asana";
import { Atlassian } from "./icons/Atlassian";
import { Auth0 } from "./icons/Auth0";
import { AWS } from "./icons/AWS";
import { Azure } from "./icons/Azure";
import { ClaudeAI } from "./icons/ClaudeAI";
import { Cloudflare } from "./icons/Cloudflare";
import { Copilot } from "./icons/Copilot";
import { CSharp } from "./icons/CSharp";
import { Cursor } from "./icons/Cursor";
import { Datadog } from "./icons/DataDog";
import { Django } from "./icons/Django";
import { Docker } from "./icons/Docker";
import { DotNet } from "./icons/DotNet";
import { Elastic } from "./icons/Elastic";
import { ExpressJS } from "./icons/ExpressJS";
import { Figma } from "./icons/Figma";
import { Firebase } from "./icons/Firebase";
import { GitHub } from "./icons/GitHub";
import { GitLab } from "./icons/Gitlab";
import { GraphQL } from "./icons/GraphQL";
import { IBM } from "./icons/IBM";
import { Java } from "./icons/Java";
import { JavaScript } from "./icons/JavaScript";
import { Jenkins } from "./icons/Jenkins";
import { Jest } from "./icons/Jest";
import { JQuery } from "./icons/JQuery";
import { JUnit } from "./icons/JUnit";
import { Keycloak } from "./icons/Keycloak";
import { MicrosoftSQLServer } from "./icons/MicrosoftSQLServer";
import { MUI } from "./icons/MUI";
import { MySQL } from "./icons/MySQL";
import { NestJS } from "./icons/NestJS";
import { NextJS } from "./icons/NextJS";
import { OpenAI } from "./icons/OpenAI";
import { PHP } from "./icons/PHP";
import { Playwright } from "./icons/Playwright";
import { Python } from "./icons/Python";
import { React } from "./icons/React";
import { ReactTestingLibrary } from "./icons/ReactTestingLibrary";
import { Redis } from "./icons/Redis";
import { Redmine } from "./icons/Redmine";
import { Redux } from "./icons/Redux";
import { Segment } from "./icons/Segment";
import { ShadcnUI } from "./icons/Shadcn";
import { SnowflakeLogo } from "./icons/Snowflake";
import { Spring } from "./icons/Spring";
import { Storybook } from "./icons/Storybook";
import { Tailwind } from "./icons/Tailwind";
import { Trello } from "./icons/Trello";
import { Twilio } from "./icons/Twilio";
import { TypeORM } from "./icons/TypeORM";
import { TypeScript } from "./icons/TypeScript";
import { Vercel } from "./icons/Vercel";
import { WordPress } from "./icons/WordPress";
import { XD } from "./icons/XD";

export const technologies: Record<
  string,
  { name: string; component: ElementType; shouldInvertOnLight?: boolean }
> = {
  java: {
    name: "Java",
    component: Java,
  },
  javascript: {
    name: "JavaScript",
    component: JavaScript,
  },
  antdesign: {
    name: "AntDesign",
    component: AntDesign,
  },
  vercel: {
    name: "Vercel",
    component: Vercel,
    shouldInvertOnLight: true,
  },
  dotnet: {
    name: "Microsoft .NET",
    component: DotNet,
  },
  firebase: {
    name: "Firebase",
    component: Firebase,
  },
  nextjs: {
    name: "NextJS",
    component: NextJS,
  },
  csharp: {
    name: "C#",
    component: CSharp,
  },
  android: {
    name: "Android",
    component: Android,
  },
  spring: {
    name: "Spring",
    component: Spring,
  },
  xd: {
    name: "Adobe XD",
    component: XD,
  },
  shadcnui: {
    name: "ShadcnUI",
    component: ShadcnUI,
    shouldInvertOnLight: true,
  },
  django: {
    name: "Django",
    component: Django,
  },
  datadog: {
    name: "DataDog",
    component: Datadog,
  },
  mssql: {
    name: "Microsoft SQL Server",
    component: MicrosoftSQLServer,
  },
  redux: {
    name: "Redux",
    component: Redux,
  },
  wordpress: {
    name: "WordPress",
    component: WordPress,
  },
  cloudflare: {
    name: "Cloudflare",
    component: Cloudflare,
  },
  typeorm: {
    name: "TypeORM",
    component: TypeORM,
  },
  mysql: {
    name: "MySQL",
    component: MySQL,
    shouldInvertOnLight: true,
  },
  mui: {
    name: "MUI",
    component: MUI,
  },
  jest: {
    name: "Jest",
    component: Jest,
  },
  aws: {
    name: "AWS",
    component: AWS,
    shouldInvertOnLight: true,
  },
  azure: {
    name: "Azure",
    component: Azure,
  },
  docker: {
    name: "Docker",
    component: Docker,
  },
  gitlab: {
    name: "GitLab",
    component: GitLab,
  },
  graphql: {
    name: "GraphQL",
    component: GraphQL,
  },
  nestjs: {
    name: "NestJS",
    component: NestJS,
  },
  twilio: {
    name: "Twilio",
    component: Twilio,
  },
  typescript: {
    name: "TypeScript",
    component: TypeScript,
  },
  jquery: {
    name: "jQuery",
    component: JQuery,
    shouldInvertOnLight: true,
  },
  expressjs: {
    name: "ExpressJS",
    component: ExpressJS,
    shouldInvertOnLight: true,
  },
  storybook: {
    name: "Storybook",
    component: Storybook,
  },
  angular: {
    name: "Angular",
    component: Angular,
  },
  tailwind: {
    name: "Tailwind",
    component: Tailwind,
  },
  figma: {
    name: "Figma",
    component: Figma,
  },
  react: {
    name: "React",
    component: React,
  },
  reactnative: {
    name: "ReactNative",
    component: React,
  },
  copilot: {
    name: "Copilot",
    component: Copilot,
    shouldInvertOnLight: true,
  },
  redis: {
    name: "Redis",
    component: Redis,
  },
  php: {
    name: "PHP",
    component: PHP,
    shouldInvertOnLight: true,
  },
  openai: {
    name: "OpenAI",
    component: OpenAI,
    shouldInvertOnLight: true,
  },
  ibm: {
    name: "IBM DB2",
    component: IBM,
  },
  claude: {
    name: "ClaudeAI",
    component: ClaudeAI,
  },
  keycloak: {
    name: "Keycloak",
    component: Keycloak,
  },
  github: {
    name: "GitHub",
    component: GitHub,
    shouldInvertOnLight: true,
  },
  jenkins: {
    name: "Jenkins",
    component: Jenkins,
  },
  segment: {
    name: "Segment",
    component: Segment,
  },
  auth0: {
    name: "Auth0",
    component: Auth0,
  },
  elastic: {
    name: "Elastic Search",
    component: Elastic,
  },
  snowflake: {
    name: "Snowflake",
    component: SnowflakeLogo,
  },
  asana: {
    name: "Asana",
    component: Asana,
  },
  atlassian: {
    name: "Atlassian (Jira & Confluence)",
    component: Atlassian,
  },
  trello: {
    name: "Trello",
    component: Trello,
  },
  redmine: {
    name: "Redmine",
    component: Redmine,
  },
  junit: {
    name: "JUnit",
    component: JUnit,
  },
  reacttestinglibrary: {
    name: "React Testing Library",
    component: ReactTestingLibrary,
  },
  playwright: {
    name: "Playwright",
    component: Playwright,
  },
  cursor: {
    name: "Cursor",
    component: Cursor,
  },
  python: {
    name: "Python",
    component: Python,
  },
};
