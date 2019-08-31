import * as React from 'react'
import './style.css'

export default function ButtonGroup(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  return <div {...props} className="e-button-group" />
}
