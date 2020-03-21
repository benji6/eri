import './style.css'
import * as React from 'react'

export default function Card(
  props:
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.HTMLAttributes<HTMLDivElement>,
) {
  if (!props.onClick)
    return (
      <div
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
        className="e-card"
      />
    )
  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      aria-label="View card"
      className="e-card"
      e-util="ripple"
      type="button"
    />
  )
}
