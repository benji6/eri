import * as React from 'react'
import Icon from '../Icon'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

export default function MenuButton(props: IProps) {
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
