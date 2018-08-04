import * as React from 'react'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import './style.css'

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: React.ReactNode
  label: React.ReactNode
}

class Select extends React.PureComponent<IProps> {
  render() {
    const { error, label, ...rest } = this.props

    return (
      <div className="e-field">
        <label className="e-select__label">
          <FieldLabel>{label}</FieldLabel>
          <select
            required
            {...rest}
            aria-invalid={Boolean(error)}
            className="e-select__input"
          />
        </label>
        <FieldError>{error}</FieldError>
      </div>
    )
  }
}

export default Select
