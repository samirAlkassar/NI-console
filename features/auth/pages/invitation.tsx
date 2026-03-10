import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BrandHeader from "@/features/auth/components/brand-header";
import { Building2, CheckCircle, Mail, XCircle } from "lucide-react";


export default function InvitationPage() {
    return (
         <main className="bg-muted gap-7 h-screen w-full flex flex-col items-center justify-center">
            <BrandHeader />
            <div className="w-full max-w-2xl">
                <Card className="py-6 px-2">
                    <CardHeader>
                        <span className="p-4 rounded-full bg-sidebar-accent mx-auto mb-3"><Mail className="text-primary"/></span>
                        <CardTitle>
                            <h2 className="text-center font-bold text-2xl leading-8">You've Been Invited!</h2>
                        </CardTitle>
                        <CardDescription>
                            <p className="text-center">You've been invited to join an organization on Nexuslgnite Console</p>
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="p-4 bg-muted flex items-start justify-start gap-4 mt-6">
                            <span className="p-2 bg-foreground">
                                <Building2 size={20} className="text-background"/>
                            </span>
                            <span className="flex flex-col">
                                <span className="text-muted-foreground text-sm font-medium leading-5">Organization</span>
                                <span className="text-foreground text-sm font-medium leading-5">Acme Corporation</span>
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 mt-6">
                            <span className="text-muted-foreground text-sm leading-8 font-medium">Invited by</span>
                            <div className="flex gap-3 items-center">
                                <span className="h-10 w-10 bg-primary rounded-full text-white flex items-center justify-center text-sm font-normal leading-5">SJ</span>
                                <span className="text-sm leading-8 font-medium">Sarah Johson</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-6 bg-warning-subtle p-3 border border-warning-border">
                            <span className="text-text-warning text-xs leading-8 font-normal">
                                This invitation expires on March 20, 2024
                            </span>
                        </div>
                    </CardContent>

                    <CardFooter className="mt-4">
                        <div className="grid grid-cols-2 w-full gap-3">
                            <Button variant={"outline"}>
                                <XCircle />
                                <span>Decline</span>
                            </Button>
                            <Button>
                                <CheckCircle />
                                <span>Accept Invitation</span>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <span className="text-center block text-muted-foreground text-xs leading-5">By accepting this invitation, you agree to the organization's terms and policies</span>
        </main>
    )
}