"use client"
import Container from '@/components/ui/container'
import { QuoteIcon } from '@/components/ui/icons'
import Row from '@/components/ui/row'
import clsx from 'clsx'
import React from 'react'
import { m } from 'framer-motion'

const QuotoOne = () => {

    const animation = {
        hide: {
            y: 100, opacity: 0
        },
        show: {
            y: 0, opacity: 1
        },

    }
    return (
        <m.section

            initial={animation.hide}
            whileInView={animation.show}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}

            className='my-20'
        >
            <Container>
                <Row className='justify-center'>
                    <blockquote className='text-xl sm:text-3xl lg:text-5xl text-slate-500 flex gap-2 items-start tracking-tighter dark:text-slate-400'>
                        <QuoteIcon
                            className={clsx('h-10 text-slate-300', 'md:-mt-3 md:h-16 lg:h-24',
                                'dark:text-slate-800'
                            )}
                        />
                        <div className='flex flex-col gap-2'>
                            <div className='capitalize font-thin italic '>beautiful</div>
                            <div className='flex items-center gap-2'>
                                <span className='w-10 h-0.5 bg-slate-400'></span>
                                <strong className='font-extrabold text-slate-600 dark:text-slate-300'> inside </strong>
                                and <strong className='font-extrabold text-slate-600 dark:text-slate-300'>out </strong>
                                <span className='w-10 h-0.5 bg-slate-400'></span>
                            </div>
                            <span>is a <strong className='font-extrabold text-slate-600 rounded-xl p-1 bg-slate-100 dark:bg-slate-800 dark:text-slate-300'>must.</strong></span>
                        </div>
                    </blockquote>
                </Row>
            </Container>
        </m.section>
    )
}

export default QuotoOne
