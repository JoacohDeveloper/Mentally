import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  // Ensure that the incoming `locale` is valid
  if (!locale || !routing.locales.includes(locale as any)) {
    const headersList = headers();
    const defaultLocale = (await headersList).get("accept-language");
    locale =
      (await cookies()).get("NEXT_LOCALE")?.value ||
      defaultLocale ||
      routing.defaultLocale;
    //locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../../locales/en/en.json")
        : import(`../../locales/${locale}/${locale}.json`))
    ).default,
  };
});
