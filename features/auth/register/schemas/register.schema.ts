import * as z from "zod"

export const registerSchema = z.object({
  name: z
    .string()
    .min(5, "Org Id must be at least 5 characters.")
    .max(32, "Org Id must be at most 32 characters."),

  email: z
    .string()
    .email("Invalid email address")
    .max(100),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100),

  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100),
})

export type RegisterSchema = z.infer<typeof registerSchema>