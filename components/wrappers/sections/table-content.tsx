"use client"
import clsx from 'clsx';
import { m } from 'framer-motion';

import useOnScroll from '@/hooks/useOnScroll';
import useScrollSpy from '@/hooks/useScrollSpy';

import type { TTableOfContentsItem } from '@/types';
import Link from 'next/link';
import {
  animateScroll as scroll
} from "react-scroll";

const options = {
  duration: 500,
}

interface TableOfContentsLinkProps extends TTableOfContentsItem {
  active?: boolean;
}

function TableOfContentsLink({
  title,
  depth,
  slug,
  active = false,
}: TableOfContentsLinkProps) {
  return (
    <button onClick={() => scroll.scrollTo(depth, options)}
      className={clsx('hover:text-primary-700 relative z-10 flex p-1 px-2 text-[13px] font-bold text-slate-700', 'dark:hover:text-primary-300 dark:font-semibold dark:text-slate-300', {
        'ml-4 font-normal text-slate-600 dark:font-normal dark:text-slate-400': depth === 2,
        'text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300': active,
      })}
    // href={`#${slug}`}
    >
      {title}
    </button>
  );
}

interface TableOfContensProps {
  items?: Array<TTableOfContentsItem>;
}

function TableOfContents({ items = [] }: TableOfContensProps) {
  const isScrolled = useOnScroll(200);
  const { currentVisibles } = useScrollSpy();

  const handleScrollToTopClick = () => {
    scroll.scrollTo(0);
  };

  return (
    <nav
      aria-label="Page table of contents"
      className={clsx(
        'border-divider-light rounded-xl border bg-white',
        'dark:border-divider-dark dark:bg-[#161e31]'
      )}
    >
      <div
        className={clsx(
          'border-divider-light flex items-center justify-between border-b py-3 px-5 text-sm font-bold',
          'dark:border-divider-dark'
        )}
      >
        <h2
          className={clsx('text-slate-700', 'dark:text-slate-300')}
          id="table-of-contents"
        >
          <span className={clsx('lg:hidden', 'xl:inline')}> Table of </span>
          Contents
        </h2>
        <m.div
        className='ms-8'
          initial={{ x: 16, opacity: 0 }}
          animate={isScrolled ? { x: 0, opacity: 1 } : { x: 16, opacity: 0 }}
        >
          <Link
            href="#skip-navigation"
            className={clsx(
              'border-divider-light text-accent-700 flex h-6 cursor-pointer items-center rounded-full border px-2 text-xs font-normal',
              'dark:border-divider-light dark:text-accent-400 dark:text-slate-300'
            )}
            tabIndex={isScrolled ? 0 : -1}
            onClick={handleScrollToTopClick}
          >
            scroll to top
          </Link>
        </m.div>
      </div>
      <div className={clsx('relative p-3 py-4')}>
        <ol className={clsx('relative flex flex-col gap-2')}>
          {items.map(({ title, depth, slug }) => {
            const isActive = currentVisibles && currentVisibles[slug];

            return (
              <li key={slug}>
                <TableOfContentsLink
                  title={title}
                  depth={depth}
                  slug={slug}
                  active={isActive}
                />
                {isActive && <div className={clsx('absolute -inset-x-3 -inset-y-1 bg-slate-50', 'dark:bg-[#1d263a]')} />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default TableOfContents;
