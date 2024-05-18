import { HiMenu } from 'react-icons/hi'

export const routes = [
    {
        title: "projects",
        href: "/projects",
        icon: HiMenu
    },
    {
        title: "blog",
        href: "/blog",
        icon: HiMenu
    },

    {
        title: "contact",
        href: "/contact",
        icon: HiMenu
    }
]

export const activity = [
    {
        "activityType": "REACTION",
        "type": "CLAPPING",
        "count": 1,
        "createdAt": "2024-05-17T20:04:22.157Z",
        "slug": "the-2023-retrospective",
        "contentTitle": "Fitur Multiple Reactions",
        "contentType": "POST"
    },
    {
        "activityType": "REACTION",
        "type": "AMAZED",
        "count": 1,
        "createdAt": "2024-05-17T20:04:21.581Z",
        "slug": "the-2023-retrospective",
        "contentTitle": "Fitur Multiple Reactions",
        "contentType": "POST"
    },
    {
        "activityType": "REACTION",
        "type": "THINKING",
        "count": 1,
        "createdAt": "2024-05-17T20:04:20.968Z",
        "slug": "the-2023-retrospective",
        "contentTitle": "Fitur Multiple Reactions",
        "contentType": "POST"
    }
]

export const blog = [
    {
        slug: "the-2023-retrospective",
        frontMatter: {
            date: "2024-02-25",
            lang: "id",
            title: "The 2023 Retrospective ðŸ¤©",
            description: "Pengalaman bekerja secara remote yang luar biasa menarik dan sangat berkesan.",
            tags: [
                "endofyear",
                "retrospective"
            ],
            category: "story",
            caption: "Best Practices",
            pinned: true
        }
    },
    {
        slug: "id-tailwindcss-best-practices",
        frontMatter: {
            title: "Tailwind CSS Best Practices",
            description: "Tailwind CSS best practices, tips dan coding style yang sering saya implementasikan.",
            lang: "id",
            date: "2023-02-06",
            tags: [
                "tailwindcss",
                "best-practices"
            ],
            category: "tailwindcss",
            caption: "Best Practices",
            pinned: false

        },
    },
    {
        slug: "tailwindcss-best-practices",
        frontMatter: {
            title: "Tailwind CSS Best Practices",
            description: "Tailwind CSS best practices, tips, and coding style that I always use.",
            lang: "en",
            date: "2023-02-06",
            tags: [
                "tailwindcss",
                "best-practices"
            ],
            category: "tailwindcss",
            caption: "Best Practices",
            pinned: false
        }
    },
]

export const slugsBlog =
{
    "the-2023-retrospective":
    {
        "meta":
        {
            "views": 861, "shares": 38
        }
    },

    "id-tailwindcss-best-practices":
    {
        "meta":
        {
            "views": 81, "shares": 38
        }
    },
}