import React, { PropsWithChildren } from 'react'
import GlobalStateProvider from './GlobalStateProvider'
import { ThemeProvider } from 'next-themes';
import FramerMotionProvider from './FramerMotionProvider';

export default function Providers({ children }: PropsWithChildren) {
    return (
        <FramerMotionProvider>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                <GlobalStateProvider>
                        {children}
                </GlobalStateProvider>
            </ThemeProvider>
        </FramerMotionProvider>

    )
}
