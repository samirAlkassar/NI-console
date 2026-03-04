"use client";

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { User2 } from "lucide-react"
import Image from "next/image"
import { SideBarItems } from "./sideBar-items";
import { twMerge } from "tailwind-merge";


export function AppSidebar() {
  const { state } = useSidebar()
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={twMerge(state !== "collapsed" ? "m-2" : "m-0")}>

        <div className="flex items-center gap-2">
          <div className="flex rounded-none h-8 w-8 items-center justify-center bg-card-foreground shrink-0">
            <Image
              src="/brand/NI-Mark.svg"
              alt="NexusIgnite"
              width={18}
              height={18}
            />
          </div>

          {state !== "collapsed" && (
            <span className="font-bold text-base leading-6 tracking-normal">
              NexusIgnite Console
            </span>
          )}
       </div>

      </SidebarHeader>

      
      <SideBarItems />



      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User2 /> Username
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}