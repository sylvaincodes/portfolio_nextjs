
import Link from 'next/link'
import React from 'react'
import Logo from '../../../ui/logo';
import { usePathname } from 'next/navigation';

const NavLogo = ({ href, title }: { href: string; title: string }) => {

    const pathname = usePathname()
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className='flex h-9 items-center gap-2 rounded-xl px-2'
            aria-label={title}
        >
            <Logo active={isActive} />
        </Link>
    )
}

export default NavLogo