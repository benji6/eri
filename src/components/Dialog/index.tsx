import * as React from 'react'
import Mask from '../../privateComponents/Mask'
import Card from '../Card'
import Icon from '../Icon'
import './style.css'

const documentElementClassList = (document.documentElement as HTMLElement)
  .classList

interface IProps {
  children: React.ReactNode
  open: boolean
  title: React.ReactNode
  onClose(): void
}

export default class Dialog extends React.Component<IProps> {
  private el: HTMLDivElement | null = null

  public componentDidMount() {
    if (this.props.open) {
      documentElementClassList.add('e-overflow-hidden')
    }
    window.addEventListener('keydown', this.handleKeyDown)
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (this.props.open === nextProps.open) {
      return
    }

    if (nextProps.open) {
      documentElementClassList.add('e-overflow-hidden')
    } else {
      documentElementClassList.remove('e-overflow-hidden')
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    documentElementClassList.remove('e-overflow-hidden')
  }

  public render() {
    const { children, onClose, open, title, ...rest } = this.props

    return (
      <Mask open={open}>
        <div
          {...rest}
          aria-describedby="e-dialog-desc"
          aria-hidden={!open}
          aria-labelledby="e-dialog-title"
          className="e-dialog"
          onClick={this.handleMaskClick}
          onKeyDown={this.handleKeyDown}
          ref={el => (this.el = el)}
          role="dialog"
        >
          <div className="e-dialog__dialog">
            <Card>
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

  private handleKeyDown = (
    e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (e.keyCode === 27) {
      this.props.onClose()
    }
  }

  private handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === this.el) {
      this.props.onClose()
    }
  }
}
