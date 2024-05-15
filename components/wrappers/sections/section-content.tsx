import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

const SectionContent = ({ children }: PropsWithChildren) => {
    return (
        <div
            className={clsx(
                'before:bg-grid-slate-300/80 before:absolute before:inset-0 before:z-[-1] before:[mask-image:linear-gradient(transparent,black,transparent)]',
                'dark:before:bg-grid-slate-800/100 mt-20 border-t border-divider-light dark:border-divider-dark dark:bg-transparent dark:from-[#0c1222] dark:via-[#0c1222]',
                'bg-transparent bg-gradient-to-b from-slate-100 via-slate-100',
                'before:[mask-image:linear-gradient(black, black, transparent)]'
            )}
        >
            <div className={clsx('content-wrapper pb-20')}>{children}</div>
        </div>
    );
}

export default SectionContent;
