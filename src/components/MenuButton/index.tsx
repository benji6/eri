import * as React from 'react'
import Icon from '../Icon'
import './style.css'

export default function MenuButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button {...props} className="e-menu-button" e-util="ripple">
      <span className="e-menu-button__text">Menu</span>
      <Icon name="menu" size="3" />
    </button>
  )
}
