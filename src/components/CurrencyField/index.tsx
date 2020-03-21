import './style.css'
import * as React from 'react'
import Field from '../../privateComponents/Field'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode
  integer?: boolean
  label: React.ReactNode
}

export default function CurrencyField({
  error,
  integer,
  label,
  ...rest
}: IProps) {
  return (
    <Field>
      <label className="e-currency-field__label">
        <FieldLabel>{label}</FieldLabel>
        <span className="e-currency-field__input-container">
          <input
            autoComplete="off"
            required
            {...rest}
            aria-invalid={Boolean(error)}
            className="e-currency-field__input"
            inputMode={integer ? 'numeric' : 'decimal'}
            pattern={integer ? '[0-9]*' : '[0-9]*'}
          />
        </span>
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  )
}
