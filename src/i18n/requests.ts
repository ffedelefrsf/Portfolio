import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { TRANSLATION_NAME as NAVBAR } from "../cross-site/ui/Navbar/translation/config";
import { TRANSLATION_NAME as HOME } from "../app/(root)/translation/config";
import { TRANSLATION_NAME as ABOUT } from "../app/about/translation/config";
import { TRANSLATION_NAME as SKILLS } from "../app/skills/translation/config";
import { TRANSLATION_NAME as EXPERIENCE } from "../app/experience/translation/config";
import { TRANSLATION_NAME as CONTACT } from "../app/contact/translation/config";

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value || "en";

  const [navbar, home, skills, experience, about, contact] = await Promise.all([
    import(`../cross-site/ui/Navbar/translation/${locale}.json`),
    import(`../app/(root)/translation/${locale}.json`),
    import(`../app/skills/translation/${locale}.json`),
    import(`../app/experience/translation/${locale}.json`),
    import(`../app/about/translation/${locale}.json`),
    import(`../app/contact/translation/${locale}.json`),
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
