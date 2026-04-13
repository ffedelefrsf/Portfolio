export function isRelevantCheck(proficiency: string, recency: string): boolean {
  return (
    ["advanced", "solid"].includes(proficiency) &&
    ["fresh", "rusty"].includes(recency)
  );
}
