import * as React from 'react'
import './style.css'

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  to?: string
  variant?: 'secondary'
}

export default class Button extends React.PureComponent<IProps> {
  render() {
    const { to, type = 'submit', variant = 'primary', ...rest } = this.props

    const className = `e-button e-button--${variant}`

    return React.createElement(to ? 'a' : 'button', {
      ...rest,
      className,
      ...(to ? { href: to } : { type }),
    })
  }
}
