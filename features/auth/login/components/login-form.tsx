"use client"

import { FormProvider } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useLoginForm } from "../hooks/use-login-form"
import { LoginFields } from "./login-fields"
import type { LoginSchema } from "../schemas/login.schema"

interface LoginFormProps {
  onSubmit?: (data: LoginSchema) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const { form, onSubmit: internalSubmit } = useLoginForm()

  const submitHandler = (data: LoginSchema) => {
    internalSubmit(data)        // call the original submit logic
    if (onSubmit) onSubmit(data) // call the test/mock if provided
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
        <LoginFields />

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </FormProvider>
  )
}