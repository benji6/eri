import * as React from 'react'
import './style.css'

export default class FieldLabel extends React.PureComponent<
  React.HTMLAttributes<HTMLSpanElement>
> {
  render() {
    return <span {...this.props} className="e-field-label" />
  }
}
