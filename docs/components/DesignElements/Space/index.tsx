import * as React from 'react'
import './style.css'

interface IProps {
  varName:
    | '--e-border-radius-0'
    | '--e-border-radius-1'
    | '--e-border-width-0'
    | '--e-border-width-1'
    | '--e-font-size-0'
    | '--e-font-size-1'
    | '--e-font-size-2'
    | '--e-font-size-3'
    | '--e-font-size-4'
    | '--e-space-0'
    | '--e-space-1'
    | '--e-space-2'
    | '--e-space-3'
    | '--e-space-4'
}

export default function Space({ varName }: IProps) {
  return (
    <>
      <div className="d-space__visual" style={{ width: `var(${varName})` }} />
      <pre>
        <code>{varName}</code>
      </pre>
    </>
  )
}
