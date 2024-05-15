import Container from '@/components/ui/container'
import React from 'react'
import HeroTitle from './subs/hero-title'
import HeroCta from './subs/hero-cta'
import HeroTeck from './subs/hero-teck'
import HeroImage from './subs/hero-image'
import clsx from 'clsx'
import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/ui/icons'
import FeaturedCard from '../cards/featured-card'

const HeroOne = () => {
    return (
        <div className="pt-36 before:bg-grid-slate-300/80 
        before:absolute before:inset-0 before:z-[-1] 
        before:[mask-image:linear-gradient(transparent,black,transparent)] 
        dark:before:bg-grid-slate-800/100">

            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 h-full w-full'>
                    <div className='flex flex-col gap-8 h-full justify-center'>
                        <HeroTitle />
                        <HeroCta />
                        <HeroTeck />
                    </div>
                    <div className='hidden lg:block'>
                        <HeroImage />
                    </div>
                </div>
                <div className='flex gap-4 justify-center flex-wrap lg:flex-nowrap mt-20 lg:mt-0'>
                    <FeaturedCard
                        icon={
                            <div
                                className={clsx(
                                    'rounded-full bg-amber-300 p-3.5',
                                    'dark:bg-amber-900'
                                )}
                            >
                                <SparklesIcon className={clsx('h-5 w-5 text-white')} />
                            </div>
                        }
                        title="Clean & Intuitive"
                        desc="Keep the UI clean with a modern touch without compromising UX."
                    />

                    <FeaturedCard
                        icon={
                            <div
                                className={clsx(
                                    'rounded-full bg-pink-300 p-3.5',
                                    'dark:bg-pink-900'
                                )}
                            >
                                <HeartIcon className={clsx('h-5 w-5 text-white')} />
                            </div>
                        }
                        title="Detail Oriented"
                        desc="Awareness to ease of access, UI consistency, and improved UX."
                    />
                    <FeaturedCard
                        icon={
                            <div
                                className={clsx(
                                    'rounded-full bg-sky-300 p-3.5',
                                    'dark:bg-sky-900'
                                )}
                            >
                                <CodeIcon className={clsx('h-5 w-5 text-white')} />
                            </div>
                        }
                        title="Pretty & Optimized"
                        desc="Writing clean code is a top priority while keeping it as optimized as possible."
                    />

                </div>
            </Container>

        </div>
    )
}

export default HeroOne

// h-[50rem] w-full relative z-0 bg-white dark:bg-dark before:bg-grid-slate-300/80 dark:before:bg-grid-slate-900/100 before:absolute before:inset-0 before:[mask-image:linear-gradient(transparent,black,transparent)]
//         bg-transparent bg-gradient-to-b from-slate-100 via-slate-100 dark:bg-transparent dark:from-dark dark:via-dark
//         flex items-center justify-center pt-36 pb-20 