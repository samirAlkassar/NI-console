"use client"

import { FormProvider } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useLoginForm } from "../hooks/user-register-form"
import { RegisterFields } from "./register-fields"

export function RegisterForm() {
  const { form, onSubmit } = useLoginForm()

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <RegisterFields />

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </FormProvider>
  )
};