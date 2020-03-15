import * as React from 'react'
import './style.css'

export type IProps = React.HTMLAttributes<HTMLElement>

export default function Main(props: IProps) {
  return <main {...props} className="e-main" />
}
