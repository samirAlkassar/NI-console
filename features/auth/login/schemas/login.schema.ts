import * as z from "zod"

export const loginSchema = z.object({
  orgId: z
    .string()
    .min(5, "Org Id must be at least 5 characters.")
    .max(32, "Org Id must be at most 32 characters."),

  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email must be at most 100 characters"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be at most 100 characters")
})

export type LoginSchema = z.infer<typeof loginSchema>