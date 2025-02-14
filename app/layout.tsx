import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Readex_Pro } from "next/font/google";
import type { StaticImageData } from "next/image";
import favicon from "@/public/favicon.ico";
import { AppProvider } from "@/lib/context/store";
import "./globals.css";

import ClientLayout from "./client-layout";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});
const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["arabic"],
});

const faviconUrl = (favicon as StaticImageData).src;
const metaTitle =
  "Asoma - The best place to build your amazing product to life";
const metaDescription =
  "We offer a wide range of services, including web development, server attack detection, and much more.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="Asoma" />
        <meta property="og:locale" content={"en"} />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href={faviconUrl} />
      </head>
      <body
        className={`${dmSerifDisplay.className} ${inter.className} ${readexPro.className} antialiased`}
      >
        <AppProvider>
          <ClientLayout>{children}</ClientLayout>
        </AppProvider>
      </body>
    </html>
  );
}
