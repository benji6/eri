import * as React from 'react'
import FieldLabel from '../../privateComponents/FieldLabel'
import './style.css'

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: React.ReactNode
}

class Select extends React.PureComponent<IProps> {
  render() {
    const { label, ...rest } = this.props

    return (
      <label className="e-select">
        <FieldLabel>{label}</FieldLabel>
        <select aria-required {...rest} className="e-select__input" />
      </label>
    )
  }
}

export default Select
