import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/features/auth/login/components/login-form";
import { SocialLogin } from "@/features/auth/login/components/social-login";
import { FieldGroup, FieldSeparator } from "@/components/ui/field";
import Link from "next/link";

export default function LoginCard() {
    return (
        <Card className="p-8">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Welcome back</CardTitle>
                <CardDescription className="text-center">
                    Login to your Acme Inc account
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
                <LoginForm />
            </CardContent>
            <CardFooter>
                <FieldGroup>
                    <FieldSeparator>
                        <span className="text-sm uppercase">or contiune with</span>
                    </FieldSeparator>
                    <SocialLogin />
                    <span className="font-normal text-sm leading-5 tracking-normal text-center text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href={"/register"} className="underline">
                            {" "}
                            Sign up
                        </Link>{" "}
                    </span>
                </FieldGroup>
            </CardFooter>
        </Card>
    );
}
