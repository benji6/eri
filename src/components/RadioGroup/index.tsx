import * as React from 'react'
import Field from '../../privateComponents/Field'
import FieldError from '../../privateComponents/FieldError'
import FieldLabel from '../../privateComponents/FieldLabel'
import RadioButton from '../RadioButton'
import './style.css'

interface IProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: Array<React.ReactElement<RadioButton>>
  disabled?: boolean
  error?: React.ReactNode
  label: React.ReactNode
}

export default class RadioGroup extends React.Component<IProps> {
  public render() {
    const { error, label, children, ...rest } = this.props

    return (
      <Field>
        <fieldset {...rest} aria-invalid={!!error} className="e-radio-group">
          <legend className="e-radio-group__legend">
            <FieldLabel>{label}</FieldLabel>
          </legend>
          <div className="e-radio-group__children">{children}</div>
          <FieldError>{error}</FieldError>
        </fieldset>
      </Field>
    )
  }
}
