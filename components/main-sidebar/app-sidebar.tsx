"use client";

import {
  Sidebar,
  useSidebar,
} from "@/components/ui/sidebar"

import { SideBarItems } from "./sideBar-items";
import MainSiebarFooter from "./main-sidebar-footer";
import MainSidebarHeader from "./main-sidebar-header";
import { twMerge } from "tailwind-merge";


export function AppSidebar() {
  const {state} = useSidebar();
  return (
    <Sidebar collapsible="icon" className={twMerge(state === "collapsed" ? "p-0" : "p-2", "bg-sidebar")}>
      <MainSidebarHeader />
      <SideBarItems />
      <MainSiebarFooter />
    </Sidebar>
  )
}