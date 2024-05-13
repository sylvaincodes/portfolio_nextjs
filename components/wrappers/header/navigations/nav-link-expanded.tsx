import clsx from 'clsx';
import { ChevronRightIcon } from 'lucide-react';
import React from 'react';
import { NavLink } from './nav-link';


interface NavLinkExpandedProps {
  title: string;
  items: Array<NavLinkProps>;
}

const NavLinkExpanded = ({ title, items }: NavLinkExpandedProps) => {
  return (
    <div className={clsx('flex')}>
      <div
        className={clsx(
          'text-accent-600 flex h-9 items-center gap-1 rounded-xl px-2 text-[13px] font-bold dark:text-accent-400 dark:font-semibold hover:text-accent-700 hover:dark:text-accent-300 pointer-events-none ml-2 mr-2','bg-primary-600/[0.08] text-primary-900 rounded-full px-5 dark:bg-accent-400/10 '
        )}
      >
        {title}
        <ChevronRightIcon className={clsx('h-3 w-3')} />
      </div>
      <ul className={clsx('flex items-center gap-4 ms-4')}>
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            <li>
              <NavLink title={item.title} href={item.href} />
            </li>
            {idx !== items.length - 1 && (
              <li>
                <div className="nav-link__separator">&middot;</div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default NavLinkExpanded;
