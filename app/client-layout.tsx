"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/lib/context/store";
import { Header, Footer } from "@/components";
import Loading from "@/components/main/Loading";
import Lenis from "lenis";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useContext(AppContext) || {
    language: "en",
  };

  useEffect(() => {
    console.log("First useEffect is running");
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div lang={language}>
      {<Loading />}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
