import { useTranslations } from "next-intl";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import ExampleComponent from "../components/example";
import { ThemeSelect } from "../components/ThemeSelect";
import { ThemeProvider } from "@/Providers/ThemeProvider";
export default function HomePage({
  params,
}: {
  params: Promise<{ locale: any }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return (
    <main className="h-svh bg-main dark:bg-d-main">
      <ExampleComponent />
    </main>
  );
}
