"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const sideBarMenuData = [
    {
      id: "dashbaord",
      name: "Dashboard",
      icon: "/icons/sidebar/layout-dashboard.svg",
    },
    {
      id: "webTerminal",
      name: "Web Terminal",
      icon: "/icons/sidebar/terminal-2.svg",
    },
    {
      id: "projects",
      name: "Projects",
      icon: "/icons/sidebar/folder.svg",
    },
    {
      id: "billing",
      name: "Billing",
      icon: "/icons/sidebar/layout-list.svg",
    }
]

export function SideBarItems() {
    const { state } = useSidebar()
    return (
      <SidebarContent className={twMerge(state !== "collapsed" ? "px-2" : "px-0")}>
        <SidebarMenu>
          <SidebarGroup className="gap-1">
            <SidebarGroupLabel>Quick links / Shortcuts</SidebarGroupLabel>
            {
                sideBarMenuData.map((data)=>(
                    <SidebarMenuButton key={data.id}>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center shrink-0">
                            <Image
                                src={data.icon}
                                alt={data.name}
                                width={16}
                                height={16}
                            />
                            </div>

                            {state !== "collapsed" && (
                            <span className="text-sm font-normal leading-5 tracking-normal">
                                {data.name}
                            </span>
                            )}
                        </div>
                    </SidebarMenuButton>
                ))
            }
           
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
    )
}