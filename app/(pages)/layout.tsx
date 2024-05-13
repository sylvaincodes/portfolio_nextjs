import HeaderOne from "@/components/wrappers/header/header-one"


//Global seo 
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}`),
  applicationName: 'Full Animated Portfolio',
  keywords: ['nextjs', 'reactjs', 'frontenddesign', 'sylvaincodes'],
  authors: [{ name: 'sylvaincodes', url: 'https://github.com/sylvaincodes' }],
  publisher: 'netlify',


  alternates: {
    canonical: '/',
    languages: {
      'en': 'en'
    }
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      noimageindex: false
    }
  },


  manifest: `${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.webmanifest`,

  icons: {
    icon: "/logo/logo-16.png",
    shortcut: "/logo/logo-16.png",
    apple: "/logo/logo-16.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "Next Js Full Stack Portfolio With Framer Motion, Tailwind CSS, MongoDB, Prisma.",
    description: "Next Js Full Stack Portfolio With Framer Motion, Tailwind CSS, MongoDB, Prisma.",
    siteId: "",
    creator: "sylvaincodes",
    images: [`${process.env.NEXT_PUBLIC_SERVER_URL}/images/og.png`]
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HeaderOne />
        {children}
      </body>
    </html>
  )
}
