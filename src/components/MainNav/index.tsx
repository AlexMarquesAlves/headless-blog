'use client'

import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Icons } from '../Icons'

interface MainNavProps {
  children?: ReactNode
}

export function MainNav({ children }: MainNavProps) {
  return (
    <>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link href={`/`} className="flex items-center mr-6 space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
      </nav>
      {children}
    </>
  )
}
