import * as React from 'react'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import './style.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly error?: React.ReactNode
  readonly label: React.ReactNode
}

export default class TextField extends React.PureComponent<IProps> {
  render() {
    const { label, error, ...rest } = this.props

    return (
      <div className="e-field">
        <label className="e-text-field__label">
          <FieldLabel>{label}</FieldLabel>
          <input required {...rest} aria-invalid={Boolean(error)} />
        </label>
        <FieldError>{error}</FieldError>
      </div>
    )
  }
}
