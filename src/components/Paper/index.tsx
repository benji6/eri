import './style.css'
import * as React from 'react'

export default function Paper(
  props: React.HTMLAttributes<HTMLButtonElement | HTMLDivElement>,
) {
  return props.onClick ? (
    <button {...props} className="e-paper" e-util="ripple" type="button" />
  ) : (
    <div {...props} className="e-paper" />
  )
}
