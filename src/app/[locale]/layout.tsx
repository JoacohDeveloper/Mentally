import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Be_Vietnam_Pro } from "next/font/google";
import Link from "next/link";
import "@/app/globals.css";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { ThemeSelect } from "../components/ThemeSelect";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
const textos = Be_Vietnam_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: any }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: `Mentally | ${t("title_rich")}`,
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: any }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    return notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  setRequestLocale(await locale);
  const messages = await getMessages();
  const session = await auth();
  return (
    <html lang={await locale}>
      <SessionProvider>
        <body className={`${textos.className} bg-main dark:bg-d-main `}>
          <ThemeProvider>
            <nav className="flex py-2 justify-between px-10">
              <div className="flex gap-4">
                <Link href={`${locale}/auth/sign-in`}>Sign In</Link>
                <Link href={`${locale}/auth/create-account`}>
                  Create Account
                </Link>
                <Link href={`${locale}/auth/sign-out`}>Sign Out</Link>
              </div>
              {session?.user && <div>Logged as {session?.user?.name}</div>}
            </nav>
            <ThemeSelect />
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
