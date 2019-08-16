import * as React from 'react'
import './style.css'

export default function Spinner(
  props: React.HtmlHTMLAttributes<HTMLDivElement>,
) {
  return <span {...props} className="e-spinner" />
}
