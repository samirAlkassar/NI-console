"use client"

import { Controller, useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field"
import Link from "next/link"

export function LoginFields() {
  const { control } = useFormContext()

  return (
    <FieldGroup data-testid="login-form">
      <Controller
        name="orgId"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Org Id (Realm)</FieldLabel>
            <Input {...field} placeholder="Org Id" />
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Email</FieldLabel>
            <Input {...field} type="email" placeholder="m@example.com" />
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>
              <div className="flex justify-between w-full">
                <span>Password</span>
                <Link href="#">Forgot password?</Link>
              </div>
            </FieldLabel>

            <Input {...field} type="password" data-testid="password-input"/>

            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  )
}