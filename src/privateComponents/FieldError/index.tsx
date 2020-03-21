import './style.css'
import * as React from 'react'

export default function FieldError({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return children ? (
    <div {...rest} aria-live="polite" className="e-field-error">
      {children}
    </div>
  ) : null
}
