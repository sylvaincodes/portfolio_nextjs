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
          'text-primary-400 mb-2 block font-black',
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
        <div className={clsx('mt-4', 'md:mt-6')}>
          <Link href={button.href} className={clsx('button button--soft')}>
            {button.title}
            <ChevronRightIcon className="mt-0.5 h-3 w-3" />
          </Link>
        </div>
      )}
    </div>
  );
}

