import * as React from 'react'
import './style.css'

export default function EriIcon() {
  return (
    <svg
      className="d-eri-icon"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width=".75"
      viewBox="0 0 8 8"
    >
      <line x1="1.5" y1="1.5" x2="1.5" y2="6.5" />
      <line x1="1.5" y1="1.5" x2="3.5" y2="1.5" />
      <line x1="1.5" y1="4" x2="2.5" y2="4" />
      <line x1="1.5" y1="6.5" x2="3.5" y2="6.5" />
      <line x1="4.5" y1="4" x2="4.5" y2="6.5" />
      <line x1="4.5" y1="4" x2="5.5" y2="4" />
      <line x1="6.5" y1="4" x2="6.5" y2="6.5" />
      <line x1="6.5" y1="2.75" x2="6.5" y2="2.75" />
    </svg>
  )
}
