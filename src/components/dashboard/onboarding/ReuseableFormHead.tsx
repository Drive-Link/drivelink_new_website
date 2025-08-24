import React from "react";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
});

interface ReuseableFormHeadProps {
  title: string;
  subTitle: string;
  className?: string;
}

export const ReuseableFormHead = ({
  title,
  subTitle,
  className = "",
}: ReuseableFormHeadProps) => {
  return (
    <div className={`space-y-2 ${onest.className} ${className}`}>
      <h1 className="text-2xl lg:text-[36px] text-color-gray-900 font-semibold leading-11">
        {title}
      </h1>
      <p className="text-color-gray-500 font-normal text-base leading-6 font-local">{subTitle}</p>
    </div>
  );
};
