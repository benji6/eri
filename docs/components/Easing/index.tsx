import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName:
    | '--e-easing-accelerate'
    | '--e-easing-decelerate'
    | '--e-easing-standard'
}

export default function Easing({ varName }: IProps) {
  const animationTimingFunction = getStylePropValue(varName)

  return (
    <div className="d-easing">
      <div className="d-easing__visual-container">
        <div className="d-easing__visual" style={{ animationTimingFunction }} />
      </div>
      <pre>
        <code>
          {varName}: {animationTimingFunction};
        </code>
      </pre>
      <pre>
        <code>animation-name: e-rotate;</code>
      </pre>
    </div>
  )
}
