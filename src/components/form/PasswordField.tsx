"use client";
import React, { useState, ChangeEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@heroui/react";
import Link from "next/link";




interface PasswordInputProps {
  PasswordText: string;
  placeholderText: string;
  passwordError: string | null;
  handlePasswordChange: (value: string) => void;
  showForgotPassword?: boolean;
  forgotPasswordLink?: string;
}

const PasswordField: React.FC<PasswordInputProps> = ({
  passwordError,
  handlePasswordChange,
  PasswordText,
  placeholderText,
  showForgotPassword = false,
  forgotPasswordLink,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col space-y-1.5">
      <div className="flex items-center">
        <label htmlFor={PasswordText} className='text-sm text-color-gray-500 font-normal leading-5 font-local'>
          {PasswordText} <sup className="text-red-600">*</sup>
        </label>

        {showForgotPassword && (
          <Link
            href={forgotPasswordLink || "/auth/auth/forgot-password"}
            className="ml-auto inline-block text-sm text-muted-foreground underline"
          >
            Forgot password?
          </Link>
        )}
      </div>

      <Input
        placeholder={placeholderText}
        variant="bordered"
        // fullWidth is optional, but helps
        fullWidth
        classNames={{
          inputWrapper: [
            // keep the layout!
            "inline-flex w-full items-center gap-2",
            // your styles
            "border border-gray-500 rounded-md bg-white py-2 px-3",
            "data-[hover=true]:border-primary group-data-[focus=true]:border-primary",
            // make room on the right when there's an end icon
            "data-[has-end-content=true]:pe-3",
          ],
          input: "w-full text-black text-sm bg-transparent outline-none",
        }}
        isInvalid={!!passwordError}
        aria-label={PasswordText}
        errorMessage={passwordError || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handlePasswordChange(e.target.value)
        }
        size="lg"
        type={isVisible ? "text" : "password"}
        endContent={
          <button
            type="button"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            className="shrink-0 flex items-center justify-center"
          >
            {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
      />


    </div>
  );
};

export default PasswordField;
