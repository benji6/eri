import './style.css'
import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import CloseButton from '../../privateComponents/CloseButton'
import Mask from '../../privateComponents/Mask'
import { getCssTime1 } from '../../utils/getCssVar'
import useWidth from '../../hooks/useWidth'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose(): void
}

export default function Menu({ children, onClose, open, ...rest }: IProps) {
  const isWideResolution = useWidth() >= 1024

  return (
    <Mask onClose={onClose} open={open && !isWideResolution}>
      <CSSTransition
        classNames="e-menu-"
        in={isWideResolution || open}
        mountOnEnter
        timeout={{ exit: getCssTime1() + 100 }}
        unmountOnExit
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        <nav {...rest} className="e-menu" onClick={(e) => e.stopPropagation()}>
          {!isWideResolution && (
            <div className="e-menu__close-button">
              <CloseButton onClick={onClose} />
            </div>
          )}
          {children}
        </nav>
      </CSSTransition>
    </Mask>
  )
}
