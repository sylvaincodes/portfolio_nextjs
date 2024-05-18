"use client"
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { m, useAnimationControls } from 'framer-motion'


const HeroTitle = () => {

    const animation = {
        hide: { x: -32, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
        },
    };
    const controls = useAnimationControls();

    return (
        <div className='flex flex-col h-fit max-w-screen-xl'>
            <m.div

                initial={animation.hide}
                animate={animation.show}
                transition={{ delay: 0.1 }}

                className='inline-flex gap-2 items-center mb-1'>

                <span className={clsx(
                    'text-2xl md:text-4xl text-slate-600  font-normal',
                    'dark:text-slate-400'
                )}>
                    hi!
                </span>
                <m.div
                    initial={{
                        opacity: 0,
                        y: 16,
                        rotate: 30,
                        transformOrigin: 'right center',
                    }}
                    animate={controls}
                    transition={{
                        type: 'spring',
                        delay: 0.35,
                        bounce: 0.7,
                        duration: 0.7,
                    }}
                >
                    <Image
                        onLoadingComplete={() => {
                            controls.start({
                                opacity: 1,
                                y: 0,
                                rotate: 0,
                            });
                        }}
                        className='w-7 md:w-10'
                        src="/emojis/love-you-gesture.png" alt='emoji' width={48} height={48} priority />
                </m.div>
            </m.div>
            <div>
                <m.h1
                    initial={animation.hide}
                    animate={animation.show}
                    transition={{ delay: 0.2 }}
                    className={clsx(
                        'inline-flex gap-4 text-2xl md:text-6xl font-bold capitalize leading-none tracking-tightest mb-7'
                    )}>
                    <span className='text-slate-700 dark:text-slate-300'>I&apos;m</span>
                    <strong className={clsx('text-primary-900', 'dark:text-primary-300')}>sylvain</strong>
                    <span className='text-slate-600 dark:text-slate-300'>codes,</span>
                </m.h1>
                <m.h2
                    initial={animation.hide}
                    animate={animation.show}
                    transition={{ delay: 0.3 }}

                    className={clsx('block text-slate-600 text-xs sm:text-sm md:text-2xl leading-8', 
                    'dark:text-slate-400')}
                >

                    <strong className={clsx(
                        'font-bold text-slate-700',
                        'dark:text-slate-300'
                    )}>
                        a front-end developer
                    </strong>
                    <span> who loves creativity,
                    </span>
                    <span>
                        clean and modern UI design.
                    </span>
                </m.h2>
            </div>
        </div>
    )
}

export default HeroTitle
