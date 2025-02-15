"use client";

import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { AppContext } from "@/lib/context/store";
import { arrowUpDownIcon } from "@/assets/icons";

const LanguageSelector = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { language, setLanguage } = context;
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as "en" | "ar" | "de";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);

    // Store a flag in sessionStorage
    sessionStorage.setItem("scrollToTop", "true");

    location.reload();
  };

  useEffect(() => {
    if (sessionStorage.getItem("scrollToTop")) {
      window.scrollTo(0, 0);
      sessionStorage.removeItem("scrollToTop"); // Remove the flag
    }
  }, []);

  return (
    <div
      className="relative  w-[166px]"
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
    >
      <select
        className="w-full rounded-full px-[26px] py-[12px] text-base font-medium text-white outline-none cursor-pointer border-white hover:border-gray-light focus:border-primary bg-transparent border-2 appearance-none"
        value={language}
        onChange={handleLanguageChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <option
          className="hover:bg-primary cursor-pointer appearance-none"
          value="en"
        >
          English
        </option>
        <option
          className="hover:bg-primary cursor-pointer appearance-none"
          value="ar"
        >
          العربية
        </option>
        <option
          className="hover:bg-primary cursor-pointer appearance-none"
          value="de"
        >
          Deutschland
        </option>
      </select>

      {/* Arrow with rotation when open */}
      <div
        className={`absolute inset-y-0 ${
          language === "ar" ? "left-4" : "right-4"
        } flex items-center transition-transform duration-200 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <Image
          src={arrowUpDownIcon}
          width={24}
          height={24}
          alt="updown arrow"
        ></Image>
      </div>
    </div>
  );
};

export default LanguageSelector;
