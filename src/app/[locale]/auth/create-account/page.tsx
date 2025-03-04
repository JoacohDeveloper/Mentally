import ClientWrapper from "../components/client-wrapper";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: any }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: `${t("create-account-title")}`,
    description: t("description"),
  };
}

export default async function CreateAccount() {
  return <ClientWrapper />;
}
