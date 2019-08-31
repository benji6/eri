import * as React from 'react'
import './style.css'

export default function PaperGroup(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  return <div {...props} className="e-paper-group" e-util="slide-children-in" />
}
