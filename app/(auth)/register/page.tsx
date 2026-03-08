"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as React from "react"
import * as z from "zod"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const formSchema = z.object({
  orgId: z
    .string()
    .min(5, "Bug Org Id must be at least 5 characters.")
    .max(32, "Bug Org Id must be at most 32 characters."),
  email: z
    .string()
    .min(10, "Email must be at least 20 characters.")
    .max(100, "Email must be at most 100 characters."),
  password: z
    .string()
    .min(8, "Password must be at least 20 characters.")
    .max(100, "Password must be at most 100 characters."),
})

export default function Register () {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        orgId: "",
        email: "",
        password: ""
        },
    })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("Login Successfully", {
      description: (
        <div className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-foreground">
          <span>{"Login Successfully"}</span>
        </div>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }


    return (
        <main className="h-screen w-full">
            <div className="grid grid-cols-2">
                <div className="p-10">                
                    <Card className="max-w-96 mx-auto shadow-none border-none">
                        <CardHeader>
                            <CardTitle>
                                <h2 className="font-bold text-2xl leading-8 tracking-normal text-center">Create an account</h2>
                            </CardTitle>
                            <CardDescription>
                                <p className="text-sm leading-5 tracking-normal font-normal text-center">Fill in the form below to create your account.</p>
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                                <FieldGroup>
                                    <Controller
                                    name="orgId"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-orgId">
                                            Org Id (Realm)
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-orgId"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Org Id"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                        </Field>
                                    )}
                                    />

                                    <Controller
                                    name="email"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-email">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="m@example.com"
                                            autoComplete="off"
                                            type="email"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                        </Field>
                                    )}
                                    />

                                    <Controller
                                    name="password"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-password">
                                            <div className="flex justify-between w-full">
                                                <span>Password</span>
                                                <Link href={"#"} className="underline">Forgot password?</Link>
                                            </div>
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="m@example.com"
                                            autoComplete="off"
                                            type="password"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                        </Field>
                                    )}
                                    />
                                    
                                </FieldGroup>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <FieldGroup>
                                <Button type="submit" form="form-rhf-demo">
                                    Login
                                </Button>
                                <FieldSeparator>
                                    <span className="text-sm uppercase">or contiune with</span>
                                </FieldSeparator>
                                <div className="grid grid-cols-3 gap-4">
                                    <Button variant={"outline"}>
                                        <img src="/icons/socials/Apple icon.svg" alt="app-social-button" />
                                    </Button>
                                    <Button variant={"outline"}>
                                        <img src="/icons/socials/Google icon.svg" alt="app-social-button" />
                                    </Button>
                                    <Button variant={"outline"}>
                                        <img src="/icons/socials/Meta icon.svg" alt="app-social-button" />
                                    </Button>
                                </div>
                                <span className="font-normal text-sm leading-5 tracking-normal text-center">Don't have an account?
                                    <Link href={"#"} className="font-normal text-sm leading-5 tracking-normal underline"> Sign up</Link>
                                </span>
                            </FieldGroup>
                        </CardFooter>
                    </Card>
                </div>
                <div className="bg-login-slash flex items-center justify-center relative h-screen">
                    <Image
                        src="/brand/NI-logo-full.svg"
                        alt="NI Logo"
                        width={200}
                        height={60}
                        priority
                    />
                </div>
            </div>
        </main>
    )
}