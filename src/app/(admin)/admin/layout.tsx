"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../../../app/globals.css";
// import { useEffect, useRef } from 'react';
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
