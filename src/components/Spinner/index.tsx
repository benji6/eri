import './style.css'
import * as React from 'react'

export default function Spinner(props: React.HTMLAttributes<HTMLDivElement>) {
  return <span {...props} className="e-spinner" />
}
