import * as React from 'react'
import './style.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  children: React.ReactNode
}

export default function RadioButton({ children, ...rest }: IProps) {
  return (
    <label className="e-radio-button">
      <input {...rest} className="e-radio-button__input" type="radio" />
      <div className="e-radio-button__appearance">{children}</div>
    </label>
  )
}
