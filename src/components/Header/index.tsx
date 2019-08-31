import * as React from 'react'

export default function Header(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header>
      <div {...props} />
    </header>
  )
}
