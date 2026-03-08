"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { ComponentType } from "react";
import { SideMenuButton, SideMenuButtonContent } from "../SideMenuButton";


interface SidebarMneuGroupType {
    label: string;
    menuItems: {
        id: string,
        label: string,
        icon: ComponentType<{ className?: string }>
    }[];
    activeSidebarTab: string;
    setActiveSidebarTab: (value: any)=>void;
}

export default function SidebarMenuGroup ({label, menuItems, activeSidebarTab, setActiveSidebarTab} : SidebarMneuGroupType) {
    return (
        <SidebarMenu className="p-2">
          <SidebarGroup className="gap-1 p-0">
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            {
                menuItems.map((data)=>(
                    <SideMenuButton 
                        key={data.id} 
                        id={data.id}
                        onClick={() => setActiveSidebarTab(data.id)}
                        active={activeSidebarTab}
                        variant="mainSidebar">
                        <SideMenuButtonContent>
                            <SideMenuButton.Icon icon={data.icon} />
                            <SideMenuButton.Label collapseText={true}>{data.label}</SideMenuButton.Label>
                        </SideMenuButtonContent>
                    </SideMenuButton>
                ))
            }
          </SidebarGroup>
        </SidebarMenu>
    )
}