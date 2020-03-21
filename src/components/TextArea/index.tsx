import './style.css'
import * as React from 'react'
import Field from '../../privateComponents/Field'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import SupportiveText from '../../privateComponents/SupportiveText'

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: React.ReactNode
  label: React.ReactNode
  supportiveText?: React.ReactNode
}

export default function TextArea({
  label,
  error,
  supportiveText,
  ...rest
}: IProps) {
  return (
    <Field>
      <label className="e-text-area__label">
        <FieldLabel>{label}</FieldLabel>
        <SupportiveText>{supportiveText}</SupportiveText>
        <textarea required {...rest} aria-invalid={Boolean(error)} />
      </label>
      <FieldError>{error}</FieldError>
    </Field>
  )
}
