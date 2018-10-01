import * as React from 'react'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default class Header extends React.PureComponent<IProps> {
  public render() {
    return (
      <header className="e-header">
        <div className="e-header__container" {...this.props} />
      </header>
    )
  }
}
