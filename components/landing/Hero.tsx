"use client";

import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/lib/context/store";
import Button from "../ui/Button";
import { heroImage } from "@/assets/images";
import Image from "next/image";
import gsap from "gsap";
import { goIcon } from "@/assets/icons";

const Hero = () => {
  const { language } = useContext(AppContext) ?? { language: "en" };
  const heroImageRef = useRef(null);

  useEffect(() => {
    gsap.to(heroImageRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.6,
    });

    gsap.to("#hero-title", {
      opacity: 1,
      y: 0,
    });

    gsap.to("#hero-descr", {
      opacity: 1,
      y: 0,
      delay: 0.3,
    });
  }, [language]);

  return (
    <section className="w-full min-h-screen max-sm:h-[110vh] container-max pt-[126px] max-sm:pt-[62px] max-lg:pt-[82px]  pb-[92px]">
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
            id="hero-title"
            className={`text-[46px] opacity-0 translate-y-[40px] max-sm:text-[40px] ${
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
            id="hero-descr"
            className={`mt-[48px] opacity-0 translate-y-[40px] max-sm:mt-[32px] max-sm:text-[18px] text-[22px] font-inter text-gray-dark ${
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
            className={`bg-primary flex max-sm:text-base max-sm:mt-[62px] mt-[82px] text-white   font-inter text-lg font-medium py-[14px] px-[18px] rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker ${
              language === "ar" ? "text-right" : ""
            }`}
          >
            <span>
              {language === "en"
                ? "View Services"
                : language === "ar"
                ? "عرض الخدمات"
                : "Dienstleistungen anzeigen"}
            </span>
            <Image
              className={`${
                language === "ar"
                  ? "mr-[12px] scale-x-[-1]"
                  : "ml-[12px] scale-x-1"
              } `}
              src={goIcon}
              alt="go icon"
            ></Image>
          </Button>
        </div>
        <div className="max-lg:hidden">
          <Image
            ref={heroImageRef}
            src={heroImage}
            className={`${
              language === "ar" ? "scale-x-[-1]" : ""
            } opacity-0 scale-0 `}
            alt="hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
