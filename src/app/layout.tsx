"use client";
import { metadata } from './head';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header-component/header";
import Footer from "@/components/footer/footer";
import { useEffect, useRef } from 'react';
import { SectionRefProvider } from "@/context/SectionRefContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode|any;
}>) {
  const heroSectionRef = useRef<HTMLDivElement | null|any>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null|any>(null);
  const howSectionRef = useRef<HTMLDivElement | null|any>(null);
  const downloadAppSectionRef = useRef<HTMLDivElement | null|any>(null);
  // Function to scroll to the target section
  // const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  //   console.log(ref.current);
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth",block: "start" });
  //   } else {
  //     console.error("Ref is null");
  //   }
  // };
  // useEffect(() => {
  //   // Log the refs after component mounts
  //   console.log(heroSectionRef.current);
  //   console.log(aboutSectionRef.current);
  //   console.log(howSectionRef.current);
  //   console.log(downloadAppSectionRef.current);
  // }, []);
  return (
    <html lang="en">
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string } />
        {/* <link rel="icon" href={metadata.icons as string} type="image/png" /> */}
  <link rel="icon" href="/drivelink-icon.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SectionRefProvider>

        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
        </SectionRefProvider>
      </body>
    </html>
  );
}
