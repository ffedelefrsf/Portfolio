import { setLocale } from "./actions";
import { useLocale } from "next-intl";

const LOCALES = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    await setLocale(e.target.value);
  }

  return (
    <div className="flex justify-center align-middle h-9 rounded-lg border border-border bg-background text-foreground text-sm px-2 transition-colors hover:bg-surface-alt focus:outline-none">
      <select
        value={locale}
        onChange={handleChange}
        aria-label="Select language"
        className="cursor-pointer"
        style={{
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
        }}
      >
        {LOCALES.map(({ code, flag, label }) => (
          <option key={code} value={code} aria-label={label}>
            {flag} {label}
          </option>
        ))}
      </select>
    </div>
  );
}
