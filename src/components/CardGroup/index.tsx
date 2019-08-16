import * as React from 'react'
import './style.css'

export default function CardGroup(
  props: React.HtmlHTMLAttributes<HTMLDivElement>,
) {
  return <div {...props} className="e-card-group" e-util="slide-children-in" />
}
