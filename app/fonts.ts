import localFont from "next/font/local"
import { Fira_Code } from 'next/font/google'

export const ibm = Fira_Code({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const local = localFont({
    src: "../public/fonts/PlusJakartaSans-Regular.ttf"
})
