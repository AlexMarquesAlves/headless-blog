import { ReactNode } from 'react'

interface MainNavProps {
  children: ReactNode
}

export function MainNav({ children }: MainNavProps) {
  return (
    <>
      <h1>MainNav</h1>
      {children}
    </>
  )
}
