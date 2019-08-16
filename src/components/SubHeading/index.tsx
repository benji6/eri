import * as React from 'react'
import './style.css'

export default function SubHeading(
  props: React.HTMLAttributes<HTMLSpanElement>,
) {
  return <span {...props} className="e-sub-heading" />
}
