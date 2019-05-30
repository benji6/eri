import * as React from 'react'
import './style.css'

interface IProps {
  varName:
    | '--e-easing-accelerate'
    | '--e-easing-decelerate'
    | '--e-easing-standard'
}

export default function Easing({ varName }: IProps) {
  return (
    <div className="d-easing">
      <div className="d-easing__visual-container">
        <div
          className="d-easing__visual"
          style={{ animationTimingFunction: `var(${varName})` }}
        />
      </div>
      <pre>
        <code>{varName}</code>
      </pre>
    </div>
  )
}
