"use client"
import React, { PropsWithChildren } from 'react'
import { Scroll } from 'next-animation'

export default function ScrollProvider({ children }: PropsWithChildren) {
    return (
        <Scroll>
            {children}
        </Scroll>
    )
}
