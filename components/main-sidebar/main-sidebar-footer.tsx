import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { EllipsisVertical } from "lucide-react"
import { twMerge } from "tailwind-merge";


export default function MainSiebarFooter () {
    const {state} = useSidebar();
    return (
        <SidebarFooter className="dark:bg-[#171717] p-0">
            <SidebarMenu className="p-2">
                <SidebarMenuItem className={twMerge("space-x-2 flex items-center justify-between",
                    state === "collapsed" ? "p-0" : "p-2"
                )}>
                    <img
                        alt="User"
                        className="size-8 object-cover shrink-0"
                        src={"/images/circle.png"}
                    />
                    {state !== "collapsed" && 
                    <>
                        <div className="flex flex-col gap-0.5 group-data-[collapsible=icon]:hidden min-w-0 w-full">
                            <span className="text-sm leading-5 font-normal tracking-normal text-sidebar-foreground">John Doe</span>
                            <span className="text-xs leading-4 font-normal tracking-normal text-sidebar-foreground">john@example.com</span>
                        </div>
                        <button className="w-4 h-4 flex items-center justify-center">
                            <EllipsisVertical className="size-4 text-foreground"/>
                        </button>
                    </>
                    }

                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    )
}