import * as React from 'react'
import Group from './Group'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function Card(props: IProps) {
  return <div {...props} className="e-card" />
}

Card.Group = Group
