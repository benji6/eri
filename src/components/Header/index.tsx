import './style.css'
import * as React from 'react'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  noMenu?: boolean
}

export default function Header({ noMenu, ...rest }: IProps) {
  const className = `e-header${noMenu ? ' e-header--no-menu' : ''}`
  return (
    <header className={className}>
      <div {...rest} />
    </header>
  )
}
