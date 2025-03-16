import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import ExampleComponent from "../components/home-information";
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
