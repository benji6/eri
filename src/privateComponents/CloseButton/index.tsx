import * as React from 'react'
import { Icon } from '../..'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function CloseButton(props: IProps) {
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
