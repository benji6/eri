import classnames from 'classnames'
import * as React from 'react'
import Spinner from '../Spinner'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

class Button extends React.PureComponent<IProps> {
  render(): React.ReactNode {
    const { children, disabled, type = 'submit', ...rest } = this.props

    return (
      <button
        {...rest}
        className="e-button e-button--primary"
        disabled={disabled}
        type={type}
      >
        {disabled ? <Spinner variation="ground" /> : children}
      </button>
    )
  }
}

export default Button
