import * as React from 'react'
import './style.css'

export default class FieldLabel extends React.PureComponent<
  React.HTMLAttributes<HTMLDivElement>
> {
  render() {
    return <span {...this.props} className="e-field-label" />
  }
}
