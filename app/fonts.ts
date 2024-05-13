import localFont from "next/font/local"
import { Azeret_Mono } from 'next/font/google'
export const local = localFont({
    src: "../public/fonts/PlusJakartaSans-Regular.ttf"
})

export const ibm = Azeret_Mono({
    subsets:['latin'],
    weight:['400','700']
})