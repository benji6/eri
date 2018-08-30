import classnames from 'classnames'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  sentiment?: 'negative'
  to?: string
  variant?: 'secondary'
}

export default class Button extends React.PureComponent<IProps> {
  render() {
    const { sentiment, to, variant = 'primary', ...rest } = this.props

    const className = classnames(`e-button e-button--${variant}`, {
      'e-button--negative': sentiment === 'negative',
    })

    return to ? (
      <Link {...rest} className={className} to={to} />
    ) : (
      <button {...rest} className={className} />
    )
  }
}
