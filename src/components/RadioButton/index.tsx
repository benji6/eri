import * as React from 'react'
import './style.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  value: string
  children: React.ReactNode
}

export default class RadioButton extends React.PureComponent<IProps> {
  public render() {
    const { children, ...rest } = this.props

    return (
      <label className="e-radio-button">
        <input {...rest} className="e-radio-button__input" type="radio" />
        <div className="e-radio-button__appearance">{children}</div>
      </label>
    )
  }
}
