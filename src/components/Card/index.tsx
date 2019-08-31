import * as React from 'react'
import './style.css'

export default function Card(
  props: React.HTMLAttributes<HTMLButtonElement | HTMLDivElement>,
) {
  if (!props.onClick) return <div {...props} className="e-card" />
  return <button {...props} className="e-card" e-util="ripple" type="button" />
}
