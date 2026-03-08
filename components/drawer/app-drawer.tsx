import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Controller } from "react-hook-form"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "../ui/input-group"
import { CardContent } from "../ui/card"
import { X } from "lucide-react"

export default function AppDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="default">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <div className="w-full flex items-center justify-between">
              <p className="text-base font-normal leading-6 tracking-normal">Edit Profile</p>
              <DrawerClose asChild>
                <Button variant="ghost"><X /></Button>
              </DrawerClose>
            </div>
          </DrawerTitle>
          <DrawerDescription>Make changes to your profile here. Click save when you're done.</DrawerDescription>
        </DrawerHeader>

        <CardContent className="space-y-4">
          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Name</FieldLabel>
            <Input id="input-demo-api-key" type="text" placeholder="Name"/>
          </Field>
          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Username</FieldLabel>
            <Input id="input-demo-api-key" type="text" placeholder="Username" />
          </Field>
        </CardContent>

        <DrawerFooter>
          <Button>Save Changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
