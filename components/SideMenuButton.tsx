"use client";

import { SidebarMenuButton, useSidebar } from "./ui/sidebar";
import { ComponentType, ReactNode } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


interface SideMenuButtonProps  extends VariantProps<typeof sideMenuButtonClasses> {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    children: ReactNode;
    active: string;
    id: string;
}

const sideMenuButtonClasses = cva("flex justify-between items-center text-foreground", {
    variants: {
        variant: {
            mainSidebar: "",
            subSidebar: "",
        },
        size: {
            medium: "",
        },
    },
    defaultVariants: {
        variant: "mainSidebar",
        size: "medium",
    },
  }
)

export function SideMenuButton({ variant, size, id, className, onClick, active, disabled, children }: SideMenuButtonProps) {
  return (
    <SidebarMenuButton
      className={twMerge(sideMenuButtonClasses({ variant, size }),
      active === id ? "bg-muted" : "" ,className)}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </SidebarMenuButton>
  );
}

export const SideMenuButtonContent = ({children} : {children? : ReactNode}) => {
    return <div className="flex items-center gap-2">{children}</div>
}

SideMenuButton.Icon = ({ icon: Icon, className, variant = "default" }: { icon: ComponentType<{ className?: string }>; className?: string, variant?: "default" | "muted" }) => {
  return <Icon className={twMerge("w-4 h-4",
    variant === "muted" ? "text-muted-text" : "text-foreground", className)} />;
};

SideMenuButton.Label = ({ children, className, collapseText = false }: { children: ReactNode; className?: string; collapseText?: boolean; }) => {
  const { state } = useSidebar();
  return (
    <>
    {(collapseText ? state !== "collapsed" : true) && 
      <span className={twMerge("text-sm font-normal leading-5.25 tracking-normal", className)}>
        {children}
      </span>}
    </>
  );
};

SideMenuButton.Shortcut = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <span className={twMerge("text-muted-text", className)}>{children}</span>;
};
