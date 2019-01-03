import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function CardGroup(props: IProps) {
  return <div {...props} className="e-card-group" />
}
