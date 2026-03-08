"use client";

import {
  SidebarContent,
} from "@/components/ui/sidebar"
import { BookOpen, Bot, Container, FlaskConical, Layers, ScrollText, Settings2, ShieldCheck, Terminal } from "lucide-react";
import SidebarMenuGroup from "./sidebar-menu-group";
import { useState } from "react";

const quickLinks = [
  { id: "terminal", label: "Terminal", icon: Terminal },
  { id: "bot", label: "Bot", icon: Bot },
  { id: "docs", label: "Documentation", icon: BookOpen },
  { id: "settings", label: "Settings", icon: Settings2 },
];

const adminTools = [
  { id: "iamConsole", label: "IAM Console", icon: ShieldCheck },
  { id: "workspaces", label: "Workspaces", icon: Layers },
  { id: "audit", label: "Audit", icon: ScrollText },
];

const services = [
  { id: "kubernetes", label: "Kubernetes", icon: Container},
];

const development = [
  { id: "testFlows", label: "Test Flows", icon: FlaskConical },
];

export function SideBarItems() {
  const [activeSidebarTab, setActiveSidebarTab] = useState<string>("terminal")
  return (
    <SidebarContent className="gap-2">
      <SidebarMenuGroup 
        label="Quick links / Shortcuts" 
        menuItems={quickLinks}
        activeSidebarTab={activeSidebarTab}
        setActiveSidebarTab={setActiveSidebarTab}
        />

      <SidebarMenuGroup 
        label="Admin Tools" 
        menuItems={adminTools}
        activeSidebarTab={activeSidebarTab}
        setActiveSidebarTab={setActiveSidebarTab}/>

      <SidebarMenuGroup 
        label="Services" 
        menuItems={services}
        activeSidebarTab={activeSidebarTab}
        setActiveSidebarTab={setActiveSidebarTab}/>

      <SidebarMenuGroup 
        label="Development"
        menuItems={development}
        activeSidebarTab={activeSidebarTab}
        setActiveSidebarTab={setActiveSidebarTab}/>
    </SidebarContent>
  )
}