"use client";

import { useContext } from "react";
import { AppContext } from "@/lib/context/store";
import { Header, Footer } from "@/components";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useContext(AppContext) || { language: "en" };

  return (
    <div lang={language}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
