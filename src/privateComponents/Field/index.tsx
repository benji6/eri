import './style.css'
import * as React from 'react'

export default function Field({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={`e-field${className ? ` ${className}` : ''}`} />
  )
}
