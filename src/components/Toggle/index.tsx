import './style.css'
import * as React from 'react'
import Field from '../../privateComponents/Field'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode
}

export default function Toggle({ label, ...rest }: IProps) {
  return (
    <Field className="e-toggle">
      <label className="e-toggle__label">
        <input {...rest} className="e-toggle__input" type="checkbox" />
        <span className="e-toggle__appearance" />
        <span className="e-toggle__label-copy">{label}</span>
      </label>
    </Field>
  )
}
