import { ReactNode } from 'react'

interface IconsProps {
  children?: ReactNode
}

export function Icons({ children }: IconsProps) {
  return (
    <>
      <h1>Icons</h1>
      {children}
    </>
  )
}
