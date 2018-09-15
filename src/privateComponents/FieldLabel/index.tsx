import * as React from 'react'
import './style.css'

export default class FieldLabel extends React.PureComponent<
  React.HTMLAttributes<HTMLSpanElement>
> {
  public render() {
    return <span {...this.props} className="e-field-label" />
  }
}
