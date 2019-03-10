import classnames from 'classnames'
import * as React from 'react'
import CloseButton from '../../privateComponents/CloseButton'
import Mask from '../../privateComponents/Mask'
import './style.css'

interface IProps {
  children: React.ReactNode
  disableClose?: boolean
  open: boolean
  title: React.ReactNode
  onClose(): void
}

export default function Dialog({
  children,
  disableClose,
  onClose,
  open,
  title,
  ...rest
}: IProps) {
  const className = classnames('e-dialog', {
    'e-dialog--closed': !open,
  })

  return (
    <Mask onClose={disableClose ? undefined : onClose} open={open}>
      <div
        {...rest}
        aria-describedby="e-dialog-desc"
        aria-labelledby="e-dialog-title"
        className={className}
        onClick={disableClose ? undefined : onClose}
        role="dialog"
      >
        <div className="e-dialog__dialog" onClick={e => e.stopPropagation()}>
          <div className="e-dialog__content">
            <div className="e-dialog__header">
              <h4 id="e-dialog-title">{title}</h4>
              <CloseButton disabled={disableClose || !open} onClick={onClose} />
            </div>
            <div id="e-dialog-desc">{children}</div>
          </div>
        </div>
      </div>
    </Mask>
  )
}
