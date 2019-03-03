import classnames from 'classnames'
import * as React from 'react'
import './style.css'

const documentElement = document.documentElement as HTMLElement
const documentElementClassList = documentElement.classList

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose(): void
}

const handleKeyDown = (onClose: IProps['onClose']) => (
  e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>,
) => {
  if (e.keyCode === 27) onClose()
}

export default function Mask({ onClose, open, ...rest }: IProps) {
  const [scrollY, setScrollY] = React.useState(0)

  const className = classnames('e-mask', {
    'e-mask--closed': !open,
  })

  const openMask = () => {
    setScrollY(window.scrollY)
    documentElement.style.top = `${-window.scrollY}px`
    documentElementClassList.add('e-no-scroll')
  }

  React.useEffect(() => {
    const keyDownListener = handleKeyDown(onClose)
    if (open) openMask()
    window.addEventListener('keydown', keyDownListener)
    return () => {
      window.removeEventListener('keydown', keyDownListener)
      documentElementClassList.remove('e-no-scroll')
    }
  }, [])

  React.useEffect(() => {
    if (open) openMask()
    else {
      documentElementClassList.remove('e-no-scroll')
      window.scrollTo(0, scrollY)
      documentElement.style.top = null
    }
  }, [open])

  return (
    <div
      {...rest}
      aria-hidden={!open}
      className={className}
      onClick={onClose}
      onKeyDown={handleKeyDown(onClose)}
    />
  )
}
