import * as React from 'react'
import { getCssVar } from '../../../src'
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
    | '--e-color-ground-less'
    | '--e-color-ground-more'
    | '--e-color-highlight-0'
    | '--e-color-highlight-1'
    | '--e-color-highlight-2'
    | '--e-color-highlight-3'
    | '--e-color-highlight-4'
    | '--e-color-highlight-5'
    | '--e-color-negative'
    | '--e-color-negative-analagous'
    | '--e-color-negative-less'
    | '--e-color-negative-more'
    | '--e-color-positive'
    | '--e-color-positive-less'
    | '--e-color-theme'
}

export default function Color({ varName }: IProps) {
  const color = getCssVar(varName)

  return (
    <div className="d-color">
      <div className="d-color__visual" style={{ background: color }} />
      <pre>
        <code>{varName}</code>
      </pre>
    </div>
  )
}
