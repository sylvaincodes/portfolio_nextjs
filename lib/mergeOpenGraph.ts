// Search Media Optimisation

import type { Metadata } from 'next'

// Default open graph
const defaultOpenGraph: Metadata['openGraph'] = {

    title: "Next Js Tailwind CSS DESIGN UI",
    description: "Mastering your tailwind css skills",
    images: [
        {
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}/logo/porsche-240.png`
        }
    ],
    type:"website",
    url:  `${process.env.NEXT_PUBLIC_SERVER_URL}`
}


// Dynamic open graph
export const mergeOpenGraph = (og?: Metadata['openGraph']) =>{
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
    title: og?.title ? og.title : defaultOpenGraph.title,
    url: og?.url ? og.url : defaultOpenGraph.url,
  }  
} 