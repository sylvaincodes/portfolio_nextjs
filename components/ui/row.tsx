import clsx from 'clsx';
import * as React from 'react'

const Row = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={clsx('flex items-center h-full w-full', className)}>
            {children}
        </div>
    )
}

export default Row
