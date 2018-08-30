import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  sentiment?: 'negative'
  to?: string
  variant?: 'secondary'
}

export default class Button extends React.PureComponent<IProps> {
  render() {
    const {
      sentiment,
      to,
      type = 'submit',
      variant = 'primary',
      ...rest
    } = this.props

    const className = classnames(`e-button e-button--${variant}`, {
      'e-button--negative': sentiment === 'negative',
    })

    return React.createElement(to ? 'a' : 'button', {
      ...rest,
      className,
      ...(to ? { href: to } : { type }),
    })
  }
}
