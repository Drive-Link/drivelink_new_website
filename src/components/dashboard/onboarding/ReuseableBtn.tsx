"use client";

import React from 'react'
import { Onest } from "next/font/google";
import { Button } from '@heroui/react';

const onest = Onest({
  subsets: ["latin"],
});
interface ReuseableBtnProps {
  text: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;

}


export const ReuseableBtn: React.FC<ReuseableBtnProps> = ({
  text,
  isLoading = false,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <div>
      <Button
        variant="solid"
        size="lg"
        radius="lg"
        type={type}
        isLoading={isLoading}
        spinnerPlacement="start"
        disabled={disabled || isLoading}
        className={`w-full bg-[#101F91] text-white text-base rounded-lg font-medium py-2 ${onest.className} ${className}`}
      >
        {text}
      </Button>
    </div>
  )
}

