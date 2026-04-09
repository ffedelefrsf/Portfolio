import { EXPERIENCE_ENTRIES } from "../experience/data";

type MonthYear = { year: number; month: number };

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function parseMonthYear(dateStr: string): MonthYear {
  const parts = dateStr.trim().split(" ");
  if (parts.length === 1) {
    return { year: parseInt(parts[0], 10), month: 0 };
  }
  return { year: parseInt(parts[1], 10), month: MONTH_NAMES.indexOf(parts[0]) };
}

function monthsBetween(start: MonthYear, end: MonthYear): number {
  return (end.year - start.year) * 12 + (end.month - start.month);
}

export type SkillExperienceEntry = { id: string; company: string };

export type SkillExperienceInfo = {
  totalMonths: number;
  years: number;
  entries: SkillExperienceEntry[];
};

export function getSkillExperienceInfo(skill: string): SkillExperienceInfo {
  const now = new Date();
  const current: MonthYear = { year: now.getFullYear(), month: now.getMonth() };

  const matching = EXPERIENCE_ENTRIES.filter(
    (e) => !/intern/i.test(e.id) && e.tech.includes(skill),
  );

  let totalMonths = 0;
  for (const entry of matching) {
    const start = parseMonthYear(entry.period.start);
    const end = entry.period.end ? parseMonthYear(entry.period.end) : current;
    totalMonths += monthsBetween(start, end);
  }

  return {
    totalMonths,
    years: Math.floor(totalMonths / 12),
    entries: matching.map((e) => ({ id: e.id, company: e.companyName })),
  };
}
