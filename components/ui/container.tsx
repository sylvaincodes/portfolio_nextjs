import clsx from 'clsx';
import * as React from 'react'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={clsx('container lg:mx-auto h-full w-full', className)}>
            {children}
        </div>
    )
}

export default Container
