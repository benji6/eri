import * as React from 'react'
import { getCssVar } from '../../../src'
import './style.css'

interface IProps {
  varName: '--e-time-0' | '--e-time-1' | '--e-time-2'
}

export default function Time({ varName }: IProps) {
  const time = getCssVar(varName)

  return (
    <div className="d-time">
      <div className="d-time__visual-container">
        <div className="d-time__visual" style={{ animationDuration: time }} />
      </div>
      <pre>
        <code>animation-name: e-rotate;</code>
      </pre>
      <pre>
        <code>
          {varName}: {time};
        </code>
      </pre>
    </div>
  )
}
