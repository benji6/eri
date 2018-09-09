import * as React from 'react'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import './style.css'
import Icon from '../Icon'
import Field from '../../privateComponents/Field'

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: React.ReactNode
  label: React.ReactNode
}

export default class Select extends React.PureComponent<IProps> {
  render() {
    const { error, label, ...rest } = this.props

    return (
      <Field>
        <label className="e-select__label">
          <FieldLabel>{label}</FieldLabel>
          <span className="e-select__select-container">
            <select
              required
              {...rest}
              aria-invalid={Boolean(error)}
              className="e-select__select"
            />
            <span className="e-select__icon">
              <Icon name="down" />
            </span>
          </span>
        </label>
        <FieldError>{error}</FieldError>
      </Field>
    )
  }
}
