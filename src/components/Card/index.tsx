import * as React from 'react'
import './style.css'

interface IProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement | HTMLDivElement> {}

export default function Card(props: IProps) {
  if (!props.onClick) return <div {...props} className="e-card" />
  return <button {...props} className="e-card" e-util="ripple" />
}
