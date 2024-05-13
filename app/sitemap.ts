import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}`, // url('/')
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        },{
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}/blog`, 
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        },{
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}/project`, 
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        },{
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}/contact`, 
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        }
    ]
}
