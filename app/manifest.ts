import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Next Js Full Stack Portfolio With Framer Motion, Tailwind CSS, MongoDB, Prisma.",
        short_name: "Sylvaincodes-Portfolio",
        description: "Next Js Full Stack Portfolio With Framer Motion, Tailwind CSS, MongoDB, Prisma.",
        start_url: "/",
        display: "standalone",
        background_color: "#000",
        theme_color: "#000",
        icons: [
            {
                src: "/logo/logo-100.png",
                sizes: "100x100",
                type: "image/png"
            }
        ]
    }
}
