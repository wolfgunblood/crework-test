"use client";

import { Button } from "@/components/ui/button";
import { SidebarRoutes } from "./sidebar-routes"
import Image from "next/image";
import SidebarTop from "./sidebar-top";
import { ArrowDownToLine, Download } from "lucide-react";

export const Sidebar = () => {

    return (
        <div className="w-[285px] h-[1024px] bg-white border-r flex flex-col justify-between"
            style={{ border: '0px 1px 0px 0px solid #DEDEDE', padding: '24px 16px 32px 16px' }}
        >
            <div className="flex flex-col gap-4">
                <SidebarTop />
                <SidebarRoutes />
                <Button> Create new task</Button>
            </div>
            <div className="flex gap-2 p-2 rounded-lg">
                <ArrowDownToLine size={40} stroke="#666666" strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                    <h3 className="font-inter text-xl font-medium leading-custom"
                        style={{ color: "#666666" }}>Download the app</h3>
                    <p className="font-inter text-sm font-normal leading-custom-1"
                        style={{ color: "#666666" }}>Get the full experience</p>
                </div>
            </div>
        </div>
    )
}