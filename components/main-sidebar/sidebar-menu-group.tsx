"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"
import { ComponentType } from "react";

interface SidebarMneuGroupType {
    label: string;
    menuItems: {
        id: string,
        label: string,
        icon: ComponentType<{ className?: string }>
    }[];
}

export default function SidebarMenuGroup ({label, menuItems} : SidebarMneuGroupType) {
    const {state} = useSidebar();
    return (
        <SidebarMenu className="p-2">
          <SidebarGroup className="gap-1 p-0">
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            {
                menuItems.map((data)=>(
                    <SidebarMenuButton key={data.id} className="rounded-none">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center shrink-0">
                              <data.icon className="size-4"/>
                            </div>

                            {state !== "collapsed" && (
                            <span className="text-sm font-normal leading-5 tracking-normal">
                                {data.label}
                            </span>
                            )}
                        </div>
                    </SidebarMenuButton>
                ))
            }
          
          </SidebarGroup>
        </SidebarMenu>
    )
}