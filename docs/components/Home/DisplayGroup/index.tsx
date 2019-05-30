import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function DisplayGroup({ children }: IProps) {
  return <div className="d-display-group">{children}</div>
}
