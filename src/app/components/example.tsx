"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Be_Vietnam_Pro, Sorts_Mill_Goudy } from "next/font/google";
import { text } from "stream/consumers";

const titles = Sorts_Mill_Goudy({
  weight: "400",
  subsets: ["latin"],
});

const texts = Be_Vietnam_Pro({
  weight: "400",
  subsets: ["latin"],
});

export default function ExampleComponent() {
  const t = useTranslations("Home");

  return (
    <>
      <div className="w-[25rem] h-[12rem] rounded-[1.75rem] px-5 py-5 mx-10">
        <h4
          className={`${titles.className} text-text-secondary dark:text-text-m-white text-4xl`}
        >
          Mentally
        </h4>
        <p
          className={`${texts.className} text-text-main dark:text-d-text-main text-sm`}
        >
          <span className="text-[#00B3EE]">{t("text1")} </span>
          {t("text2")} {t("text3")} {t("text5")}{" "}
          <span className="text-[#00B3EE]">{t("text6")}</span>
        </p>
      </div>
    </>
  );
}
