import GithubIcon from "@/components/icons/Github";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FieldGroup, FieldSeparator } from "@/components/ui/field";
import Link from "next/link";

export function AuthCard({ title, description, children }: { title: string; description: string; children: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <Card className="max-w-96 mx-auto shadow-none border-none p-4">
      <CardHeader>
        <CardTitle><h2 className="font-bold text-2xl text-center">{title}</h2></CardTitle>
        <CardDescription><p className="text-sm text-center">{description}</p></CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <FieldGroup>
          <FieldSeparator>
            <span className="text-sm uppercase">
              or contiune with
            </span> 
          </FieldSeparator>
          <div className="gap-3 flex flex-col">
            <Button variant={"outline"}> 
              <GithubIcon /> 
              <span>Github</span>
            </Button>
            <span className="font-normal text-sm leading-5 tracking-normal text-center text-muted-foreground">
              Already have an account? 
              <Link href={"/login"} className="underline"> 
                Sign in
              </Link>
            </span>
          </div>
        </FieldGroup>
      </CardFooter>
    </Card>
  );
}