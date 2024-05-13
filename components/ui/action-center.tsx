import clsx from 'clsx';
import { m } from 'framer-motion';
import { useTheme } from 'next-themes';

import { useFocusMode } from '@/hooks/useFocusMode';

import type { PropsWithChildren, ReactElement } from 'react';
import { Eye, EyeOff, Moon, Sun } from 'lucide-react';

const animation = {
    hide: { y: -16, opacity: 1 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.084,
        },
    },
};

interface ActionCenterButtonProps {
    icon: ReactElement;
    title: string;
    active?: boolean;
    onClick?: () => void;
}

function ActionCenterButton({
    icon,
    title,
    active = false,
    onClick = () => { },
}: PropsWithChildren<ActionCenterButtonProps>) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={clsx(
                'relative flex flex-1 flex-col justify-between overflow-hidden rounded-xl p-4 transition-colors',
                'dark:bg-[#1d263a]',
                [active ? ['bg-white', 'dark:bg-slate-700'] : 'bg-white/50']
            )}
        >
            <div className={clsx('')}>{icon}</div>
            <div
                className={clsx(
                    'text-left text-[13px] font-medium',
                    'dark:font-normal'
                )}
            >
                {title}
            </div>
        </button>
    );
}

export const ActionCenter = () => {
    const { theme, setTheme } = useTheme();
    const { focusMode, setFocusMode } = useFocusMode();

    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <m.div
            className={clsx('flex flex-col gap-2')}
            initial="hide"
            animate="show"
            transition={{ staggerChildren: 0.06 }}
        >
            <m.div className={clsx('px-2 text-xl font-bold')} variants={animation}>
                Action Center
            </m.div>
            <div className={clsx('flex flex-1 flex-col gap-8 p-2')}>
                <m.div className={clsx('flex h-24 gap-4')} variants={animation}>
                    <ActionCenterButton
                        active={theme === 'dark'}
                        title={theme === 'dark' ? 'Dark Mode: On' : 'Dark Mode: Off'}
                        onClick={handleThemeChange}
                        icon={
                            <m.div
                                animate={
                                    theme === 'dark'
                                        ? { rotate: [90, 0] }
                                        : { rotate: [90.01, 0] }
                                }
                                transition={{ ease: 'easeOut', duration: 0.8 }}
                                className={clsx('absolute top-4 left-4 h-36 w-36 rounded-full')}
                            >
                                <m.div
                                    animate={
                                        theme === 'dark'
                                            ? { opacity: [0.01, 1], scale: [0.801, 1] }
                                            : { opacity: [0, 1], scale: [0.8, 1] }
                                    }
                                    transition={{ ease: 'easeOut', duration: 0.8 }}
                                    className={clsx('absolute top-0')}
                                >
                                    {theme === 'dark' ? (
                                        <Moon className={clsx('h-5 w-5')} />
                                    ) : (
                                        <Sun className={clsx('h-5 w-5')} />
                                    )}
                                </m.div>
                                <m.div
                                    animate={
                                        theme === 'dark'
                                            ? { opacity: [1, 0], scale: [1, 0.801] }
                                            : { opacity: [1, 0.01], scale: [1, 0.8] }
                                    }
                                    transition={{ ease: 'easeOut', duration: 0.8 }}
                                    className={clsx('absolute bottom-0')}
                                >
                                    {theme === 'dark' ? (
                                        <Sun className={clsx('h-5 w-5 -rotate-90')} />
                                    ) : (
                                        <Moon className={clsx('h-5 w-5 -rotate-90')} />
                                    )}
                                </m.div>
                            </m.div>
                        }
                    />
                    <ActionCenterButton
                        title={focusMode ? 'Focus: On' : 'Focus: Off'}
                        onClick={() => {
                            setFocusMode(!focusMode);
                        }}
                        active={focusMode}
                        icon={
                            <>

                                {focusMode === true ? (
                                    <div className={clsx('', 'fm:block')}>
                                        <Eye className={clsx('h-5 w-5')} />
                                    </div>
                                ) : (
                                    <div className={clsx('')}>
                                        <EyeOff className={clsx('h-5 w-5')} />
                                    </div>
                                )}

                            </>
                        }
                    />
                </m.div>
            </div>
        </m.div>
    );
}
