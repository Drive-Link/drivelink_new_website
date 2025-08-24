"use client"

import { useState } from "react"
import {
  LoginForm, ForgotPasswordForm, CheckEmailForm,
  ResetPasswordForm, PasswordResetSuccess,
  Logo
} from "@/components"
import { Image } from "@heroui/react"
import { Onest } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react"



const onest = Onest({
  subsets: ["latin"],
});



type OnboardingStep = "login" | "forgot-password" | "check-email" | "reset-password" | "success"

export default function OnboardingView() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("login")

  const stepTitles = {
    login: "Welcome to your new dashboard",
    "forgot-password": "Reset your password",
    "check-email": "Check your email",
    "reset-password": "Create new password",
    success: "Password reset",
  }

  const stepSubtitles = {
    login: "Sign in to explore changes we've made.",
    "forgot-password": "Enter your email to receive reset instructions.",
    "check-email": "We've sent a reset link to your email.",
    "reset-password": "Enter your new password below.",
    success: "Your password has been successfully reset.",
  }

  const getCurrentStepIndex = () => {
    const steps: OnboardingStep[] = ["login", "forgot-password", "check-email", "reset-password", "success"]
    return steps.indexOf(currentStep)
  }

  const renderCurrentForm = () => {
    switch (currentStep) {
      case "login":
        return <LoginForm onForgotPassword={() => setCurrentStep("forgot-password")} />
      case "forgot-password":
        return (
          <ForgotPasswordForm onBack={() => setCurrentStep("login")} onSubmit={() => setCurrentStep("check-email")} />
        )
      case "check-email":
        return <CheckEmailForm onOpenEmail={() => setCurrentStep("reset-password")} />
      case "reset-password":
        return <ResetPasswordForm onSubmit={() => setCurrentStep("success")} />
      case "success":
        return <PasswordResetSuccess onBackToLogin={() => setCurrentStep("login")} />
      default:
        return <LoginForm onForgotPassword={() => setCurrentStep("forgot-password")} />
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Dashboard preview with background */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/dashboard/21.png)" }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #101F91, #0C111D)",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/dashboard/bg-abstract.png"
              alt="Preview-of-a-dashboard"
            />
          </div>
          <div className={`mt-8 text-center ${onest.className}`}>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              {stepTitles[currentStep]}
            </h2>
            <p className="text-white">
              {stepSubtitles[currentStep]}
            </p>
          </div>



          <div className="flex items-center space-x-4 mt-8">
            {/* Left Chevron */}
            <button
              onClick={() => setCurrentStep(prev => {
                const steps: OnboardingStep[] = ["login", "forgot-password", "check-email", "reset-password", "success"]
                const idx = steps.indexOf(prev)
                return steps[Math.max(idx - 1, 0)]
              })}
              className="p-2 text-white/70 hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Step Indicators */}
            <div className="flex space-x-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === getCurrentStepIndex() ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>

            {/* Right Chevron */}
            <button
              onClick={() => setCurrentStep(prev => {
                const steps: OnboardingStep[] = ["login", "forgot-password", "check-email", "reset-password", "success"]
                const idx = steps.indexOf(prev)
                return steps[Math.min(idx + 1, steps.length - 1)]
              })}
              className="p-2 text-white/70 hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>

      {/* Right side - Dynamic form based on current step */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white p-8">

        <div className="flex justify-start items-center lg:ps-[17.5%]">
          <Logo />
        </div>


        <div className="flex flex-1 items-center justify-center">
          {renderCurrentForm()}
        </div>
      </div>
    </div>
  )
}
