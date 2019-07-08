import * as React from 'react'
import './style.css'

export default function Paper(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div {...props} className="e-paper" />
}
