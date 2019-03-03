import classnames from 'classnames'
import * as React from 'react'
import CloseButton from '../../privateComponents/CloseButton'
import Mask from '../../privateComponents/Mask'
import './style.css'

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose(): void
}

export default function Menu({ children, onClose, open, ...rest }: IProps) {
  const className = classnames('e-menu', {
    'e-menu--closed': !open,
  })

  return (
    <Mask onClose={onClose} open={open}>
      <nav {...rest} className={className} onClick={e => e.stopPropagation()}>
        <div className="e-menu__close-button">
          <CloseButton disabled={!open} onClick={onClose} />
        </div>
        {children}
      </nav>
    </Mask>
  )
}
