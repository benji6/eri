import * as React from 'react'
import getStylePropValue from '../../utils/getStylePropValue'
import './style.css'

interface IProps {
  varName:
    | '--e-color-accent'
    | '--e-color-accent-analagous'
    | '--e-color-accent-less'
    | '--e-color-accent-more'
    | '--e-color-balance'
    | '--e-color-balance-less'
    | '--e-color-balance-more'
    | '--e-color-figure'
    | '--e-color-figure-less'
    | '--e-color-figure-more'
    | '--e-color-ground'
    | '--e-color-negative'
    | '--e-color-negative-analagous'
    | '--e-color-negative-less'
    | '--e-color-negative-more'
    | '--e-color-positive'
    | '--e-color-positive-less'
}

export default function Color({ varName }: IProps) {
  const color = getStylePropValue(varName)

  return (
    <div className="d-color">
      <div className="d-color__visual" style={{ background: color }} />
      <pre>
        <code>{varName}</code>
      </pre>
      <pre>
        <code>{color}</code>
      </pre>
    </div>
  )
}
