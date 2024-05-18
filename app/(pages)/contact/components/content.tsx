"use client"
import Container from '@/components/ui/container'
import { ExternalLink } from 'lucide-react'
import clsx from 'clsx'
import { MailCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import TableOfContents from '@/components/wrappers/sections/table-content'
import useOnScroll from '@/hooks/useOnScroll';

const items = [{
    title: "contact",
    depth: 600,
    slug: "contact"
}, {
    title: "social media",
    depth: 1000,
    slug: "social-media"
}]

const Content = ({ }) => {

    const isScrolled = useOnScroll(200);

    return (
        <section className='mt-20'>
            <Container>
                <div className='grid grid-cols-1 grid-cols-3 relative'>

                    <div className={clsx('col-span-3 lg:col-span-2  lg:border-l border-l-slate-300 h-full text-slate-600 lg:px-20 flex flex-col gap-16', 'dark:border-l-slate-600 dark:text-slate-400')}>
                        <div className={clsx('flex flex-col gap-4 text-md  font-thin', 'lg:text-lg')}>
                            <p>Just a friendly reminder that the information provided here is for  <strong>business purposes only.</strong>  If you have any questions, feel free to chat with me directly on my social media.</p>
                            <p>I appreciate your understanding in using this responsibly.</p>
                        </div>

                        <div id='contact' className='flex flex-col gap-8'>
                            <h1 className={clsx('font-bold text-2xl', 'lg:text-3xl')}>Contact</h1>
                            <table className="w-full text-sm text-left border  text-gray-500 dark:text-gray-400 dark:text-gray-400 dark:border-slate-700">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:bg-transparent">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Contact
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Detail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Address
                                        </th>
                                        <td className="px-6 py-4">
                                            Quebec, Canada
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Timezone
                                        </th>
                                        <td className="px-6 py-4">
                                            UTC -4
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Email
                                        </th>
                                        <td className={clsx("relative px-6 py-4 inline-flex justify-start gap-1 items-end text-primary-900 cursor-pointer",
                                            "after:px-6 after:bg-accent-600/20 after:absolute bottom-1 after:left-0 after:right-0 z-[1] after:h-2 after:origin-bottom after:scale-y-[.4] hover:after:scale-y-[2] after:transition-transform after:content-[''] dark:text-slate-200"
                                        )}>
                                            <MailCheck size={20} />
                                            <span className='text-sm'>
                                                sylvaincodeur@gmail.com
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>If you need any further information, such as my phone number, please do not hesitate to send me an email first.</p>
                        </div>

                        <div id="social-media" className='flex flex-col gap-8'>
                            <h1 className={clsx('font-bold text-2xl capitalize', 'lg:text-3xl')}>Social media</h1>
                            <p>If you want to find me on social media, just search for <strong>@sylvaincodes</strong> That's my username on almost all platforms, so it should be easy to find me.</p>
                            <p>But if you're short on time, I've included some links to the social media platforms I use most frequently below.</p>

                            <table className="w-full text-sm text-left border text-gray-500 dark:text-gray-400 dark:border-slate-700 max-w-xs">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:bg-transparent">
                                    <tr className='dark:border border-slate-600'>
                                        <th scope="col" className="px-6 py-3">
                                            Contact
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Detail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Twitter
                                        </th>
                                        <td>
                                            <Link href="https://twitter.com/sylvaincodes" target='_blank' className={clsx("relative px-6 py-4 inline-flex justify-start gap-1 items-end text-primary-900 cursor-pointer",
                                                'dark:text-slate-200',
                                                "after:px-6 after:bg-accent-600/20 after:absolute bottom-1 after:left-0 after:right-0 z-[1] after:h-2 after:origin-bottom after:scale-y-[.4] hover:after:scale-y-[2] after:transition-transform after:content-['']"
                                            )}>
                                                <span className='text-sm'>
                                                    https://twitter.com/sylvaincodes
                                                </span>
                                                <ExternalLink size={20} />
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                                            youtube
                                        </th>
                                        <td>
                                            <Link href="https://www.youtube.com/@sylvaincodes593" target='_blank' className={clsx("relative px-6 py-4 inline-flex justify-start gap-1 items-end text-primary-900 cursor-pointer",
                                                'dark:text-slate-200',
                                                "after:px-6 after:bg-accent-600/20 after:absolute bottom-1 after:left-0 after:right-0 z-[1] after:h-2 after:origin-bottom after:scale-y-[.4] hover:after:scale-y-[2] after:transition-transform after:content-['']"
                                            )}>
                                                <span className='text-sm'>
                                                    https://www.youtube.com/@sylvaincodes593
                                                </span>
                                                <ExternalLink size={20} />
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={clsx('hidden ms-auto lg:flex h-fit gap-8', isScrolled && 'absolute sticky top-0 backdrop-blur shadow-sm dark:shadow-slate-500 ')}>
                        <TableOfContents items={items} />
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default Content
