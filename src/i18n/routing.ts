import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/auth/sign-in": "/auth/sign-in",
    "/auth/create-account": "/auth/create-account",
    "/auth/sign-out": "/auth/sign-out",
    "/pathnames": {
      en: "/pathnames",
      es: "/enrutado",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
