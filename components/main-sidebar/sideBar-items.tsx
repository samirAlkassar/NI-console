import {
  SidebarContent,
  useSidebar,
} from "@/components/ui/sidebar"
import { BookOpen, Bot, Container, FlaskConical, Layers, ScrollText, Settings2, ShieldCheck, Terminal } from "lucide-react";
import SidebarMenuGroup from "./sidebar-menu-group";

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
    return (
      <SidebarContent className="gap-2">
        <SidebarMenuGroup label="Quick links / Shortcuts" menuItems={quickLinks}/>
        <SidebarMenuGroup label="Admin Tools" menuItems={adminTools}/>
        <SidebarMenuGroup label="Services" menuItems={services}/>
        <SidebarMenuGroup label="Development" menuItems={development}/>
      </SidebarContent>
    )
}