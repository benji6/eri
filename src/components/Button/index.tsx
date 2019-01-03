import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sentiment?: 'negative'
  variant?: 'primary' | 'secondary'
}

export default class Button extends React.Component<IProps> {
  public render() {
    const {
      sentiment,
      variant = 'primary',
      type = 'submit', // Formik gets grumpy if you don't specify this
      ...rest
    } = this.props
    const className = classnames(`e-button e-button--${variant}`, {
      'e-button--negative': sentiment === 'negative',
    })

    return <button {...rest} className={className} type={type} />
  }
}
