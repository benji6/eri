import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function Spinner(props: IProps) {
  return <span {...props} className="e-spinner" />
}
