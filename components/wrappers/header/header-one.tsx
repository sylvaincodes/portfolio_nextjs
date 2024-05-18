"use client"
import clsx from 'clsx'
import React from 'react'
import useOnScroll from '@/hooks/useOnScroll';
import Container from '@/components/ui/container';
import Row from '@/components/ui/row';
import NavLogo from '@/components/wrappers/header/navigations/nav-logo';
import NavMenus from '@/components/wrappers/header/navigations/nav-menus';
import IconsGroups from '@/components/wrappers/header/navigations/icons-groups';
import QuickAccess from '@/components/ui/quick-access';

const HeaderOne = () => {

    const isScrolled = useOnScroll(360);

    return (
        <header className={clsx('transition-all absolute h-[72px] top-0 bg-transparent inset-x-0 z-[1000]',
            isScrolled && 'animate-moov-down absolute top-0 sticky backdrop-blur shadow-sm dark:shadow-slate-500'
        )}>
            <QuickAccess />
            <Container>
                <Row className='justify-between'>
                    <Row className='gap-4 lg:gap-12 w-auto'>
                        <NavLogo href="/" title="home" />
                        <NavMenus />
                    </Row>
                    <IconsGroups />
                </Row>
            </Container>


        </header>
    )
}

export default HeaderOne