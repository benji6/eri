import classnames from 'classnames'
import * as React from 'react'
import Mask from '../../privateComponents/Mask'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose(): void
}

export default class Menu extends React.PureComponent<IProps> {
  public render() {
    const { onClose, open } = this.props

    const className = classnames('e-menu', {
      'e-menu--closed': !open,
    })

    return (
      <Mask onClose={onClose} open={open}>
        <nav
          {...this.props}
          className={className}
          onClick={e => e.stopPropagation()}
        />
      </Mask>
    )
  }
}
