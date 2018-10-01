import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
}

export default class Mask extends React.PureComponent<IProps> {
  public render() {
    const { open, ...rest } = this.props

    const className = classnames('e-mask', {
      'e-mask--closed': !open,
    })

    return (
      <div className={className}>
        <div {...rest} className="e-mask__container" />
      </div>
    )
  }
}
