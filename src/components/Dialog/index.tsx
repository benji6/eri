import classnames from 'classnames'
import * as React from 'react'
import Mask from '../../privateComponents/Mask'
import Card from '../Card'
import Icon from '../Icon'
import './style.css'

interface IProps {
  children: React.ReactNode
  open: boolean
  title: React.ReactNode
  onClose(): void
}

export default class Dialog extends React.Component<IProps> {
  public render() {
    const { children, onClose, open, title, ...rest } = this.props

    const className = classnames('e-dialog', {
      'e-dialog--open': open,
    })

    return (
      <Mask onClose={onClose} open={open}>
        <div
          {...rest}
          aria-describedby="e-dialog-desc"
          aria-labelledby="e-dialog-title"
          className={className}
          role="dialog"
        >
          <div className="e-dialog__dialog">
            <Card onClick={e => e.stopPropagation()}>
              <div className="e-dialog__content">
                <div className="e-dialog__header">
                  <h4 id="e-dialog-title">{title}</h4>
                  <button
                    aria-hidden={!open}
                    aria-label="close"
                    className="e-dialog__close"
                    disabled={!open}
                    onClick={this.handleCloseClick}
                  >
                    <Icon name="cross" />
                  </button>
                </div>
                <div id="e-dialog-desc">{children}</div>
              </div>
            </Card>
          </div>
        </div>
      </Mask>
    )
  }

  private handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    this.props.onClose()
}
