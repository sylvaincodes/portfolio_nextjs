import clsx from 'clsx'
import React from 'react'
import { TwitterIcon, GithubIcon } from 'lucide-react'
import NavIcon from './nav-icon'
import { NavIconQuickAccess } from './nav-icon-quick-acess'

const IconsGroups = () => {
  return (
    <ul className={clsx('flex items-center w-full justify-end')}>
      <li className={clsx('hidden', 'sm:block')}>
        <NavIcon
          href="https://twitter.com/sylvaincodes"
          icon={<TwitterIcon className={clsx('h-5 w-5')} />}
          title="Twitter"
        />
      </li>
      <li className={clsx('hidden', 'sm:block')}>
        <NavIcon
          href="https://github.com/sylvaincodes"
          icon={<GithubIcon className={clsx('h-5 w-5')} />}
          title="GitHub"
        />
      </li>
      <li className={clsx('hidden', 'sm:block')}>
        <div
          className={clsx(
            'ml-2 mr-4 h-3 w-[1px] bg-slate-200',
            'dark:bg-slate-700'
          )}
        />
      </li>
      <li className={clsx('')}>
        <NavIconQuickAccess />
      </li>
    </ul>
  )
}

export default IconsGroups
