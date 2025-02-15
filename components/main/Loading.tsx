"use client";
import { useContext, useEffect } from "react";
import { AppContext } from "@/lib/context/store";
import gsap from "gsap";
const Loading = () => {
  const context = useContext(AppContext);
  const loading = context ? context.loading : false;

  useEffect(() => {
    if (!loading) {
      gsap.to("#loading-section", {
        opacity: 0,
        display: "none",
      });
    }
  }, [loading]);
  return (
    <div
      id="loading-section"
      className="w-full fixed bg-white z-50 h-screen  overflow-hidde flex justify-center items-center top-0 left-0"
    >
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default Loading;
