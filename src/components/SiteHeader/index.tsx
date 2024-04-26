import { ReactNode } from 'react'

interface SiteHeaderProps {
  children: ReactNode
}

export function SiteHeader({ children }: SiteHeaderProps) {
  return (
    <>
      <h1>SiteHeader</h1>
      {children}
    </>
  )
}
