"use client"

import { FormProvider } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useLoginForm } from "../hooks/use-login-form"
import { LoginFields } from "./login-fields"

export function LoginForm() {
  const { form, onSubmit } = useLoginForm()

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <LoginFields />

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </FormProvider>
  )
};