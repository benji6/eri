import * as React from 'react'
import Field from '../../privateComponents/Field'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import SupportiveText from '../../privateComponents/SupportiveText'
import Icon from '../Icon'
import './style.css'

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: React.ReactNode
  label: React.ReactNode
  supportiveText?: React.ReactNode
}

export default function Select({
  error,
  label,
  supportiveText,
  ...rest
}: IProps) {
  return (
    <Field>
      <label className="e-select__label">
        <FieldLabel>{label}</FieldLabel>
        <SupportiveText>{supportiveText}</SupportiveText>
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
