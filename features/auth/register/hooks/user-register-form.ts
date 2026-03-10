"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, RegisterSchema } from "../schemas/register.schema"
import { toast } from "sonner"

export function useLoginForm() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(data: RegisterSchema) {
    toast.success("Login successful")
  }

  return {
    form,
    onSubmit,
  }
}