import classnames from 'classnames'
import * as React from 'react'
import './style.css'

const documentElementClassList = (document.documentElement as HTMLElement)
  .classList

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose(): void
}

export default class Mask extends React.PureComponent<IProps> {
  public componentDidMount() {
    if (this.props.open) {
      documentElementClassList.add('e-no-scroll')
    }
    window.addEventListener('keydown', this.handleKeyDown)
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (this.props.open === nextProps.open) {
      return
    }

    if (nextProps.open) {
      documentElementClassList.add('e-no-scroll')
    } else {
      documentElementClassList.remove('e-no-scroll')
    }
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
        onKeyDown={this.handleKeyDown}
      >
        <div {...rest} className="e-mask__container" onClick={onClose} />
      </div>
    )
  }

  private handleKeyDown = (
    e: KeyboardEvent | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (e.keyCode === 27) {
      this.props.onClose()
    }
  }
}
