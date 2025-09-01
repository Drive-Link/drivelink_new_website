"use client";

import { useState } from "react";
import { ZodError, ZodType } from "zod";

export const useField = (initialValue: string, validationSchema: ZodType) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    try {
      validationSchema.parse(newValue);
      setError("");
    } catch (validationError) {
      if (validationError instanceof ZodError) {
        setError(validationError.issues[0]?.message || "Validation error");
      }
    }
  };

  const reset = () => {
    setValue(initialValue);
    setError("");
  };

  return { value, error, handleChange, reset };
};
