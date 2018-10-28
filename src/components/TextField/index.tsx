import * as React from 'react'
import Field from '../../privateComponents/Field'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import './style.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode
  label: React.ReactNode
  supportiveText?: React.ReactNode
}

export default function TextField({
  label,
  error,
  supportiveText,
  ...rest
}: IProps) {
  return (
    <Field>
      <label className="e-text-field__label">
        <FieldLabel>{label}</FieldLabel>
        {supportiveText && (
          <span className="e-text-field__supportive-text">
            {supportiveText}
          </span>
        )}
        <input required {...rest} aria-invalid={Boolean(error)} />
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  )
}
