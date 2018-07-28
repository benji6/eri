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
      <label className="e-select">
        <FieldLabel>{label}</FieldLabel>
        <select
          aria-required
          {...rest}
          aria-invalid={Boolean(error)}
          className="e-select__input"
        />
        <FieldError>{error}</FieldError>
      </label>
    )
  }
}

export default Select
