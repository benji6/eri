import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function Header(props: IProps) {
  return (
    <header className="e-header">
      <div className="e-header__container" {...props} />
    </header>
  )
}
