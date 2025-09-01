"use client"

import { Button } from "@heroui/react"
import { CheckCircle } from "lucide-react"

interface PasswordResetSuccessProps {
  onBackToLogin: () => void
}

export function PasswordResetSuccess({ onBackToLogin }: PasswordResetSuccessProps) {
  return (
    <div className="w-full max-w-md space-y-6">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">D</span>
        </div>
        <span className="text-xl font-semibold text-gray-900">Drivelink</span>
      </div>

      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
      </div>

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Password reset</h1>
        <p className="text-gray-600">Your password has been successfully reset. Click below to log in magically.</p>
      </div>

      {/* Action */}
      <div className="space-y-4">
        <Button onClick={onBackToLogin} className="w-full bg-indigo-600 hover:bg-indigo-700">
          Continue
        </Button>
      </div>
    </div>
  )
}
