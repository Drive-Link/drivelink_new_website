"use client"

import { Button } from "@heroui/react"
import { Mail } from "lucide-react"
import { ReuseableFormHead } from "./ReuseableFormHead"
import { ReuseableBtn } from "./ReuseableBtn"

interface CheckEmailFormProps {
  onOpenEmail: () => void
}

export function CheckEmailForm({ onOpenEmail }: CheckEmailFormProps) {
  return (
    <div className="w-full max-w-md space-y-6">

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
          <Mail className="w-8 h-8 text-indigo-600" />
        </div>
      </div>

      {/* Header */}
      <ReuseableFormHead
        title="Check your email"
        subTitle="We sent a password reset link to your email."
        className="text-center"
      />

      {/* Action */}
      <div className="space-y-4">
        <ReuseableBtn
          text="Open email app"
          type="submit"
          isLoading={false}
          className="mt-2"
        />

        <div className="text-center">
          <p className="text-sm text-color-gray-500 font-normal leading-5 font-local">
            Didn't receive the email?{" "}
            <button className="cursor-pointer font-normal leading-6 font-local text-sm text-color-purple-700">Click to resend</button>


          </p>
        </div>
      </div>
    </div>
  )
}
