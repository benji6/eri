import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  name: React.ReactNode
}

export default function ColorGroup({ name, ...rest }: IProps) {
  return (
    <>
      <h3>{name}</h3>
      <div {...rest} className="d-color-group__color-container" />
    </>
  )
}
