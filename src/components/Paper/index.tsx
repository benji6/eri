import './style.css'
import * as React from 'react'

interface IProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  side?: boolean
}

export default function Paper({ side, ...rest }: IProps) {
  const className = `e-paper${side ? ' e-paper--side' : ''}`
  return rest.onClick ? (
    <button {...rest} className={className} e-util="ripple" type="button" />
  ) : (
    <div {...rest} className={className} />
  )
}
