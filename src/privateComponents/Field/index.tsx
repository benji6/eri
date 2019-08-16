import * as React from 'react'
import './style.css'

export default function Field({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={`e-field${className ? ` ${className}` : ''}`} />
  )
}
