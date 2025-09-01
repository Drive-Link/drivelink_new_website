"use client";
import ProtectedRoute from "@/utils/hoc";
import React, { createContext, useContext, useRef, RefObject } from "react";

// Define the context type
interface SectionRefContextType {
  heroSectionRef: RefObject<HTMLDivElement>;
  aboutSectionRef: RefObject<HTMLDivElement>;
  howSectionRef: RefObject<HTMLDivElement>;
  downloadAppSectionRef: RefObject<HTMLDivElement>;
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
}

// Create the context
const SectionRefContext = createContext<SectionRefContextType | undefined>(undefined);

// Context Provider component
export const SectionRefProvider = ({ children }: { children: React.ReactNode }) => {
  const heroSectionRef = useRef<HTMLDivElement | null | any>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null | any>(null);
  const howSectionRef = useRef<HTMLDivElement | null | any>(null);
  const downloadAppSectionRef = useRef<HTMLDivElement | null | any>(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Ref is null");
    }
  };

  return (

    <SectionRefContext.Provider
      value={{ heroSectionRef, aboutSectionRef, howSectionRef, downloadAppSectionRef, scrollToSection }}
    >
      {children}
    </SectionRefContext.Provider>

  );
};

// Custom hook to use the context
export const useSectionRef = () => {
  const context = useContext(SectionRefContext);
  if (!context) {
    throw new Error("useSectionRef must be used within a SectionRefProvider");
  }
  return context;
};
