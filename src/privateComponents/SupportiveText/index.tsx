import * as React from 'react'
import './style.css'

export default function SupportiveText(
  props: React.HTMLAttributes<HTMLSpanElement>,
) {
  return props.children ? (
    <span {...props} className="e-supportive-text" />
  ) : null
}
