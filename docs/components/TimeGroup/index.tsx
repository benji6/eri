import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function TimeGroup({ children }: IProps) {
  return <div className="d-time-group">{children}</div>
}
