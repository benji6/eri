import * as React from 'react'
import './style.css'

interface IProps {
  varName: '--e-time-0' | '--e-time-1' | '--e-time-2'
}

export default function Time({ varName }: IProps) {
  return (
    <div className="d-time">
      <div className="d-time__visual-container">
        <div
          className="d-time__visual"
          style={{ animationDuration: `var(${varName})` }}
        />
      </div>
      <pre>
        <code>{varName}</code>
      </pre>
    </div>
  )
}
