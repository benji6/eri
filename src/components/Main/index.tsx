import './style.css'
import * as React from 'react'

export type IProps = React.HTMLAttributes<HTMLElement>

export default function Main(props: IProps) {
  return <main {...props} className="e-main" />
}
