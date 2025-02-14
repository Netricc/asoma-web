"use client";

import { useContext } from "react";
import { AppContext } from "@/lib/context/store";
import Button from "../ui/Button";
import { heroImage } from "@/assets/images";
import Image from "next/image";

const Hero = () => {
  const { language } = useContext(AppContext) ?? { language: "en" };
  return (
    <section className="w-full min-h-screen container-max pt-[132px] pb-[92px]">
      <div
        className={`w-full justify-between items-center flex ${
          language === "en" ? "" : language === "ar" ? "flex-row-reverse" : ""
        }`}
      >
        <div
          dir={`${language === "ar" ? "rtl" : ""}`}
          className={`w-[654px] ${language === "ar" ? "text-right" : ""}`}
        >
          <h1
            className={`text-[46px] ${
              language === "en"
                ? "font-dm"
                : language === "ar"
                ? "font-readex"
                : "font-dm"
            } w-full max-lg:w-full leading-[53px] first-letter:text-secondary ${
              language === "ar" ? "text-right" : ""
            }`}
          >
            {language === "en"
              ? "Asoma – The ultimate place to bring your amazing. Keep that in mind..."
              : language === "ar"
              ? "أسوما – المكان الأمثل لإحياء منتجك المذهل. ضع ذلك في اعتبارك..."
              : "Asoma – Der ultimative Ort, um dein erstaunliches Produkt zum Leben zu erwecken. Behalte das im Hinterkopf..."}
          </h1>
          <p
            className={`mt-[48px] text-[22px] font-inter text-gray-dark ${
              language === "ar" ? "text-right" : ""
            }`}
          >
            {language === "en"
              ? "We offer a wide range of services, including web development, server attack detection, and much more."
              : language === "ar"
              ? "نحن نقدم مجموعة واسعة من الخدمات، بما في ذلك تطوير الويب، اكتشاف الهجمات على الخوادم، والمزيد."
              : "Wir bieten eine Vielzahl von Dienstleistungen an, einschließlich Webentwicklung, Erkennung von Angriffen auf Server und mehr."}
          </p>

          <Button
            className={`bg-primary mt-[82px] text-white font-inter text-lg font-medium py-[14px] px-[18px] rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker ${
              language === "ar" ? "text-right" : ""
            }`}
          >
            {language === "en"
              ? "View Services"
              : language === "ar"
              ? "عرض الخدمات"
              : "Dienstleistungen anzeigen"}
          </Button>
        </div>
        <div className="max-lg:hidden">
          <Image
            src={heroImage}
            className={`${language === "ar" ? "scale-x-[-1]" : ""}`}
            alt="hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
