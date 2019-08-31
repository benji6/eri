import * as React from 'react'
import Icon from '../Icon'

export default function MenuButton(
  props: React.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      aria-label="open menu"
      className="e-menu-button"
      e-util="ripple"
    >
      <Icon name="menu" size="3" />
    </button>
  )
}
