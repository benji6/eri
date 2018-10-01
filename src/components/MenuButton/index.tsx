import * as React from 'react'
import Icon from '../Icon'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

export default class MenuList extends React.PureComponent<IProps> {
  public render() {
    return (
      <button {...this.props} className="e-menu-button">
        <Icon name="menu" size="3" />
      </button>
    )
  }
}
