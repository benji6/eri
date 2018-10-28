import * as React from 'react'
import Field from '../../privateComponents/Field'
import './style.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode
}

export default class Toggle extends React.PureComponent<IProps> {
  public render() {
    const { label, ...rest } = this.props

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
}
