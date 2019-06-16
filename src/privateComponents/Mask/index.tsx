import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { getCssTime1 } from '../../utils/getCssVar'
import './style.css'

const documentElement = document.documentElement as HTMLElement
const portalEl = document.body.appendChild(document.createElement('div'))

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
}

const handleKeyDown = (onClose: IProps['onClose']) => (
  e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>,
) => {
  if (e.keyCode === 27 && onClose) onClose()
}

export default function Mask({ onClose, open, ...rest }: IProps) {
  const [scrollY, setScrollY] = React.useState(0)

  const openMask = () => {
    setScrollY(window.scrollY)
    documentElement.style.top = `${-window.scrollY}px`
    documentElement.setAttribute('e-util', 'no-scroll')
  }

  React.useEffect(() => {
    const keyDownListener = handleKeyDown(onClose)
    if (open) openMask()
    window.addEventListener('keydown', keyDownListener)
    return () => {
      window.removeEventListener('keydown', keyDownListener)
      documentElement.removeAttribute('e-util')
    }
  }, [])

  React.useEffect(() => {
    if (open) openMask()
    else {
      documentElement.removeAttribute('e-util')
      window.scrollTo(0, scrollY)
      documentElement.style.top = null
    }
  }, [open])

  return ReactDOM.createPortal(
    <div onKeyDown={handleKeyDown(onClose)}>
      <CSSTransition
        classNames="e-mask__mask-"
        in={open}
        mountOnEnter
        timeout={{ exit: getCssTime1() + 100 }}
        unmountOnExit
      >
        <div className="e-mask__mask" onClick={onClose} />
      </CSSTransition>
      <div {...rest} className="e-mask__container" />
    </div>,
    portalEl,
  )
}
