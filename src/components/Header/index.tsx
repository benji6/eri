import * as React from 'react'
import './style.css'

export default function Header(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className="e-header">
      <div {...props} />
    </header>
  )
}
