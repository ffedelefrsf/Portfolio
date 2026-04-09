import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { TRANSLATION_NAME as ABOUT } from "../app/[locale]/(pages)/about/translation/config";
import { TRANSLATION_NAME as CONTACT } from "../app/[locale]/(pages)/contact/translation/config";
import { TRANSLATION_NAME as EXPERIENCE } from "../app/[locale]/(pages)/experience/translation/config";
import { TRANSLATION_NAME as SKILLS } from "../app/[locale]/(pages)/skills/translation/config";
import { TRANSLATION_NAME as HOME } from "../app/[locale]/(root)/translation/config";
import { TRANSLATION_NAME as NAVBAR } from "../cross-site/ui/Navbar/translation/config";
import { SupportedLanguage, TranslationName } from "./types";
import { isSupportedLanguage } from "./utils";

export default getRequestConfig(
  async ({
    requestLocale,
  }): Promise<{
    locale: SupportedLanguage;
    messages: Record<TranslationName, object>;
  }> => {
    const locale = (await requestLocale) ?? "en";

    if (!isSupportedLanguage(locale)) {
      notFound();
    }

    const [navbar, home, skills, experience, about, contact] =
      await Promise.all([
        import(`../cross-site/ui/Navbar/translation/${locale}.json`),
        import(`../app/[locale]/(root)/translation/${locale}.json`),
        import(`../app/[locale]/(pages)/skills/translation/${locale}.json`),
        import(`../app/[locale]/(pages)/experience/translation/${locale}.json`),
        import(`../app/[locale]/(pages)/about/translation/${locale}.json`),
        import(`../app/[locale]/(pages)/contact/translation/${locale}.json`),
      ]);

    return {
      locale,
      messages: {
        [NAVBAR]: navbar.default,
        [HOME]: home.default,
        [SKILLS]: skills.default,
        [EXPERIENCE]: experience.default,
        [ABOUT]: about.default,
        [CONTACT]: contact.default,
      },
    };
  },
);
