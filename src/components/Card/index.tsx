import * as React from 'react'
import './style.css'

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
      className="e-card"
      e-util="ripple"
      type="button"
    />
  )
}
