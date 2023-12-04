"use client";
// Converted from server to client component to add Mobile State

import { FormPopover } from "@/components/form/form-popover"
import { Hint } from "@/components/hint"
import { HelpCircle, User2 } from "lucide-react"
import { useState, useEffect } from "react";

export const BoardList = () => {
    // Added state to handle board popover positioning for Mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    
    return (
        <div className="space-y-4">
            <div className="flex items-center font-semibold text-lg text-neutral-700">
                <User2 className="h-6 w-6 mr-2"/>
                Your boards
            </div>
            <div className="grid grid-cols-2 sm:g-cols-3 lg:grid-cols-4 gap-4">
                {/* FormPopoever is the trigger to open children content*/}
                <FormPopover sideOffset={10} side={isMobile ? "bottom" : "right"}> 
                    <div
                        role="button"
                        className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
                    >
                        <p className="text-sm">Create new board</p>
                        <span className="text-xs">
                            5 remaining
                        </span>
                        <Hint
                            sideOffset={40}
                            side="bottom"
                            description={`
                                Free Workspaces can have up to 5 open boards. For unlimited boards, upgrade this workspace.
                            `}
                        >
                            <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]"/>
                        </Hint>
                    </div>
                </FormPopover>
            </div>
        </div> 
    )
}