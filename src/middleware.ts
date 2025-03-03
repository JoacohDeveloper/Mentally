import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
// usar auth como middle en caso de descontrol tio
import { auth } from "@/auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(es|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};

export async function middleware(req: NextRequest, response: NextResponse) {
  const secret = process.env.AUTH_SECRET as string;
  const session = await getToken({ req, secret });

  if (
    req.url.includes("auth/create-account") ||
    req.url.includes("auth/sign-in")
  ) {
    if (session && session?.email)
      return NextResponse.redirect(new URL("/", req.url));
  }

  // createMiddleware(routing);
  return NextResponse.next();
}
export default createMiddleware(routing);
