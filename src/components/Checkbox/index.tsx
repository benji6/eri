import * as React from 'react'
import FieldError from '../../privateComponents/FieldError'
import './style.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode
  label: React.ReactNode
}

class Checkbox extends React.PureComponent<IProps> {
  public render() {
    const { label, error, ...rest } = this.props

    return (
      <div className="e-checkbox">
        <label className="e-checkbox__label">
          <input
            {...rest}
            aria-invalid={!!error}
            className="e-checkbox__input"
            type="checkbox"
          />
          <span className="e-checkbox__appearance">✓</span>
          <span className="e-checkbox__label-copy">{label}</span>
        </label>
        <FieldError>{error}</FieldError>
      </div>
    )
  }
}

export default Checkbox
