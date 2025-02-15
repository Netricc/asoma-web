"use client";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/lib/context/store";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/";
import { mobileMenuIcon, startIcon } from "@/assets/icons";
import Image from "next/image";
import gsap from "gsap";

const Header = () => {
  const context = useContext(AppContext);
  const language = (context?.language as "en" | "ar" | "de") || "en";
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      gsap.to("#mobileNav", { duration: 0.5, y: 0, borderRadius: "0" });
    } else {
      gsap.to("#mobileNav", {
        duration: 0.4,
        y: "-100%",
        borderBottomLeftRadius: "999px",
        borderBottomRightRadius: "999px",
        ease: "power2.out",
      });
    }
  }, [showMobileMenu]);

  return (
    <header
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className={`w-full container-max h-[100px] flex justify-between items-center py-[26px] `}
    >
      <Link
        onClick={() => {
          setShowMobileMenu(false);
        }}
        href={"/"}
        className={`text-[32px] ${
          showMobileMenu ? "text-white" : "text-black"
        } duration-200  z-40 ${
          language === "en"
            ? "font-dm"
            : language === "ar"
            ? "font-readex"
            : "font-dm"
        } text-black`}
      >
        {language === "en"
          ? "© Asoma"
          : language === "ar"
          ? "© أسوما"
          : "© Asoma"}
      </Link>
      <nav className="flex flex-row gap-[70px] max-lg:gap-[52px] items-center max-sm:hidden">
        {navLinks[language]?.map((link) => (
          <Link
            className="text-black text-lg font-inter hover:text-primary duration-200 active:text-primary-dark"
            href={link.href}
            key={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Button className="bg-primary max-sm:hidden items-center text-white  py-[14px] px-[18px] font-inter text-lg font-medium  rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker">
        <Link
          className={`flex w-fit mx-auto flex-row  items-center`}
          href={"/contact"}
        >
          <span>
            {language === "en"
              ? "Start now"
              : language === "ar"
              ? "ابدأ الآن"
              : "Jetzt starten"}
          </span>

          <Image
            className={`${
              language === "ar"
                ? "mr-[12px] scale-x-[-1]"
                : "ml-[12px] scale-x-1"
            } `}
            src={startIcon}
            alt="go icon"
            width={26}
            height={26}
          ></Image>
        </Link>
      </Button>

      <button
        className={`w-[50px] z-40 h-[50px] rounded-full  hidden justify-center items-center duration-200 hover:bg-primary active:bg-primary max-sm:flex  ${
          showMobileMenu ? "bg-primary" : "bg-black"
        } ${
          showMobileMenu
            ? `fixed ${
                language === "en"
                  ? "right-[26px]"
                  : language === "ar"
                  ? "left-[26px] "
                  : "right-[26px]"
              } `
            : ""
        } ${language === "ar" ? "rounded-tl-[16px]" : "rounded-tr-[16px]"}`}
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <Image src={mobileMenuIcon} alt="mobilemenuicon" />
      </button>

      <nav
        id="mobileNav"
        className="fixed z-30 items-center justify-center  max-sm:flex hidden top-0 right-0 translate-y-[-100%] rounded-b-full  bg-black w-full h-screen"
      >
        <div className="flex flex-col gap-[100px] items-center">
          {navLinks[language]?.map((link) => (
            <Link
              onClick={() => {
                setShowMobileMenu(false);
              }}
              className="text-white text-[30px] mobileNavLink font-medium font-inter hover:text-primary  duration-200 active:text-primary-dark"
              href={link.href}
              key={link.href}
            >
              <span className="text-secondary duration-200">•</span> {link.name}
            </Link>
          ))}
          <Button
            onClick={() => {
              setShowMobileMenu(false);
            }}
            className="bg-primary  w-[160px] text-white font-inter text-lg font-medium py-[14px] px-[18px] rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker"
          >
            <Link href={"/contact"}>
              {language === "en"
                ? "Start now"
                : language === "ar"
                ? "ابدأ الآن"
                : "Jetzt starten"}
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
