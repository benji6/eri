import * as React from 'react'
import './style.css'

export default function Paper(
  props: React.HtmlHTMLAttributes<HTMLButtonElement | HTMLDivElement>,
) {
  return props.onClick ? (
    <button {...props} className="e-paper" e-util="ripple" type="button" />
  ) : (
    <div {...props} className="e-paper" />
  )
}
