"use client"
import Container from '@/components/ui/container'
import TableOfContents from '@/components/wrappers/sections/table-content'
import clsx from 'clsx'
import { Copy } from 'lucide-react'
import React from 'react'
import useOnScroll from '@/hooks/useOnScroll';
import toast from 'react-hot-toast'

const items = [{
    title: "splitting",
    depth: 600,
    slug: "splitting"
}, {
    title: "customcss",
    depth: 1000,
    slug: "customcss"
}]

const Content = () => {
    const isScrolled = useOnScroll(200);
    return (
        <section>
            <Container>
                <div className='grid grid-cols-1 grid-cols-3 relative'>

                    <div className={clsx('col-span-3 lg:col-span-2  lg:border-l border-l-slate-300 h-full text-slate-600 lg:px-20 flex flex-col gap-16', 'dark:border-l-slate-600 dark:text-slate-400')}>
                        <div className={clsx('flex flex-col gap-4 text-md  font-thin', 'lg:text-lg')}>
                            <p>Simplify Your Tailwind CSS Class Management with some technics and good manners.</p>

                        </div>

                        <hr />

                        <div className='flex flex-col gap-8'>
                            <h1 className={clsx('font-bold text-2xl', 'lg:text-3xl')}>Coding Style</h1>


                            <h2 className={clsx('font-bold text-xl', 'lg:text-3xl')}>Splitting</h2>

                            <p className='text-xl'>clsx is another popular utility for combining class names in JavaScript. It’s lightweight, fast, and works well with Tailwind CSS.</p>

                            <p>Here’s a simple example of how to use clsx:</p>

                            <div className='relative'>
                                <div title='copy' className='absolute bottom-10 right-10 rounded-xl p-2 bg-white hover:bg-slate-100 group cursor-pointer'>
                                    <Copy size={22} className='hover-group:text-slate-800' onClick={() => {
                                        navigator.clipboard.writeText("<button className='inline - flex h - 10 items - center justify - center gap - 1.5 rounded - md border border - transparent bg - purple - 600 px - 4 text - center text - sm font - bold text - white transition duration - 150 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 md:rounded-xl'> Button Text </button>");
                                        toast("copied!");
                                    }} />
                                </div>
                                <pre className='w-xs h-40 bg-slate-100 text-white rounded-md p-6 overflow-auto'>
                                    <code className="text-slate-800">

                                        <span className='text-primary-600'>import</span>  clsx from <strong className='text-green-800'>'clsx'</strong> ; <br />
                                        <span className='text-primary-600'>const</span>  baseClasses = <span className='text-primary-800'>'bg-blue-500 text-white'</span> ;<br />

                                        <span className='text-primary-600'>const</span>  additionalClasses = <span className='text-primary-800'>'rounded-lg p-4'</span>  ;<br />

                                        <span className='text-primary-600'>const</span>  combinedClasses = <strong className='text-green-800'>clsx</strong>(baseClasses, additionalClasses);

                                    </code>

                                </pre>

                            </div>

                            <p>
                                In this example, combinedClasses will contain the string ‘bg-blue-500 text-white rounded-lg p-4’.
                            </p>


                            <h2 className={clsx('mt-20 font-bold text-xl', 'lg:text-3xl')}>Arbitrary properties</h2>

                            <p className='text-xl'>Arbitrary properties in Tailwind CSS provide a powerful and flexible way to add custom CSS properties and values directly within your Tailwind utility classes.</p>

                            <p>Here’s a simple example</p>

                            <div className='relative'>
                                <div title='copy' className='absolute bottom-10 right-10 rounded-xl p-2 bg-white hover:bg-slate-100 group cursor-pointer'>
                                    <Copy size={22} className='hover-group:text-slate-800' onClick={() => {
                                        navigator.clipboard.writeText("<ul className='[&>li:nth-child(2)]:text-red-800 [&>li:nth-child(3)]:text-green-600'><li>First Item</li><li> Second Item Item </li><li>Third Item </li></ul>");
                                        toast("copied!");
                                    }} />
                                </div>
                                <pre className='w-xs h-auto bg-slate-100 text-white rounded-md p-6 overflow-auto'>
                                    <code className="text-slate-800">

                                        &lt;ul
                                        className='<strong className='text-primary-800'>[&&gt;li:nth-child(2)]</strong>:text-red-800 <br /><strong className='text-primary-800'>[&&gt;li:nth-child(3)]</strong>:text-green-600'&gt; <br />

                                        <br />&nbsp;&lt;li&gt;First Item&lt;/li&gt;<br />
                                        &nbsp;&lt;li&gt; <span className='text-red-800'>Second Item Item</span> &lt;/li&gt;<br />
                                        &nbsp;&lt;li&gt;<span className='text-green-800'>
                                            Third Item</span> &lt;/li&gt;<br />
                                        <br />&lt;/ul&gt;

                                    </code>

                                </pre>

                            </div>

                        </div>


                    </div>

                    <div className={clsx('hidden ms-auto lg:flex h-fit gap-8', isScrolled && 'absolute sticky top-0 backdrop-blur shadow-sm dark:shadow-slate-500 ')}>
                        <TableOfContents items={items} />
                    </div>

                </div>
            </Container >
        </section >
    )
}

export default Content
