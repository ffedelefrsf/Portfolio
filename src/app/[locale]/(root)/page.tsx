import { initializeI18N, SUPPORTED_LANGUAGES } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import { Params } from "../types";
import { BackgroundImage } from "./components/BackgroundImage";
import { Greetings } from "./components/Greetings";

export default async function Home({ params }: Params) {
  const { locale } = await params;
  await initializeI18N(locale);

  return (
    <section className={cn("flex", "flex-col", "grow")}>
      <div
        className={cn(
          "flex",
          "flex-col",
          "sm:flex-row",
          "grow",
          "relative",
          "sm:max-h-300",
          "group",
        )}
      >
        <Greetings />
        <BackgroundImage />
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
