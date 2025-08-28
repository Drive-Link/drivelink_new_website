"use client"

import type React from "react"
import { useState } from "react"
import { Checkbox, Button } from "@heroui/react"
import { createSchema, showToast, useField } from "@/lib"
import { FormField, PasswordField } from "../../form"
import { ReuseableFormHead } from "./ReuseableFormHead"
import { useRouter } from "next/navigation"
import { Onest } from "next/font/google";
import { useTransition } from "react";



const onest = Onest({
  subsets: ["latin"],
});

interface LoginFormProps {
  onForgotPassword: () => void
}

export const EmailSchema = createSchema((value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}, "Please enter a valid email address");

export const PasswordSchema = createSchema(
  (value) => value.length >= 4,
  "Password must be at least 4 characters"
);

export function LoginForm({ onForgotPassword }: LoginFormProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [rememberMe, setRememberMe] = useState(false)

  const { value: email, error: emailError, handleChange: handleEmailChange } = useField("", EmailSchema);
  const {
    value: password,
    error: passwordError,
    handleChange: handlePasswordChange,
  } = useField("", PasswordSchema);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_address: email, password }),
      });

      const data = await res.json();

      sessionStorage.setItem("AdminData", JSON.stringify(data?.data?.user || {}));

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setIsSubmitting(false);
        return;
      }

      startTransition(() => {
        router.push("/admin/dashboard");
      });
    } catch (err) {
      setError("Network error, please try again.");
      setIsSubmitting(false);
    }
  };


  return (
    <div className="w-full max-w-md space-y-8">

      {/* Header */}
      <ReuseableFormHead
        title="Log in"
        subTitle="Welcome back! Please enter your details."
        className="text-start" />

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-6">

        <div className="space-y-2">
          {error && (
            <div className="p-2 text-sm text-red-600 bg-red-100 border border-red-300 rounded">
              {error}
            </div>
          )}
          <FormField
            label="Email address"
            id="email"
            type="email"
            htmlFor="email"
            variant=""
            size="lg"
            placeholder=""
            value={email}
            onChange={handleEmailChange}
            isInvalid={!!emailError}
            errorMessage={emailError}
          />
        </div>

        <div className="space-y-2">
          <PasswordField
            PasswordText="Password"
            placeholderText=""
            passwordError={passwordError}
            handlePasswordChange={handlePasswordChange}
          />


        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              aria-label="remember-me-checkbox"
              size="sm"
              radius="sm"
              id="remember"
              isSelected={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              classNames={{
                base: "w-5 h-5",
                label: "text-sm",
                icon: "w-3 h-3"
              }}
            />
            <label htmlFor="remember" className="ml-1 text-color-gray-500 font-normal text-base leading-6 font-local">
              Remember for 30 days
            </label>
          </div>
          <button type="button" onClick={onForgotPassword}
            className="cursor-pointer font-normal leading-6 font-local text-sm text-color-purple-700">
            Forgot password
          </button>
        </div>

        <Button
          variant="solid"
          size="lg"
          radius="lg"
          type="submit"
          isLoading={isSubmitting || isPending}
          spinnerPlacement="start"
          className={`mt-2 w-full bg-[#101F91] text-white text-base 
            rounded-lg font-medium py-2 ${onest.className}`}
        >
          Sign in
        </Button>


        <Button
          type="button"
          variant="bordered"
          className="w-full flex items-center justify-center
           space-x-2 bg-transparent border border-gray-500 rounded-md py-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Sign in with Google</span>
        </Button>
      </form>

      {/* Footer */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
