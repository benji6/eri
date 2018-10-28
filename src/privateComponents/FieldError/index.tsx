import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function FieldError({ children, ...rest }: IProps) {
  return children ? (
    <div {...rest} aria-live="polite" className="e-field-error">
      {children}
    </div>
  ) : null
}
