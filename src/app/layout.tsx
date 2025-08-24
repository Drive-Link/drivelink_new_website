"use client";

import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/header-component/header";
import Footer from "@/components/footer/footer";
import { SectionRefProvider } from "@/context/SectionRefContext";
import Head from "./head";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode | any;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${onest.variable}`}>
        <SectionRefProvider>
          {!isAdminRoute && <Header />}
          <main>{children}</main>
          {!isAdminRoute && <Footer />}
        </SectionRefProvider>
      </body>
    </html>
  );
}
