import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  noSlide?: boolean
}

export default function PaperGroup({ noSlide, ...rest }: IProps) {
  return (
    <div
      {...rest}
      className="e-paper-group"
      {...(noSlide ? undefined : { 'e-util': 'slide-children-in' })}
    />
  )
}
