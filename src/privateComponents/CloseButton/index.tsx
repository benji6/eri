import * as React from 'react'
import { Icon } from '../..'
import './style.css'

export default function CloseButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      aria-label="close"
      className="e-close-button"
      e-util="ripple"
      type="button"
    >
      <Icon name="cross" />
    </button>
  )
}
