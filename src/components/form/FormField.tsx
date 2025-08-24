'use client'

import React, { ChangeEvent } from 'react'
import { Input } from '@heroui/react'

import { cn } from '@heroui/react'


interface FormFieldProps {
  label: string
  htmlFor: string
  type: string
  id: string
  variant: string
  isInvalid: boolean
  errorMessage: string
  size: string
  startcnt?: React.ReactNode
  placeholder: string
  reqValue?: string
  value?: any;
  onChange: (value: string) => void
  required?: boolean
  height?: string
  readOnly?: boolean
  maxLen?: number
  minLen?: number
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  type,
  id,
  isInvalid,
  errorMessage,
  placeholder,
  startcnt,
  onChange,
  reqValue,
  required,
  value,
  height,
  readOnly,
  maxLen,
  minLen
}) => {
  const inputStyles: React.CSSProperties = height
    ? { height: `${height}px` }
    : {}

  return (
    <div className="flex flex-col space-y-1.5">
      <label
        htmlFor={htmlFor}
        className='text-sm text-color-gray-500 font-normal leading-5 font-local'
      >
        {label} <sup className="text-red-600">*</sup>
      </label>

      <Input
        type={type}
        id={id}
        variant="bordered"
        style={inputStyles}
        classNames={{
          input: [
            cn(
              "appearance-none focus:outline-none user-select-none text-black text-sm"
            ),
          ],
          inputWrapper: [
            // ✅ base border
            "border border-gray-500 rounded-md bg-white py-2 user-select-none",
            // ✅ hover + focus states
            "data-[hover=true]:border-primary group-data-[focus=true]:border-primary",
            "data-[has-start-content=true]:ps-3",
          ],
          innerWrapper: ["px-2 data-[has-start-content=true]:ps-3"],
        }}
        size="lg"
        radius="sm"
        required={required}
        placeholder={placeholder}
        startContent={startcnt}
        maxLength={maxLen}
        minLength={minLen}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        readOnly={readOnly}
      />

      {isInvalid && (
        <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  )
}

export default FormField
