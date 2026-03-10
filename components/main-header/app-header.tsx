"use client";

import { Bell, ChevronDown, InfoIcon, Moon, Search, ToolCase } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "../ui/input-group";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sun } from "lucide-react"
import { useTheme } from "next-themes"


export default function AppHeader() {
    const { setTheme } = useTheme()
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost">
                                <span>Production</span>
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="h-4.25 w-px bg-border block" />
                    <Button variant="ghost"><Bell className="w-4 h-4"/></Button>
                    <span className="h-4.25 w-px bg-border block" />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <span className="h-4.25 w-px bg-border block" />
                    <Button variant="ghost">
                        <span className="w-6 h-6 text-xs flex justify-center items-center bg-primary text-white">AC</span>
                        <span className="text-sm leading-5 tracking-normal font-medium">
                            Acme Corporation
                        </span>
                    </Button>
                </div>
            </div>
        </nav>
    )
}