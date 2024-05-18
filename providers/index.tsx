import React, { PropsWithChildren } from 'react'
import GlobalStateProvider from './GlobalStateProvider'
import { ThemeProvider } from 'next-themes';
import FramerMotionProvider from './FramerMotionProvider';
import ToasterProvider from './ToastProvider';
import {
    TooltipProvider
} from "@/components/ui/tooltip"

export default function Providers({ children }: PropsWithChildren) {
    return (
        <TooltipProvider>
            <FramerMotionProvider>
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    <GlobalStateProvider>
                        <ToasterProvider />
                        {children}
                    </GlobalStateProvider>
                </ThemeProvider>
            </FramerMotionProvider>
        </TooltipProvider>

    )
}
