"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppContext } from "@/lib/context/store";
import { footerImage } from "@/assets/images";
import { navLinks, socialMediaLinks } from "@/lib/constants";
import LanguageSelector from "../ui/LanguageSelector";

const Footer = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Footer must be used within an AppProvider");
  }
  const { language } = context as {
    language: "en" | "ar" | "de";
    setLanguage: (lang: "en" | "ar" | "de") => void;
  };

  return (
    <footer
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="w-full bg-black pt-[76px] pb-[36px]"
    >
      <div className="h-full container-max w-full">
        <header
          className={`w-full ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <Link
            href="/"
            className={`text-[32px] ${
              language === "en"
                ? "font-dm"
                : language === "ar"
                ? "font-readex"
                : "font-dm"
            } text-white`}
          >
            {language === "en"
              ? "© Asoma"
              : language === "ar"
              ? "© أسوما"
              : "© Asoma"}
          </Link>
        </header>

        <div className={`w-full mt-[56px] flex items-center justify-between`}>
          <div
            className={`flex  gap-[146px] max-lg:gap-[80px] max-md:gap-[40px] ${
              language === "de" ? "max-sm:gap-[16px]" : "max-sm:gap-[32px]"
            }  `}
          >
            <div className="">
              <h3 className="text-[20px] w-full  font-semibold text-white font-inter">
                {language === "en"
                  ? "Social Media"
                  : language === "ar"
                  ? "التواصل الأجتماعي"
                  : "Social Media"}
              </h3>
              <ul
                className={`text-gray-light mt-[24px] flex flex-col gap-[20px] ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {socialMediaLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="hover:text-secondary active:text-secondary-dark duration-200"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h3 className="w-full text-[20px] font-semibold text-white font-inter">
                {language === "en"
                  ? "Pages"
                  : language === "ar"
                  ? "الصفحات"
                  : "Webseiten"}
              </h3>
              <ul
                className={`text-gray-light mt-[24px] flex flex-col gap-[20px] ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {navLinks[language].map((link) => (
                  <li key={link.href}>
                    <Link
                      className="hover:text-secondary active:text-secondary-dark duration-200"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-md:hidden">
            <Image
              src={footerImage}
              alt="footer image"
              width={200}
              height={100}
            />
          </div>
        </div>

        <div
          className={`border-t-2 mt-[100px] border-gray-light flex justify-between items-center w-full h-[92px] pt-[36px] pb-[10px]`}
        >
          <p
            className={`text-lg max-sm:text-base text-white font-inter font-medium ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {language === "ar"
              ? `${new Date().getFullYear()} © إصدار`
              : `Edition © ${new Date().getFullYear()}`}
          </p>

          <div className="relative w-[156px]">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
