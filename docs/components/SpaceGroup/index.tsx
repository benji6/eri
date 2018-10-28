import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SpaceGroup({ children, ...rest }: IProps) {
  return <div className="d-space-group">{children}</div>
}
