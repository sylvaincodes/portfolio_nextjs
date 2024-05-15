import clsx from 'clsx';
import { m } from 'framer-motion'

import type { ReactNode } from 'react';

const animation = {
    hide: { x: -24, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.12,
        },
    },
};


interface SectionButtonProps {
    title: string;
    description?: string;
    icon?: ReactNode;
    active?: boolean;
    onClick?: () => void;
}

export const SectionButton = ({
    title,
    description = '',
    icon = null,
    active = false,
    onClick = () => { },
}: SectionButtonProps) => {
    return (
        <m.button

            initial={animation.hide}
            whileInView={animation.show}
            transition={{ duration: 0.3  }}
            viewport={{ once: true }}
            
            type="button"
            className={clsx(
                'flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left',
                'dark:bg-slate-900',
                active
                    ? ['border-accent-400', 'dark:border-accent-400']
                    : ['border-divider-light ', 'dark:border-divider-dark']
            )}
            onClick={onClick}
        >
            {icon && (
                <span
                    className={clsx(
                        'hidden w-24 shrink-0 justify-center text-center text-7xl font-black',
                        'xl:flex',
                        active
                            ? ['text-accent-600', 'dark:text-accent-400']
                            : ['text-slate-400', 'dark:text-slate-600']
                    )}
                >
                    {icon}
                </span>
            )}
            <span className={clsx('flex-1')}>
                <span
                    className={clsx(
                        'block font-bold',
                        active
                            ? ['text-accent-600', 'dark:text-accent-400']
                            : ['text-slate-700', 'dark:text-slate-200']
                    )}
                >
                    {title}
                </span>
                {description && (
                    <span
                        className={clsx(
                            'mt-1 block text-sm text-slate-600',
                            'dark:text-slate-400'
                        )}
                    >
                        {description}
                    </span>
                )}
            </span>
        </m.button>
    );
}

export function SectionButtonSmall({
    title,
    icon = null,
    active = false,
    onClick = () => { },
}: Omit<SectionButtonProps, 'description'>) {
    return (
        <button
            type="button"
            className={clsx('flex flex-col items-center rounded-xl p-2 text-sm', [
                active
                    ? ['text-accent-600', 'dark:text-accent-400']
                    : ['text-slate-400', 'dark:text-slate-600'],
            ])}
            onClick={onClick}
        >
            <span className={clsx('text-4xl font-black')}>{icon}</span>
            <span
                className={clsx(
                    'font-medium',
                    active
                        ? ['text-accent-600', 'dark:text-accent-400']
                        : ['text-slate-500', 'dark:text-slate-400']
                )}
            >
                {title}
            </span>
        </button>
    );
}
