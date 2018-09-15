import classnames from 'classnames'
import { LocationDescriptor } from 'history' // tslint:disable-line no-implicit-dependencies
import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  sentiment?: 'negative'
  to?: LocationDescriptor
  variant?: 'secondary'
}

export default class Button extends React.PureComponent<IProps> {
  public render() {
    const {
      sentiment,
      to,
      variant = 'primary',
      type = 'submit', // Formik gets grumpy if you don't specify this
      ...rest
    } = this.props

    const className = classnames(`e-button e-button--${variant}`, {
      'e-button--negative': sentiment === 'negative',
    })

    return to ? (
      <Link {...rest} className={className} to={to} />
    ) : (
      <button {...rest} className={className} type={type} />
    )
  }
}
