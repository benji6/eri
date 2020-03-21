import './style.css'
import * as React from 'react'

export default function Header(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className="e-header">
      <div {...props} />
    </header>
  )
}
