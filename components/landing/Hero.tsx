"use client";

import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/lib/context/store";
import Button from "../ui/Button";
import { heroImage } from "@/assets/images";
import Image from "next/image";
import gsap from "gsap";
import { tourIcon } from "@/assets/icons";
import Link from "next/link";

const Hero = () => {
  const { language } = useContext(AppContext) ?? { language: "en" };
  const heroImageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroImageRef.current,
      {
        scaleX: language === "ar" ? -1 : 1,
      },
      {
        opacity: 1,
        y: 0,
        scaleX: language === "ar" ? -1 : 1,
        scaleY: 1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.6,
      }
    );

    gsap.to("#hero-title", {
      opacity: 1,
      y: 0,
    });

    gsap.to("#hero-descr", {
      opacity: 1,
      y: 0,
      delay: 0.3,
    });

    if (language === "ar") {
      document.documentElement.style.cssText = "--slide-direction : right";
    } else {
      document.documentElement.style.cssText = "--slide-direction : left";
    }
  }, [language]);

  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="w-full min-h-screen flex flex-col gap-[160px] max-lg:gap-[80px] max-sm:gap-[70px] pt-[126px] max-sm:pt-[62px] max-lg:pt-[82px] pb-[52px] max-lg:pb-[40px] max-md:pb-[20px] max-sm:pb-[10px]"
    >
      <div
        className={`w-full justify-between items-center flex container-max `}
      >
        <div dir={language === "ar" ? "rtl" : "ltr"} className="w-[654px]">
          <h1
            id="hero-title"
            className={`z-10 text-[46px] opacity-0 translate-y-[40px] max-sm:text-[40px] ${
              language === "ar" ? "font-readex text-right" : "font-dm"
            } w-full max-lg:w-full leading-[53px] first-letter:text-secondary`}
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

          <Button className="bg-primary max-sm:text-base max-sm:mt-[62px] mt-[82px] text-white font-inter text-lg font-medium py-[14px] px-[18px] rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker">
            <Link
              className="flex w-fit mx-auto flex-row items-center"
              href={"/services"}
            >
              <span>
                {language === "en"
                  ? "Visit Services"
                  : language === "ar"
                  ? "زيارة الخدمات"
                  : "Servicestellen besuchen"}
              </span>
              <Image
                className={`${language === "ar" ? "mr-[12px]" : "ml-[12px]"}`}
                src={tourIcon}
                alt="go icon"
              />
            </Link>
          </Button>
        </div>
        <div
          dir={`${language === "ar" ? "rtl" : "ltr"}`}
          className="max-lg:hidden"
        >
          <Image
            ref={heroImageRef}
            src={heroImage}
            className={`opacity-0 scale-0 transform ${
              language === "ar" ? " scale-y-[-1]" : ""
            }`}
            alt="hero Image"
          />
        </div>
      </div>

      <div
        dir={language === "ar" ? "rtl" : "ltr"}
        className="loop relative w-full"
      >
        <h2
          className={`absolute ${
            language === "ar"
              ? "font-readex text-right font-semibold right-[200%]"
              : "font-dm text-left left-[100%]"
          } text-[92px] max-lg:text-[82px] max-sm:text-[72px]`}
        >
          {language === "en"
            ? "We build strong, functional, and beautifully designed products that your clients will love."
            : language === "ar"
            ? "نحن نبني منتجات قوية، عملية، ومصممة بشكل جميل سيحبها عملاؤك."
            : "Wir bauen starke, funktionale und wunderschön gestaltete Produkte, die Ihre Kunden lieben werden."}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
