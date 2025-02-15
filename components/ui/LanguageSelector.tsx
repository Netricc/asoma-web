"use client";

import { useState, useContext } from "react";
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
  };

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
        <option value="en">English</option>
        <option value="ar">العربية</option>
        <option value="de">Deutschland</option>
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
