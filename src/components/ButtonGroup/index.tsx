import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function ButtonGroup(props: IProps) {
  return <div {...props} className="e-button-group" />
}
