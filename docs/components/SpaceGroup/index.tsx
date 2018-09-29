import * as React from 'react'
import './style.css'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export default class SpaceGroup extends React.PureComponent<IProps> {
  public render() {
    const { children, ...rest } = this.props

    return <div className="d-space-group">{children}</div>
  }
}
