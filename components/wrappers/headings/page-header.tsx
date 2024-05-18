"use client"
import Container from '@/components/ui/container';
import clsx from 'clsx';
import { m } from 'framer-motion';

import type { ReactNode } from 'react';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface PageHeaderProps {
  title: string;
  description: string;
  caption?: string;
  headerImage?: ReactNode;
}

function PageHeader({
  title,
  description,
  caption = '',
  headerImage = null,
}: PageHeaderProps) {
  return (
    <div
      id="page-header"
      className={clsx(
        'bg-grid-slate-100/20 [mask-image:linear-gradient(transparent,black,black)] pt-20 text-sm text-slate-900 z-[900]',
        'dark:bg-grid-slate-600/20'
      )}
    >
      {headerImage && (
        <Container
          className={clsx('absolute inset-0 overflow-hidden')}
        >
          <div
            className={clsx(
              'pointer-events-none absolute inset-0 hidden select-none',
              'lg:block'
            )}
          >
            <div className={clsx('content-wrapper relative h-full')}>
              <div className={clsx('absolute right-0 -top-[100px] h-fit bottom-0')}>
                {headerImage}
              </div>
            </div>
          </div>
        </Container>
      )}
      <Container className={clsx('')}>
        {caption && (
          <m.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0 }}
          >
            <span
              className={clsx(
                'text-accent-600 mb-1 block text-lg font-extrabold capitalize leading-none',
                'md:mb-0 md:text-2xl',
                'dark:text-accent-400'
              )}
            >
              {caption}
            </span>
          </m.div>
        )}
        <m.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          <h1
            className={clsx(
              'text-[2.5rem] font-extrabold leading-tight text-slate-700 capitalize',
              'md:text-7xl md:leading-snug',
              'dark:text-slate-300'
            )}
          >
            {title}
          </h1>
        </m.div>
        <m.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          <p
            className={clsx(
              'mt-4 text-lg text-slate-600',
              'md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px]',
              'dark:text-slate-400'
            )}
          >
            {description}
          </p>
        </m.div>
      </Container>
    </div>
  );
}

export default PageHeader;
