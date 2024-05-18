"use client"
import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { m } from 'framer-motion'

const HeroCta = () => {

    const animation = {
        hide: {
            x: -16,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <m.div
            initial="hide" animate="show"
            className='flex gap-8 items-center mb-10'>

            <m.div
                variants={animation}
                transition={{ delay: 0.4 }}
            >
                <Button variant="primary_full">
                    <Link href="/contact">
                        get in touch
                    </Link>
                </Button>
            </m.div>

            <m.div
                variants={animation}
                transition={{ delay: 0.5 }}
            >
                <Button variant="primary_tranparent">
                    <Link href="/" className='inline-flex gap-1 text-xl items-center'>
                        <FileText className="mr-2 h-6 w-6" />
                        <span>
                            resume
                        </span>
                    </Link>
                </Button>
            </m.div>

        </m.div>
    )
}

export default HeroCta
