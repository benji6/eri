import * as React from 'react'
import { Icon } from '../..'
import './style.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default class CloseButton extends React.PureComponent<IProps> {
  public render() {
    return (
      <button
        {...this.props}
        aria-label="close"
        className="e-close-button"
        type="button"
      >
        <Icon name="cross" />
      </button>
    )
  }
}
