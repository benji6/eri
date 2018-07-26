import * as React from 'react'
import './style.css'

class FieldLabel extends React.PureComponent<
  React.HTMLAttributes<HTMLDivElement>
> {
  render() {
    return <div {...this.props} className="e-field-label" />
  }
}

export default FieldLabel
