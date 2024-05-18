import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import { m } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { forwardRef } from 'react';

import type { HTMLAttributes, Ref } from 'react';
import type { UrlObject } from 'url';

const animation = {
    hide: { opacity: 0, y: -16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

type LinkRefProps = HTMLAttributes<HTMLAnchorElement> & {
    href: string | UrlObject;
};

const LinkRef = forwardRef(
    ({ href, children, ...rest }: LinkRefProps, ref: Ref<HTMLAnchorElement>) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Link href={href} ref={ref} {...rest}>
            {children}
        </Link>
    )
);

LinkRef.displayName = 'LinkRef';

type NavLink = {
    href: string;
    title: string;
};

interface NavLinkDropdownProps {
    title: string;
    items: Array<NavLink>;
}

function NavLinkDropdown({ title, items }: NavLinkDropdownProps) {
    return (
        <div className="relative">
            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className={clsx('text-accent-600 flex h-9 items-center gap-1 rounded-xl px-2 text-[13px] font-bold dark:text-accent-400 dark:font-semibold hover:text-accent-700 hover:dark:text-accent-300 ml-2 mr-2', 'bg-primary-600/[0.08] text-primary-400 rounded-full px-5 dark:bg-dark   ml-2')}>
                            {title}
                            <ChevronRightIcon
                                className={clsx('h-3 w-3 rotate-90', [open && '-rotate-90'])}
                            />
                        </Menu.Button>
                        {open && (
                            <Menu.Items
                                static
                                as={m.div}
                                variants={animation}
                                initial="hide"
                                animate="show"
                                className={clsx(
                                    'border-divider-light absolute top-11 flex w-40 flex-col rounded-2xl border bg-white/70 p-2 backdrop-blur',
                                    'dark:border-divider-dark dark:bg-slate-900/80'
                                )}
                            >
                                {items.map((item) => (
                                    <Menu.Item key={item.href}>
                                        {({ active }) => (
                                            <LinkRef
                                                href={item.href}
                                                className={clsx('text-accent-600 flex h-9 items-center gap-1 rounded-xl px-2 text-[13px] font-bold dark:text-accent-400 dark:font-semibold hover:text-accent-700 hover:dark:text-accent-300 h-8 text-xs','dark:text-slate-100', [
                                                    active && 'rounded-lg bg-slate-100 dark:bg-slate-800/50',
                                                ])}
                                            >
                                                {item.title}
                                            </LinkRef>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        )}
                    </>
                )}
            </Menu>
        </div>
    );
}

export default NavLinkDropdown;
