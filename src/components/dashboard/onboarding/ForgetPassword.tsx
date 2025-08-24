"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { EmailSchema } from "./LoginForm"
import { useField } from "@/lib"
import { FormField } from "../../form"
import { ReuseableFormHead } from "./ReuseableFormHead"
import { ReuseableBtn } from "./ReuseableBtn"

interface ForgotPasswordFormProps {
  onBack: () => void
  onSubmit: () => void
}

export function ForgotPasswordForm({ onBack, onSubmit }: ForgotPasswordFormProps) {
  const { value: email, error: emailError, handleChange: handleEmailChange } = useField("", EmailSchema);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Password reset request for:", email)
    onSubmit()
  }

  return (
    <div className="w-full max-w-md space-y-6">

      <ReuseableFormHead
        title="Forget Password?"
        subTitle="No worries, we&apos;ll send you reset instructions."
        className="text-center"
      />

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <FormField
            label="Email address"
            id="email"
            type="email"
            htmlFor="email"
            variant=""
            size="lg"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            isInvalid={!!emailError}
            errorMessage={emailError}
          />
        </div>

        <div>
          <ReuseableBtn
            text="Reset password"
            type="submit"
            isLoading={false}
            className="my-2 w-full"
          />

          {/* Back button centered */}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={onBack}
              className="mt-2 inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to login</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
