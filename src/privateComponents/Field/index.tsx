import classnames from 'classnames'
import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default class Field extends React.PureComponent<IProps> {
  render() {
    const { className, ...rest } = this.props

    return <div {...rest} className={classnames('e-field', className)} />
  }
}
