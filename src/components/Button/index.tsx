import * as React from 'react'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

class Button extends React.PureComponent<IProps> {
  render() {
    return <button {...this.props} className="e-button e-button--primary" />
  }
}

export default Button
