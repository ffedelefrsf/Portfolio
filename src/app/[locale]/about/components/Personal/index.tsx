import { getTranslations } from "next-intl/server";
import { Fragment } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { TRANSLATION_NAME } from "../../translation/config";
import { SectionTitle } from "../SectionTitle";
import {
  DOGS_COLLAGE_ITEMS,
  FAMILY_COLLAGE_ITEMS,
  ME_COLLAGE_ITEMS,
  TRAVEL_COLLAGE_ITEMS,
} from "./constants";
import { PolaroidCollage } from "./PolaroidCollage";
import { ROTATIONS_AND_PLACEHOLDERS } from "./utils";

export async function Personal() {
  const t = await getTranslations(TRANSLATION_NAME);

  const sections = {
    myself: ME_COLLAGE_ITEMS,
    family: FAMILY_COLLAGE_ITEMS,
    pets: DOGS_COLLAGE_ITEMS,
    travel: TRAVEL_COLLAGE_ITEMS,
    disconnection: undefined,
  };

  return (
    <section className={cn("mt-10")}>
      <SectionTitle title={t("personal.title")} />
      <div className={cn("flex", "flex-col", "gap-5")}>
        {Object.entries(sections).map(([name, collageItems]) => (
          <Fragment key={name}>
            <p
              className={cn(
                "text-base",
                "text-muted",
                "leading-relaxed",
                "whitespace-break-spaces",
              )}
            >
              {t(`personal.${name}`)}
            </p>
            {collageItems && (
              <PolaroidCollage
                name={`${name}-collage`}
                items={collageItems.map(
                  ({ src, captionKey, rotationAndPlaceholder }) => ({
                    src,
                    ...ROTATIONS_AND_PLACEHOLDERS[rotationAndPlaceholder],
                    caption: t(captionKey),
                  }),
                )}
              />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
