import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function Header(props: IProps) {
  return (
    <header className="header">
      <div {...props} className="header__container" />
    </header>
  )
}
