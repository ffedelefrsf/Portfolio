export type SkillCategory = {
  id: string;
  skills: string[];
};

export type SkillProficiency = "advanced" | "solid" | "basic";

export type SkillRecency = "fresh" | "rusty" | "blurry";

export type SkillDetail = {
  proficiency: SkillProficiency;
  recency: SkillRecency;
};
