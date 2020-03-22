import './style.css'
import * as React from 'react'

export interface IProps extends React.HTMLAttributes<HTMLElement> {
  noMenu?: boolean
}

export default function Main({ noMenu, ...rest }: IProps) {
  const className = `e-main${noMenu ? ' e-main--no-menu' : ''}`
  return <main {...rest} className={className} />
}
