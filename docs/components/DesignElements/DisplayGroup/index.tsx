import * as React from 'react'
import './style.css'

export default function DisplayGroup({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="d-display-group">{children}</div>
}
