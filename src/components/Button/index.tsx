import * as React from 'react'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary'
}

class Button extends React.PureComponent<IProps> {
  render() {
    const { type = 'submit', variant = 'primary', ...rest } = this.props

    const className = `e-button e-button--${variant}`

    return <button {...rest} className={className} type={type} />
  }
}

export default Button
