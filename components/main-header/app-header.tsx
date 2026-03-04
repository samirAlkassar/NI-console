import { InfoIcon, Search, ToolCase } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { Input } from "../ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "../ui/input-group";
import { RiToolsLine } from "@remixicon/react";
import { Button } from "@radix-ui/themes";

export default function () {
    return (
        <nav className="w-full px-6 py-2 border-b border-border mt-2">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center justify-center">
                    <SidebarTrigger />
                    <span className="h-4.25 w-px bg-border block" />
                    <span className="text-muted-foreground py-0.5 px-1.5 border border-border bg-input-background flex items-center justify-center gap-1">
                        <RiToolsLine size={12}/>
                        <span className="text-xs leading-4 tracking-normal font-medium">Admin Tools</span>
                    </span>
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