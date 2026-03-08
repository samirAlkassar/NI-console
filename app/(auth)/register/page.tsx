"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as React from "react"
import * as z from "zod"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";


const formSchema = z.object({
    name: z
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
    confirmPassword: z
        .string()
        .min(8, "Password must be at least 20 characters.")
        .max(100, "Password must be at most 100 characters."),
})

export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
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
            <div className="grid md:grid-cols-2 h-screen">
                <div className="p-10 gap-6">
                    <nav>
                        <div className="flex items-center gap-2">
                            <div className="flex rounded-none h-6 w-6 items-center justify-center bg-card-foreground shrink-0">
                                <Image
                                    src="/brand/NI-Mark.svg"
                                    alt="NexusIgnite"
                                    width={18}
                                    height={18}
                                />
                            </div>
                            <span className="font-medium text-base leading-6 tracking-normal">
                                NexusIgnite Console
                            </span>
                        </div>
                    </nav>
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
                                        name="name"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor="form-rhf-demo-name">
                                                    Full Name
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="form-rhf-demo-name"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="John Doe"
                                                    autoComplete="on"
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
                                                    autoComplete="on"
                                                    type="email"
                                                />
                                                <FieldDescription>
                                                    We'll use this to contact you. We will not share your email with anyone else.
                                                </FieldDescription>
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
                                                    Password
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="form-rhf-demo-password"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder=""
                                                    autoComplete="off"
                                                    type="password"
                                                />
                                                <FieldDescription>
                                                    Must be at least 8 characters long.
                                                </FieldDescription>
                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />

                                    <Controller
                                        name="confirmPassword"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor="form-rhf-demo-confirm-password">
                                                    Confirm Password
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="form-rhf-demo-confirm-password"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder=""
                                                    autoComplete="off"
                                                    type="password"
                                                />
                                                <FieldDescription>
                                                    Must be at least 8 characters long.
                                                </FieldDescription>
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
                                    Create Account
                                </Button>
                                <FieldSeparator>
                                    <span className="text-sm uppercase">or contiune with</span>
                                </FieldSeparator>
                                <div className="gap-3 flex flex-col">
                                    <Button variant={"outline"}>
                                        <img src="/icons/socials/Github icon.svg" alt="app-social-button" />
                                        <span>Github</span>
                                    </Button>
                                    <span className="font-normal text-sm leading-5 tracking-normal text-center text-muted-foreground">Already have an account?
                                        <Link href={"/login"} className="underline"> Sign in</Link>
                                    </span>
                                </div>

                            </FieldGroup>
                        </CardFooter>
                    </Card>
                </div>
                <div className="hidden md:flex bg-login-slash items-center justify-center relative h-full">
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