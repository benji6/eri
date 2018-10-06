import classnames from 'classnames'
import * as React from 'react'
import './style.css'

const documentElement = document.documentElement as HTMLElement
const documentElementClassList = documentElement.classList

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose(): void
}

export default class Mask extends React.PureComponent<IProps> {
  public scrollY: number = 0

  public componentDidMount() {
    if (this.props.open) this.openMask()
    window.addEventListener('keydown', this.handleKeyDown)
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (this.props.open === nextProps.open) return
    if (nextProps.open) this.openMask()
    else this.closeMask()
  }

  public componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    documentElementClassList.remove('e-no-scroll')
  }

  public render() {
    const { onClose, open, ...rest } = this.props

    const className = classnames('e-mask', {
      'e-mask--closed': !open,
    })

    return (
      <div
        aria-hidden={!open}
        className={className}
        onClick={onClose}
        onKeyDown={this.handleKeyDown}
      >
        <div {...rest} />
      </div>
    )
  }

  private closeMask() {
    documentElementClassList.remove('e-no-scroll')
    window.scrollTo(0, this.scrollY)
    documentElement.style.top = null
  }

  private openMask() {
    const { scrollY } = window
    this.scrollY = scrollY
    documentElement.style.top = `${-scrollY}px`
    documentElementClassList.add('e-no-scroll')
  }

  private handleKeyDown = (
    e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (e.keyCode === 27) {
      this.props.onClose()
    }
  }
}
