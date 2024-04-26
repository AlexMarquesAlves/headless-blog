'use client'

import { ReactNode } from 'react'

interface MainNavProps {
  children?: ReactNode
}

export function MainNav({ children }: MainNavProps) {
  return (
    <>
      <nav>MainNav</nav>
      {children}
    </>
  )
}
