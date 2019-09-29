import * as React from 'react'
import './style.css'

interface IProps {
  varName: '--e-box-shadow-0' | '--e-box-shadow-1' | '--e-box-shadow-2'
}

export default function BoxShadow({ varName }: IProps) {
  return (
    <>
      <div
        className="d-box-shadow__visual"
        style={{ boxShadow: `var(${varName})` }}
      />
      <pre>
        <code>{varName}</code>
      </pre>
    </>
  )
}
