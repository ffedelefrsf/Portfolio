import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { TRANSLATION_NAME as HOME } from "../app/[locale]/(root)/translation/config";
import { TRANSLATION_NAME as ABOUT } from "../app/[locale]/about/translation/config";
import { TRANSLATION_NAME as CONTACT } from "../app/[locale]/contact/translation/config";
import { TRANSLATION_NAME as EXPERIENCE } from "../app/[locale]/experience/translation/config";
import { TRANSLATION_NAME as SKILLS } from "../app/[locale]/skills/translation/config";
import { TRANSLATION_NAME as NAVBAR } from "../cross-site/ui/Navbar/translation/config";
import { isSupportedLanguage } from "./utils";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? "en";

  if (!isSupportedLanguage(locale)) {
    notFound();
  }

  const [navbar, home, skills, experience, about, contact] = await Promise.all([
    import(`../cross-site/ui/Navbar/translation/${locale}.json`),
    import(`../app/[locale]/(root)/translation/${locale}.json`),
    import(`../app/[locale]/skills/translation/${locale}.json`),
    import(`../app/[locale]/experience/translation/${locale}.json`),
    import(`../app/[locale]/about/translation/${locale}.json`),
    import(`../app/[locale]/contact/translation/${locale}.json`),
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
});
