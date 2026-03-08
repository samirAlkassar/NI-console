import { InfoIcon, Search, ToolCase } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { Input } from "../ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "../ui/input-group";
import { Button } from "@radix-ui/themes";

export default function AppHeader() {
    return (
        <nav className="w-full px-6 h-12.5 border-b border-border">
            <div className="flex gap-2 items-center justify-between h-full">
                <div className="flex gap-2 items-center justify-center">
                    <SidebarTrigger />
                    <span className="h-4.25 w-px bg-border block" />
                </div>

                <InputGroup className="max-w-xs border border-border">
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                        ⌘ K
                    </InputGroupAddon>
                </InputGroup>

                <div className="flex items-center justify-center gap-2">
                    <span className="h-4.25 w-px bg-border block" />
                    <Button>
                        <span className="text-sm leading-5 tracking-normal font-medium">
                            Current Project Name
                        </span>
                    </Button>
                </div>
            </div>
        </nav>
    )
}