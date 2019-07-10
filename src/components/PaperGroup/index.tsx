import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function PaperGroup(props: IProps) {
  return <div {...props} className="e-paper-group" e-util="slide-children-in" />
}
