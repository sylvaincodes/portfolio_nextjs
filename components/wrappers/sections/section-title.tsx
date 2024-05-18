"use client"
import clsx from 'clsx';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { m } from 'framer-motion'

import type { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  caption: string;
  description: string | ReactNode;
  button?: {
    title: string;
    href: string;
  } | null;
}

export const SectionTitle = ({
  title,
  caption,
  description,
  button = null,
}: SectionTitleProps) => {


  const animation = {
    hide: {
      x: -100, opacity: 0
    },
    show: {
      x: 0, opacity: 1
    },

  }

  return (
    <div className={clsx('content-wrapper')}>
      <m.h1

        initial={animation.hide}
        whileInView={animation.show}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}

        className={clsx(
          'text-primary-800 tracking-wide text-2xl mb-2 block font-black',
          'lg:mb-4',
          'dark:text-accent-400'
        )}
      >
        {caption}
      </m.h1>
      <m.p
        className={clsx(
          'mb-4 text-xl font-black text-slate-700',
          'lg:text-4xl',
          'dark:text-slate-200'
        )}
        initial={animation.hide}
        whileInView={animation.show}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      >
        {title}
      </m.p>
      <m.p
        initial={animation.hide}
        whileInView={animation.show}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        className={clsx('text-sm lg:text-base max-w-lg text-slate-600', 'dark:text-slate-400')}>
        {description}
      </m.p>
      {button && (
        <m.div
          initial={animation.hide}
          whileInView={animation.show}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}

          className={clsx('mt-4', 'md:mt-6')}>
          <Link href={button.href} target="_blank" className={clsx('inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-transparent px-4 text-center text-sm font-bold transition duration-150',
            'md:rounded-xl', 'bg-accent-600/[0.08] text-accent-600 rounded-full px-5 font-bold', 'dark:bg-accent-400/10 dark:text-accent-100 dark:font-semibold hover:dark:bg-primary-900/100 hover:dark:text-slate-100 hover:text-slate-900')}>
            {button.title}
            <ChevronRightIcon className="mt-0.5 h-3 w-3" />
          </Link>
        </m.div>
      )}
    </div>
  );
}

