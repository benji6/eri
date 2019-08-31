import * as React from 'react'
import './style.css'

export default function Spinner(props: React.HTMLAttributes<HTMLDivElement>) {
  return <span {...props} className="e-spinner" />
}
