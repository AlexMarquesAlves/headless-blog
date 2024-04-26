'use client'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { Icons } from '../Icons'

interface MainNavProps {
  children?: ReactNode
}

export function MainNav({ children }: MainNavProps) {
  const pathname = usePathname()

  return (
    <>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link href={`/`} className="flex items-center mr-6 space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>

        <Link
          href={`/blog`}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === '/blog' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Blog
        </Link>
      </nav>
      {children}
    </>
  )
}
