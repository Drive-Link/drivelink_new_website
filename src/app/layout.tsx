"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header-component/header";
import Footer from "@/components/footer/footer";
// import { useEffect, useRef } from 'react';
import { SectionRefProvider } from "@/context/SectionRefContext";
import Head from "./head";
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
 
  return (
    <html lang="en">
       <head>
        <Head/>
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
