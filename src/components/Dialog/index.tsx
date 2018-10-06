import classnames from 'classnames'
import * as React from 'react'
import CloseButton from '../../privateComponents/CloseButton'
import Mask from '../../privateComponents/Mask'
import Card from '../Card'
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
                  <CloseButton
                    aria-hidden={!open}
                    disabled={!open}
                    onClick={this.handleCloseClick}
                  />
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
