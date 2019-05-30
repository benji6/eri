import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string
  name: React.ReactNode
}

export default function ColorGroup({ name, description, ...rest }: IProps) {
  return (
    <>
      <h4>{name}</h4>
      {description && <p>{description}</p>}
      <div {...rest} className="d-color-group__color-container" />
    </>
  )
}
