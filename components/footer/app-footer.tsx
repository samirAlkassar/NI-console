import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AppFooter () {
    return (
        <div className='bg-card w-full flex flex-col gap-6 rounded-xl border-t py-4 text-card-foreground sticky bottom-0'>
          <CardHeader>
            <CardTitle>
              Save All Changes
            </CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent className='flex gap-4'>
            <Button>Save All Changes</Button>
            <Button variant={"outline"}>Cancel</Button>
          </CardContent>
        </div>
    )
}