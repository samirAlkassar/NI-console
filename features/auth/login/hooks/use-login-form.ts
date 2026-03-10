"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginSchema } from "../schemas/login.schema"
import { toast } from "sonner"

export function useLoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      orgId: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(data: LoginSchema) {
    toast.success("Login successful")
  }

  return {
    form,
    onSubmit,
  }
}