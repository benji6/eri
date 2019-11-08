import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { getCssTime0 } from '../../utils/getCssVar'
import './style.css'

const portalEl =
  typeof document !== 'undefined' &&
  document.body.appendChild(document.createElement('div'))

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hide?: boolean
}

export default function Fab({
  hide = false,
  type = 'submit', // Formik gets grumpy if you don't specify this
  ...rest
}: IProps) {
  return portalEl
    ? ReactDOM.createPortal(
        <CSSTransition
          classNames="e-fab-"
          in={!hide}
          mountOnEnter
          timeout={{ exit: getCssTime0() + 100 }}
          unmountOnExit
        >
          <button {...rest} className="e-fab" type={type} />
        </CSSTransition>,
        portalEl,
      )
    : null
}
