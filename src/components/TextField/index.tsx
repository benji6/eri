import * as React from 'react'
import Field from '../../privateComponents/Field'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import SupportiveText from '../../privateComponents/SupportiveText'
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
        <SupportiveText>{supportiveText}</SupportiveText>
        <input required {...rest} aria-invalid={Boolean(error)} />
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  )
}
