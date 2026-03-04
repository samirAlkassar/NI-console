"use client";

import {
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image";

export default function MainSidebarHeader() {
    const {state} = useSidebar();
    return (
    <SidebarHeader className="p-0">
        <div className="flex items-center gap-2 p-1.5">
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
    )
}