"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { SKILL_CATEGORIES, SKILL_DETAILS } from "../../data";
import { TRANSLATION_NAME } from "../../translation/config";
import { SkillCategory, SkillProficiency, SkillRecency } from "../../types";
import { SkillChip } from "../SkillChip";
import { FilterRow } from "./FilterRow";

export function SkillsGrid() {
  const t = useTranslations(TRANSLATION_NAME);

  const [selectedProficiencies, setSelectedProficiencies] = useState<
    Set<SkillProficiency>
  >(new Set(["advanced", "solid"]));
  const [selectedRecencies, setSelectedRecencies] = useState<Set<SkillRecency>>(
    new Set(["fresh", "rusty"]),
  );

  function toggleProficiency(level: SkillProficiency) {
    setSelectedProficiencies((prev) => {
      const next = new Set(prev);
      if (next.has(level)) next.delete(level);
      else next.add(level);
      return next;
    });
  }

  function toggleRecency(level: SkillRecency) {
    setSelectedRecencies((prev) => {
      const next = new Set(prev);
      if (next.has(level)) next.delete(level);
      else next.add(level);
      return next;
    });
  }

  function clearFilters() {
    setSelectedProficiencies(new Set());
    setSelectedRecencies(new Set());
  }

  const hasFilters =
    selectedProficiencies.size > 0 || selectedRecencies.size > 0;

  function isVisible(skill: string): boolean {
    const detail = SKILL_DETAILS[skill];
    if (!detail) return !hasFilters;
    const profMatch =
      selectedProficiencies.size === 0 ||
      selectedProficiencies.has(detail.proficiency);
    const recMatch =
      selectedRecencies.size === 0 || selectedRecencies.has(detail.recency);
    return profMatch && recMatch;
  }

  const filteredCategories = SKILL_CATEGORIES.reduce(
    (acc: SkillCategory[], { id, skills }) => {
      const visibleSkills = skills.filter(isVisible);
      if (visibleSkills.length > 0) {
        acc.push({
          id,
          skills: visibleSkills,
        });
      }
      return acc;
    },
    [],
  );

  return (
    <div className={cn("max-w-4xl")}>
      <div
        className={cn(
          "mb-13",
          "rounded-xl",
          "border",
          "border-border",
          "bg-neutral-50",
          "dark:bg-card",
          "p-4",
          "space-y-4",
          "max-w-150",
        )}
      >
        <FilterRow
          isProficiency
          selectedValues={selectedProficiencies}
          toggleValue={toggleProficiency}
        />
        <FilterRow
          isProficiency={false}
          selectedValues={selectedRecencies}
          toggleValue={toggleRecency}
        />

        <div className={cn("flex", "justify-end")}>
          <button
            type="button"
            disabled={!hasFilters}
            onClick={clearFilters}
            className={cn(
              "text-xs",
              "text-muted-foreground",
              "underline-offset-2",
              "hover:text-foreground",
              "hover:underline",
              "transition-colors",
              "cursor-pointer",
              {
                "cursor-not-allowed": !hasFilters,
                "hover:no-underline": !hasFilters,
              },
            )}
          >
            {t("clearFilters")}
          </button>
        </div>
      </div>

      <div>
        {filteredCategories.map(({ id, skills }, index) => (
          <div key={id}>
            {index > 0 && <hr className={cn("my-10", "border-border")} />}
            <h2
              className={cn(
                "mb-4",
                "flex",
                "items-center",
                "gap-2",
                "text-xs",
                "font-bold",
                "uppercase",
                "tracking-widest",
                "text-primary",
              )}
            >
              <span
                className={cn("h-4", "w-0.5", "rounded-full", "bg-primary")}
              />
              {t(`categories.${id}`)}
            </h2>
            <div className={cn("flex", "flex-wrap", "gap-2")}>
              {skills.map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
