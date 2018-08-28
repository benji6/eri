import classnames from 'classnames'
import * as React from 'react'
import Card from '../Card'
import './style.css'

const documentElementClassList = document.documentElement.classList

interface IProps {
  children: React.ReactNode
  onClose(): void
  open: boolean
  title: React.ReactNode
}

class Dialog extends React.Component<IProps> {
  el: HTMLDivElement | null = null

  componentDidMount() {
    if (this.props.open) documentElementClassList.add('e-overflow-hidden')
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (this.props.open === nextProps.open) return

    if (nextProps.open) documentElementClassList.add('e-overflow-hidden')
    else documentElementClassList.remove('e-overflow-hidden')
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    documentElementClassList.remove('e-overflow-hidden')
  }

  handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    this.props.onClose()

  handleKeyDown = (e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 27) this.props.onClose()
  }

  handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === this.el) this.props.onClose()
  }

  render() {
    const { children, onClose, open, title, ...rest } = this.props

    const className = classnames('e-dialog', {
      'e-dialog--closed': !open,
    })

    return (
      <div>
        <div
          {...rest}
          aria-describedby="e-dialog-desc"
          aria-hidden={!open}
          aria-labelledby="e-dialog-title"
          className={className}
          onClick={this.handleMaskClick}
          onKeyDown={this.handleKeyDown}
          ref={el => (this.el = el)}
          role="dialog"
        >
          <div className="e-dialog__dialog">
            <Card>
              <div className="e-dialog__content">
                <h4 id="e-dialog-title">{title}</h4>
                <button
                  aria-hidden={!open}
                  aria-label="close"
                  className="e-dialog__close"
                  disabled={!open}
                  onClick={this.handleCloseClick}
                >
                  ×
                </button>
                <div id="e-dialog-desc">{children}</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog
