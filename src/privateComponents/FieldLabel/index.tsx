import * as React from 'react'
import './style.css'

export default function FieldLabel(
  props: React.HTMLAttributes<HTMLSpanElement>,
) {
  return <span {...props} className="e-field-label" />
}
