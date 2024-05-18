import React from 'react'
import { routes } from '@/constants/index'
import { NavLink } from './nav-link'
import NavLinkExpanded from './nav-link-expanded'
import NavLinkDropdown from './nav-link-dropdown'
import clsx from 'clsx'


const NavMenus = () => {
    return (
        <>
            <nav className=''>
                <ul className='flex gap-8 items-center hidden lg:flex'>

                    {
                        routes && routes.map((item, idx) => (
                            <li key={idx}>
                                <NavLink title={item.title} href={item.href} icon={item.icon} />
                            </li>
                        ))
                    }


                    {/* <li className={clsx('hidden lg:block')}>
                        <NavLinkExpanded title="Work" items={worksRoutes} />
                    </li> */}

                </ul>
                <ul className='lg:hidden'>
                    <li>
                        <NavLinkDropdown title="Menu" items={routes} />
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default NavMenus
