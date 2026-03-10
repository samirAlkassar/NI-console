import AppleIcon from "@/components/icons/Apple"
import GoogleIcon from "@/components/icons/Google"
import MetaIcon from "@/components/icons/Meta"
import { Button } from "@/components/ui/button"

export function SocialLogin() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <Button variant="outline">
        <AppleIcon />
      </Button>

      <Button variant="outline">
        <GoogleIcon />
      </Button>

      <Button variant="outline">
        <MetaIcon />
      </Button>
    </div>
  )
}