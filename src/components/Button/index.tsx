import * as React from 'react'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

class Button extends React.PureComponent<IProps> {
  render() {
    const { type = 'button', ...rest } = this.props

    return (
      <button {...rest} className="e-button e-button--primary" type={type} />
    )
  }
}

export default Button
