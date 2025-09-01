"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@heroui/react"
import { PasswordSchema } from "./LoginForm"
import { useField } from "@/lib"
import { PasswordField } from "@/components/form"
import { ReuseableBtn } from "./ReuseableBtn"
import { ReuseableFormHead } from "./ReuseableFormHead"


interface ResetPasswordFormProps {
  onSubmit: () => void
}

export function ResetPasswordForm({ onSubmit }: ResetPasswordFormProps) {
  const {
    value: password,
    error: passwordError,
    handleChange: handlePasswordChange,
  } = useField("", PasswordSchema);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (confirmPassword && confirmPassword !== password) {
      setConfirmError("Passwords do not match");
    } else {
      setConfirmError(null);
    }

    setIsDisabled(!password || !!passwordError || !!confirmError);
  }, [password, passwordError, confirmPassword, confirmError]);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    console.log("New password set")
    onSubmit()
  }

  return (
    <div className="w-full max-w-md space-y-6">
      <ReuseableFormHead
        title="Set new password"
        subTitle="Your new password must be different from previous used passwords."
        className="text-start" />


      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <PasswordField
            PasswordText="Create New Password"
            placeholderText="Create new password"
            passwordError={passwordError}
            handlePasswordChange={handlePasswordChange}
          />


        </div>

        <div className="space-y-2">
          <PasswordField
            PasswordText="Confirm New Password"
            placeholderText="Confirm new password"
            passwordError={confirmError}
            handlePasswordChange={setConfirmPassword}
          />
        </div>

        <ReuseableBtn
          text="Update password"
          type="submit"
          isLoading={false}
          className="mt-2"
        />


      </form>
    </div>
  )
}
