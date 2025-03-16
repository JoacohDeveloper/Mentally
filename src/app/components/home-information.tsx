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
  weight: ["400", "900"],
  subsets: ["latin"],
});

export default function HomeInformation() {
  const t = useTranslations("Home");

  return (
    <div className="relative flex flex-col">
      <div className="w-[18rem] h-[12rem] rounded-[1.75rem] mt-10 mx-10">
        <h4
          className={`${titles.className} text-text-secondary font-black dark:text-text-m-white text-4xl`}
        >
          Mentally
        </h4>
        <p
          className={`${texts.className} text-text-main dark:text-d-text-main text-sm`}
        >
          <span className="text-text-main-blue">{t("text1")} </span>
          {t("text2")} {t("text3")} {t("text5")}{" "}
          <span className="text-text-main-blue">{t("text6")}</span>
        </p>

        <div className="w-[120px] h-[8px] bg-s-gray rounded-2xl mt-7"></div>
      </div>


        <div className="w-[18rem] rounded-[1.75rem] mt-8 mx-10 relative">
        <div className="bg-text-main-blue opacity-5 w-[355px] h-[350px] rounded-[100px] absolute -right-[15rem] -bottom-10"></div>

        <h4
          className={`${titles.className} text-text-secondary font-black dark:text-text-m-white text-[1.6rem]`}
        >
          How it Works
        </h4>
      <div className="flex flex-col gap-4">
        <p
          className={`${texts.className} text-text-main dark:text-d-text-main text-sm`}
        >
          Mentally is an application designed to create a supportive community for mental health. It has two main roles: psychologist and patient. 
        </p>
        <p  className={`${texts.className} text-text-main dark:text-d-text-main text-sm`}>
        Users can sign in as either a psychologist, to offer guidance and support, or as a patient, to seek help and share experiences. This system fosters a space where people can connect and help each other.
        </p>
      </div>
      </div>

      <div className="w-full rounded-[1.75rem] mt-10 overflow-x-hidden">
        <h4
          className={`${titles.className} mx-10 mb-10 text-text-secondary font-black dark:text-text-m-white text-[1.6rem]`}
        >
          Our Customers
        </h4>
        <div className="flex gap-4 w-full min-h-[25rem]
        
        ">
          
          <div className="bg-gray-300 min-h-full rounded-2xl min-w-[15rem]">

          </div>
          <div className="bg-gray-300 min-h-full rounded-2xl min-w-[15rem]">

          </div>
          <div className="bg-gray-300 min-h-full rounded-2xl min-w-[15rem]">

          </div>  
        </div>
      </div>
    </div>
  );
}
