import { LayoutDashboard, Users, UsersRound, Shield, FileText, Layers, ScrollText, Key, Layers3 } from "lucide-react";
import { SideMenuButton, SideMenuButtonContent } from "../SideMenuButton";
import { useState } from "react";


interface SecondaryNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function AppSubSidebar({ currentView, onNavigate }: SecondaryNavProps) {
  const [activeSubSidebarTab, setActiveSubSidebarTab] = useState<string>("dashboard")
  const navItems = [
    { id: "dashboard", label: "Dashboard", shortcut: "⇧⌘P", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "groups", label: "Groups", icon: UsersRound },
    { id: "roles", label: "Roles", icon: Shield },
    { id: "policies", label: "Policies", icon: FileText },
    { id: "work-spaces", label: "Workspaces", icon: Layers3 },
    { id: "audit-logs", label: "Audit Logs", icon: ScrollText },
  ];

  return (
    <div className="bg-background flex flex-col items-start min-w-51 h-full border-r border-border">
      <div className="w-full flex items-center px-3 py-2">
          <span className="flex-1 text-[11px] uppercase tracking-wide text-[#737373] dark:text-[#a3a3a3]">
            IAM Console
          </span>
      </div>

      <div className="w-full pt-1 px-1">
        {navItems.map((data) => (
          <SideMenuButton 
            key={data.id} 
            id={data.id} 
            variant="subSidebar" 
            active={activeSubSidebarTab}
            onClick={() => setActiveSubSidebarTab(data.id)}>
              <SideMenuButtonContent>
                  <SideMenuButton.Icon variant="muted" icon={data.icon} />
                  <SideMenuButton.Label >{data.label}</SideMenuButton.Label>
              </SideMenuButtonContent>
              {data.shortcut &&
                <SideMenuButton.Shortcut>{data.shortcut}</SideMenuButton.Shortcut>
              }
          </SideMenuButton>
        ))}
      </div>
    </div>
  );
}
