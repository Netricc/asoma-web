"use client";

import { useContext } from "react";
import { AppContext } from "@/lib/context/store";
const Features = () => {
  const context = useContext(AppContext);
  const language = context?.language || "en";
  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="w-full container-max bg-white pb-[120px] max-lg:pb-[62px] max-md:pb-[42px] max-md:pb-[32px]"
    >
      Features
    </section>
  );
};

export default Features;
